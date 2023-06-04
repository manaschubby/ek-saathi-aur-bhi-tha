import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Template from "../../template";
import OfficerPanel from "../../../components/Admin/OfficerPanel";
import axios from "axios";
import useVerify from "../../../hooks/adminVerify";
import LoginPanel from "../../../components/Admin/LoginPanel";

export default function Login() {
	const verifying = useVerify("/admin/addOfficers");
	return (
		<Box>
			<Template />
			{!verifying.verifying && !verifying.admin && <LoginPanel />}
		</Box>
	);
}
