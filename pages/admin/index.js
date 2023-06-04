import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useVerify from "../../hooks/adminVerify";
import Template from "../template";
import Link from "next/link";

const Index = () => {
	const router = useRouter();
	const verify = useVerify("/admin");
	return (
		<div>
			<Template />
			{verify.admin && (
				<>
					<h1>Admin links</h1>
					<Link href="/admin/addOfficers">
						<h1>Admin Officers</h1>
					</Link>
					<Link href="/admin/validateStories">
						<h1>Admin Validate Stories</h1>
					</Link>
					<Link href="/admin/validateImages">
						<h1>Admin Validate Images</h1>
					</Link>
				</>
			)}
		</div>
	);
};

export default Index;
