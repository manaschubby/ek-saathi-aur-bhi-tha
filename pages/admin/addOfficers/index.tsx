import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Template from "../../template";
import OfficerPanel from "../../../components/Admin/OfficerPanel";
import axios from "axios";
import useVerify from "../../../hooks/adminVerify";
import useData from "../../../hooks/useData";

export default function AddOfficers() {
	const verifying = useVerify();
	const [reload, setReload] = useState(false);
	const { officers, loading } = useData(reload, setReload);
	return (
		<Box>
			<Template />
			{!verifying.verifying && verifying.admin && !loading && (
				<OfficerPanel setReload={setReload} officers={officers} />
			)}
		</Box>
	);
}
