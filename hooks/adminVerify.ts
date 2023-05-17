import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function useVerify(currRoute = "/admin/addOfficers"): boolean {
	const [verifying, setVerifying] = useState(true);
	const router = useRouter();
	useEffect(() => {
		const account = localStorage.getItem("ek-saathi-token");
		const reRoute = () => {
			if (!window.location.pathname.endsWith("/admin/login")) {
				router.push("/admin/login");
				return () => {
					alert("Login to proceed further");
				};
			}
		};
		if (!account) {
			setVerifying(false);
			return reRoute();
		}
		const source = axios.CancelToken.source();
		axios
			.get("/api/admin/verify", {
				cancelToken: source.token,
				params: {
					account: account,
				},
			})
			.then((response) => {
				if (response.data.verified) {
					setVerifying(false);
					if (!window.location.pathname.endsWith(currRoute)) {
						router.push(currRoute);
					}
				} else {
					setVerifying(false);
					return reRoute();
				}
			});
	});

	return verifying;
}
