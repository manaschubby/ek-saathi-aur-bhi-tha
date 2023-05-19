import React, { useState } from "react";
import Template from "../template";
import { Box, Container, Typography } from "@mui/material";
import styles from "../../components/Stories/styles";
import { useEffect } from "react";
import axios from "axios";
import StoryCard from "../../components/Stories/StoryCard";
import useData from "../../hooks/useData";
import Stories from "../../components/Stories/";
const Index = () => {
	const { stories } = useData();
	return (
		<div>
			<Template />
			<Box sx={styles.main}>
				<Typography sx={styles.heading}>MEMORIES</Typography>
				<Container sx={styles.cardView} component={"div"}>
					{stories && <Stories stories={stories} verified />}
				</Container>
			</Box>
		</div>
	);
};

export default Index;
