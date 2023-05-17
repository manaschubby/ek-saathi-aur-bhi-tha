import React, { useRef } from "react";
import { styles } from "../styles";
import {
	Box,
	Button,
	FormControl,
	FormGroup,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import { NextApiResponse } from "next";

export default function LoginPanel() {
	const email = useRef<HTMLTextAreaElement>();
	const password = useRef<HTMLTextAreaElement>();
	const handleSubmit = () => {
		axios
			.get("/api/admin/login", {
				params: {
					email: email.current.value,
					password: password.current.value,
				},
			})
			.then((response) => {
				if (response.data.verified) {
					localStorage.setItem("ek-saathi-token", response.data.token);
					window.location.replace("/admin");
				}
			});
	};
	return (
		<Box sx={styles.loginPanel}>
			<FormControl sx={styles.loginForm}>
				<Typography variant="h3">ADMIN LOGIN</Typography>
				<TextField
					inputRef={email}
					required
					label="Email"
					type="email"
					variant="outlined"
				/>
				<TextField
					inputRef={password}
					required
					label="Password"
					type="password"
					variant="outlined"
				/>
				<Button type="submit" onClick={handleSubmit}>
					Login
				</Button>
			</FormControl>
		</Box>
	);
}
