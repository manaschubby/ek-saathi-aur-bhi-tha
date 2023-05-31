import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { styles } from "./styles";
import colors from "../../utils/colors";
import axios from "axios";
import { LinkedIn, Mail } from "@mui/icons-material";

export default function Footer() {
	const nameRef = useRef<HTMLInputElement>();
	const phoneNumber = useRef<HTMLInputElement>();
	const messageRef = useRef<HTMLInputElement>();

	return (
		<Box>
			<Box sx={styles.footerPanel}>
				<Box sx={styles.contactUs}>
					<Typography variant="h5" color={"#ffffff"}>
						Contact Us
					</Typography>
					<Link
						sx={styles.footerLink}
						href="mailto:ek.saathi.aur.bhi.tha.102@gmail.com"
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
					p: 0.75,
					color: colors.bloodRed,
					backgroundColor: colors.battleshipGray,
					textAlign: "center",
					fontSize: "1rem",
				}}
			>
				<b>
					© 2023 Manas Producers. Website developed and maintained by{" "}
					<a
						href="https://www.linkedin.com/in/manas-ashwin-053755224/"
						target="none"
					>
						<u>
							Manas Ashwin <LinkedIn fontSize="small" />
						</u>
					</a>
				</b>
			</Box>
		</Box>
	);
}
