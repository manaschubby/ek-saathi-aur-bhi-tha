import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { styles } from "./styles";
import colors from "../../utils/colors";
import axios from "axios";

export default function Footer() {
	const nameRef = useRef<HTMLInputElement>();
	const phoneNumber = useRef<HTMLInputElement>();
	const messageRef = useRef<HTMLInputElement>();
	const handleSave = () => {
		if (
			nameRef.current.value.trim() === "" ||
			phoneNumber.current.value.trim() === "" ||
			messageRef.current.value.trim() === ""
		) {
			return alert("Enter all required fields");
		}
		if (!phoneNumber.current.value.trim().match(/^\d{10}$/)) {
			return alert("Please enter valid phone number");
		}
		axios
			.post("/api/contactus", {
				name: nameRef.current.value.trim(),
				phone: phoneNumber.current.value.trim(),
				message: messageRef.current.value.trim(),
			})
			.then(() => {
				alert("Sent successfuly");
				window.location.reload();
			});
	};
	return (
		<Box sx={styles.footerPanel}>
			<Box sx={styles.contactUs}>
				<Typography variant="h5" color={colors.bloodRed}>
					Contact
				</Typography>
				<TextField inputRef={nameRef} required label="Name" />
				<TextField inputRef={phoneNumber} required label="Phone Number" />
				<TextField inputRef={messageRef} required label="Your Message" />
				<Button onClick={handleSave} color="info" variant="outlined">
					Send
				</Button>
			</Box>
			<Box sx={styles.contactUs}>
				<Typography variant="h5" color={colors.bloodRed}>
					Quick Links
				</Typography>
				<Link
					sx={{ color: colors.offRed, textDecoration: "none !important" }}
					href="/"
				>
					Home
				</Link>
				<Link
					sx={{ color: colors.offRed, textDecoration: "none !important" }}
					href="/memories"
				>
					Memories
				</Link>
				<Link
					sx={{ color: colors.offRed, textDecoration: "none !important" }}
					href="/share"
				>
					Tell a Tale
				</Link>
				<Link
					sx={{ color: colors.offRed, textDecoration: "none !important" }}
					href="/admin"
				>
					Admin Page
				</Link>
			</Box>
		</Box>
	);
}
