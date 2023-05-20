import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";
import { OfficerCardProps } from "../types";
import styles from "../styles";
import { useRouter } from "next/router";
import { list } from "./list";

export default function OfficerCard(props: OfficerCardProps) {
	const router = useRouter();
	const handleCardClick = () => {
		if (props.onClick) {
			props.onClick(props);
		}
	};
	return (
		<Card sx={styles.card}>
			<CardActionArea onClick={handleCardClick}>
				<CardMedia
					sx={styles.avatar}
					image={props.image ? props.image : "/assets/Placeholder.jpeg"}
				/>
				<CardContent>
					<Typography sx={styles.name}>{props.name}</Typography>
					{list(props)}
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
