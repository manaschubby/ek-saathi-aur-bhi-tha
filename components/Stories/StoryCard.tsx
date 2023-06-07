import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Icon,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles";
import { Story, StoryCardProps } from "./types";
import axios from "axios";

export default function StoryCard(props: StoryCardProps) {
	const router = useRouter();
	const handleCardClick = () => {
		setViewFull(!viewFull);
	};
	const handleDelete = () => {
		axios
			.delete("/api/stories", {
				params: { id: props.story._id },
				headers: {
					Authorization: process.env.NEXT_PUBLIC_AUTH_KEY,
				},
			})
			.then((response) => {
				window.location.reload();
				console.log(response);
			});
		console.log(props.story._id);
	};
	const handleValidate = () => {
		axios
			.put(
				"/api/stories",
				{
					verified: true,
				},
				{
					params: {
						id: props.story._id,
					},
					headers: {
						Authorization: process.env.NEXT_PUBLIC_AUTH_KEY,
					},
				}
			)
			.then((response) => {
				window.location.reload();
				console.log(response);
			});
	};
	const [viewFull, setViewFull] = useState(false);
	return (
		<Card sx={styles.card}>
			<CardActionArea onClick={handleCardClick}>
				<CardMedia
					component={"img"}
					sx={styles.avatar}
					loading="lazy"
					image={
						props.story.image +
						"-/preview/938x432/-/quality/smart/-/format/auto/"
					}
				/>
				<CardContent>
					<Typography sx={styles.name}>{props.story.officer}</Typography>
					<Box sx={{ display: "flex", ml: 1 }}>
						<Typography sx={styles.parameter_title}>Author</Typography>
						<Typography flexGrow={1} />
						<Typography sx={styles.parameter_value}>
							{props.story.author}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", ml: 1 }}>
						<Typography sx={styles.parameter_title}>Written on</Typography>
						<Typography flexGrow={1} />
						<Typography sx={styles.parameter_value}>
							{props.story.createdAt.toString().slice(0, 10)}
						</Typography>
					</Box>
					<Typography
						variant="body2"
						sx={{
							maxWidth: { xs: 350, sm: 400 },
							lineBreak: "strict",
						}}
						gutterBottom
					>
						{props.story.body.slice(0, 100).length === props.story.body.length
							? props.story.body
							: viewFull
							? props.story.body
							: props.story.body.slice(0, 100) + "..."}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{props.verify && (
					<Button color="success" variant="outlined" onClick={handleValidate}>
						Validate
					</Button>
				)}
				{props.delete && (
					<Button color="error" variant="contained" onClick={handleDelete}>
						Delete
					</Button>
				)}
				{props.edit && (
					<Button
						variant="contained"
						onClick={() => props.handleEdit(props.story._id)}
					>
						Edit
					</Button>
				)}
			</CardActions>
		</Card>
	);
}
