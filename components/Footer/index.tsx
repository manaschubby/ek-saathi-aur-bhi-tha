import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { styles } from "./styles";
import colors from "../../utils/colors";
import axios from "axios";
import { Mail } from "@mui/icons-material";

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
		<Box>
			<Box sx={styles.footerPanel}>
				<Box sx={styles.contactUs}>
					<Typography variant="h5" color={"#ffffff"}>
						Contact Us
					</Typography>
					<Link
						sx={styles.footerLink}
						href="mailto:ek.saathi.aur.bhi.tha@gmail.com"
					>
						<Mail />
					</Link>
				</Box>
				<Box sx={styles.contactUs}>
					<Typography variant="h5" color={"#ffffff"}>
						Quick Links
					</Typography>
					<Link sx={styles.footerLink} href="/">
						Home
					</Link>
					<Link sx={styles.footerLink} href="/memories">
						Memories
					</Link>
					<Link sx={styles.footerLink} href="/share">
						Tell a Tale
					</Link>
				</Box>

				<Box sx={styles.contactUs}>
					<Typography variant="h5" color={"#ffffff"}>
						External Links
					</Typography>
					<Link
						sx={styles.footerLink}
						href="https://nationalwarmemorial.gov.in/Default.php"
						target="none"
					>
						National War Memorial
					</Link>
					<Link
						sx={styles.footerLink}
						href="https://indianarmy.nic.in/Site/FormTemplete/frmTempSimple.aspx?MnId=kD7Y5w9NjPwstN1li7RZig==&ParentID=3gWV+IxPb+ImTzXrsmGYEQ=="
						target="none"
					>
						MARTYRS INDIAN ARMY PAGE
					</Link>
					<Link
						sx={styles.footerLink}
						href="https://indianarmy.nic.in/explore-army/war-memorial"
						target="none"
					>
						WAR MEMORIALS across the country
					</Link>
					<Link sx={styles.footerLink} href="/admin">
						Admin Page
					</Link>
				</Box>
			</Box>
			<Box
				sx={{
					position: "relative",
					bottom: 0,
					width: "100vw",
					height: "max-content",
					p: 0.5,
					color: colors.bloodRed,
					backgroundColor: colors.battleshipGray,
					textAlign: "center",
					fontSize: "0.75rem",
				}}
			>
				© 2023 Manas Producers. Website developed and maintained by{" "}
				<a href="https://www.linkedin.com/in/manas-ashwin-053755224/">
					<b>Manas Ashwin</b>
				</a>
			</Box>
		</Box>
	);
}
