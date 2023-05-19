import React, { useRef, useState } from "react";
import Template from "../template";
import {
	Alert,
	Backdrop,
	Box,
	Button,
	Container,
	FormControl,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import styles from "../../components/Stories/styles";
import useData from "../../hooks/useData";
import Stories from "../../components/Stories/";
import { OfficerCardProps } from "../../components/Officers/types";
import axios from "axios";
const Share = () => {
	const { officers, loading } = useData();
	const [sending, setSending] = useState<boolean>(false);
	const [success, setSuccess] = useState(false);
	const emailRef = useRef<HTMLInputElement>();
	const nameRef = useRef<HTMLInputElement>();
	const officerRef = useRef<HTMLSelectElement>();
	const memoryRef = useRef<HTMLInputElement>();
	const colorWhite = {
		sx: {
			color: "white",
		},
	};
	const emptyFields = () => {
		memoryRef.current.value = "";
		emailRef.current.value = "";
		nameRef.current.value = "";
		officerRef.current.value = "None";
	};
	const handleSave = () => {
		if (
			memoryRef.current.value == "" ||
			nameRef.current.value == "" ||
			officerRef.current.value == "None"
		) {
			return alert("Please Enter All the details");
		}
		setSending(true);
		const data = {
			officer: officerRef.current.value,
			author: nameRef.current.value,
			verified: false,
			body: memoryRef.current.value,
		};
		axios
			.post(
				"/api/stories",
				emailRef.current.value == ""
					? data
					: { ...data, email: emailRef.current.value }
			)
			.then((response) => {
				setSending(false);
				emptyFields();
				setSuccess(true);
				setTimeout(() => {
					setSuccess(false);
					window.location.reload();
				}, 5000);
			});
	};
	return (
		<div>
			<Template />
			<Backdrop open={sending}>Saving your tale.</Backdrop>
			{success && (
				<Alert sx={styles.alert} variant="filled" color="success">
					Thank you for sharing. You can find your story on the memories page
					once it is verified. Please reach out to us incase of any queries or
					assistance required.
				</Alert>
			)}
			{!loading && (
				<Box sx={styles.main}>
					<Typography sx={styles.heading}>TELL A TALE</Typography>
					<Typography sx={styles.heading}>Share a memory</Typography>
					<FormControl sx={styles.form}>
						<TextField
							InputProps={colorWhite}
							InputLabelProps={colorWhite}
							label={"Your Name"}
							inputRef={nameRef}
						/>
						<TextField
							InputProps={colorWhite}
							InputLabelProps={colorWhite}
							label={"Your Email (optional)"}
							inputRef={emailRef}
						/>
						<Select
							sx={{
								color: "white",
							}}
							label={"Officer"}
							defaultValue={"None"}
							inputRef={officerRef}
						>
							<MenuItem value={"None"}>Select Officer</MenuItem>
							{officers.map((officer: OfficerCardProps) => {
								return (
									<MenuItem key={officer._id} value={officer._id}>
										{officer.name}
									</MenuItem>
								);
							})}
						</Select>
						<TextField
							variant="filled"
							multiline
							InputProps={colorWhite}
							InputLabelProps={colorWhite}
							label={"Share a memory"}
							inputRef={memoryRef}
						/>
						<Button
							sx={{ width: "30%", mx: "auto" }}
							variant="contained"
							color="success"
							onClick={handleSave}
						>
							Save
						</Button>
					</FormControl>
				</Box>
			)}
		</div>
	);
};

export default Share;
