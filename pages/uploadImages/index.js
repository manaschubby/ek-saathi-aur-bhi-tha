import React, { useRef, useState } from "react";
import Template from "../template";
import {
	Alert,
	Backdrop,
	Box,
	Button,
	CircularProgress,
	Container,
	FormControl,
	LinearProgress,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import styles from "../../components/Stories/styles";
import useData from "../../hooks/useData";
import axios from "axios";
import Footer from "../../components/Footer";
import Head from "next/head";
import { client } from "../../client";
import colors from "../../utils/colors";
const UploadImages = () => {
	const { officers, loading } = useData();
	const [sending, setSending] = useState(false);
	const [success, setSuccess] = useState(false);
	const [selectedOfficers, setSelectedOfficers] = useState([]);

	const fileInputRef = useRef(null);

	const handleUpload = () => {
		const file = fileInputRef.current.files[0];
		if (!file) {
			return alert("Please select an image file to upload");
		}
		if (selectedOfficers.length == 0) {
			return alert("Please select atlease one officer to upload");
		}
		setSending(true);
		if (image != "") {
			client.uploadFile(fileInputRef.current.files[0]).then((file) => {
				const baseURL = "https://ucarecdn.com/";
				const image = baseURL + file.uuid + "/";
				axios
					.post("/api/images", {
						image: image,
						officers: selectedOfficers,
					})
					.then((response) => {
						setSending(false);
						setSelectedOfficers([]);
						fileInputRef.current.value = "";
						setSuccess(true);
						setImage("");
						setTimeout(() => {
							setSuccess(false);
						}, 5000);
					})
					.catch((error) => {
						console.log(error);
						setSending(false);
						alert("Error uploading image");
					});
			});
			return;
		}
	};
	const [image, setImage] = useState("");
	return (
		<div>
			<Head>
				<title>Upload Image</title>
				<meta name="description" content="Upload image and select officers" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Template />
			<Backdrop open={sending} sx={{ zIndex: 1000, color: "#ffffff" }}>
				<h1>
					Uploading image... <CircularProgress />
				</h1>
			</Backdrop>
			{success && (
				<Alert
					sx={styles.alert}
					variant="filled"
					color="success"
					onClose={() => setSuccess(false)}
				>
					Image uploaded successfully! Please wait for image verification and
					avoid reuploading the image.
				</Alert>
			)}
			{!loading && (
				<Box sx={styles.main}>
					<Typography sx={styles.heading}>Upload Image</Typography>
					<FormControl sx={styles.form}>
						<input
							onChange={(e) => {
								if (e.currentTarget.files[0]) {
									setImage(URL.createObjectURL(e.currentTarget.files[0]));
								}
							}}
							type="file"
							accept="image/*"
							ref={fileInputRef}
						/>
						<img
							src={image}
							width={250}
							height={250}
							style={{ objectFit: "contain" }}
							alt="No Image Chosen"
						/>
						<Typography>Select Officers</Typography>
						<Select
							multiple
							sx={{
								height: "max-content",
								maxWidth: "80%",
							}}
							value={selectedOfficers}
							placeholder="Select officers"
							onChange={(event) => setSelectedOfficers(event.target.value)}
							inputProps={{
								name: "officers",
								id: "officers-select",
								"aria-multiline": true,
								style: {
									lineBreak: "auto",
								},
							}}
							label={"Select Officers"}
						>
							{officers.map((officer) => (
								<MenuItem key={officer._id} value={officer._id}>
									{officer.name}
								</MenuItem>
							))}
						</Select>
						<Button
							variant="contained"
							color="primary"
							sx={{ maxWidth: "80%" }}
							onClick={handleUpload}
						>
							Upload
						</Button>
					</FormControl>
				</Box>
			)}
			<Footer />
		</div>
	);
};

export default UploadImages;
