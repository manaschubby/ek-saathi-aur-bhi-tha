import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Template from "../../template";
import useVerify from "../../../hooks/adminVerify";
import useData from "../../../hooks/useData";
import StoriesPanel from "../../../components/Admin/StoriesPanel";

export default function ValidateStories() {
	const verifying = useVerify("/admin/validateStories");
	const [reload, setReload] = useState(false);
	const { stories, loading } = useData(reload, setReload);
	return (
		<Box>
			<Template />
			{verifying.admin && !loading && (
				<StoriesPanel setReload={setReload} stories={stories} />
			)}
		</Box>
	);
}
