import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Icon,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles";
import { Story, StoryCardProps } from "./types";

export default function StoryCard(props: StoryCardProps) {
	const router = useRouter();
	const handleCardClick = () => {
		setViewFull(!viewFull);
	};
	const [viewFull, setViewFull] = useState(false);
	return (
		<Card sx={styles.card}>
			<CardActionArea onClick={handleCardClick}>
				<CardMedia
					sx={styles.avatar}
					image={"http://localhost:3002/assets/mainPanelBG.jpeg"}
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
					<Typography mx={"auto"} pt={1} variant="body1">
						{viewFull ? props.story.body : props.story.body.slice(0, 100)}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
