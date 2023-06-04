import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	IconButton,
	MenuItem,
	Paper,
	Select,
	Snackbar,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useVerify from "../../../hooks/adminVerify";
import { Check } from "@mui/icons-material";
import Template from "../../template";
import useData from "../../../hooks/useData";
import { OfficerCardProps } from "../../../components/Officers/types";
import ImagesTableCell from "../../../components/Admin/ImagesPanel/ImagesTableCell";

const ImageValidationPage = () => {
	const { verifying, admin } = useVerify("validateImages");
	const [images, setImages] = useState([]);
	const [selectedOfficers, setSelectedOfficers] = useState([]);
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const { officers, loading } = useData();

	useEffect(() => {
		if (!loading) {
			fetchImages();
		}
	}, [officers]);
	const fetchImages = async () => {
		try {
			const response = await axios.get("/api/images");
			response.data.forEach((image) => {
				image.officers = image.officers.map((officer) => {
					return officers.find((findofficer) => findofficer._id == officer);
				});
			});
			setImages(response.data);
			console.log(response.data);
		} catch (error) {
			console.error("Error fetching images:", error);
		}
	};

	const handleImageValidation = async (
		imageId,
		selectedOfficers: Array<string>
	) => {
		try {
			const response = await axios.put(
				`/api/images?id=${imageId}`,
				{
					validated: true,
					selectedOfficers: selectedOfficers,
				},
				{
					headers: {
						Authorization: process.env.NEXT_PUBLIC_AUTH_KEY,
					},
				}
			);
			if (response.status === 200) {
				setOpenSnackbar(true);
				fetchImages();
			}
		} catch (error) {
			console.error("Error validating image:", error);
		}
	};

	const handleDeleteImage = async (imageId) => {
		try {
			const response = await axios.delete(`/api/images?id=${imageId}`, {
				headers: {
					Authorization: process.env.NEXT_PUBLIC_AUTH_KEY,
				},
			});
			if (response.status === 200) {
				fetchImages();
				setOpenSnackbar(true);
			}
		} catch (error) {
			console.error("Error deleting image:", error);
		}
	};

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	return (
		admin &&
		!loading && (
			<Box>
				<Template />
				<Typography variant="h4" component="h1" align="center" mt={8} mb={2}>
					Image Validation
				</Typography>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Image</TableCell>
								<TableCell>Officers</TableCell>
								<TableCell>Validated</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{images.map((image, index) => {
								return (
									<ImagesTableCell
										key={index}
										image={image}
										handleDelete={handleDeleteImage}
										handleValidate={handleImageValidation}
										officers={officers}
									/>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
				<Snackbar
					open={openSnackbar}
					autoHideDuration={3000}
					onClose={handleCloseSnackbar}
					message="Action completed successfully"
				/>
			</Box>
		)
	);
};

export default ImageValidationPage;
