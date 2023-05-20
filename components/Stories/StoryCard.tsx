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
				<CardMedia sx={styles.avatar} image={props.story.image} />
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
							lineBreak: "anywhere",
							maxWidth: { xs: 350, sm: 400 },
						}}
						gutterBottom
					>
						{viewFull ? props.story.body : props.story.body.slice(0, 100)}
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
			</CardActions>
		</Card>
	);
}
