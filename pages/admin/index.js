import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useVerify from "../../hooks/adminVerify";
import Template from "../template";

const Index = () => {
	const router = useRouter();
	const verify = useVerify("/admin");
	return (
		<div>
			<Template />
			{verify.admin && (
				<>
					<h1>Admin links</h1>
					<a href="/admin/addOfficers">
						<h1>Admin Officers</h1>
					</a>
					<a href="/admin/validateStories">
						<h1>Admin Validate Stories</h1>
					</a>
					<a href="/admin/validateImages">
						<h1>Admin Validate Images</h1>
					</a>
				</>
			)}
		</div>
	);
};

export default Index;
