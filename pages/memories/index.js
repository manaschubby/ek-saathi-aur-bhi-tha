import React, { useState } from "react";
import Template from "../template";
import { Box, Container, Typography } from "@mui/material";
import styles from "../../components/Stories/styles";
import { useEffect } from "react";
import axios from "axios";
import StoryCard from "../../components/Stories/StoryCard";
import useData from "../../hooks/useData";
import Stories from "../../components/Stories/";
import Footer from "../../components/Footer";
import Head from "next/head";
const Index = () => {
	const { stories, storiesLoaded } = useData();
	return (
		<div>
			<Head>
				<title>एक साथी और भी था</title>
				<meta
					name="description"
					content="Memorial of the band of brothers. IMA Summer of '98."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Template />
			<Box sx={styles.main}>
				<Typography sx={styles.heading}>MEMORIES</Typography>
				{!storiesLoaded && (
					<Typography variant="h3">Loading Memories...</Typography>
				)}
				<Container sx={styles.cardView} component={"div"}>
					{storiesLoaded && <Stories stories={stories} verified />}
				</Container>
			</Box>
			<Footer />
		</div>
	);
};

export default Index;
