import {
	Alert,
	Box,
	Button,
	Container,
	Grid,
	Slide,
	Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import axios from "axios";
import { PlayArrowSharp } from "@mui/icons-material";
import "../../styles/Home.module.scss";
import Image from "next/image";
import colors from "../../utils/colors";
const MainLandingPanel = () => {
	const [alertShown, setAlertShown] = useState(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [plays, setPlays] = useState<Number>();
	const [playing, setPlaying] = useState(false);
	const [played, setPlayed] = useState(false);
	const [title, setTitle] = useState("एक साथी और भी था");
	useEffect(() => {
		refresh();
	}, []);
	const refresh = () => {
		setLoading(true);
		axios.get("/api/plays").then((response) => {
			const { number } = response.data;
			setPlays(number);
			setLoading(false);
		});
		setLoading(true);
	};
	const videoRef = useRef<HTMLVideoElement>();
	const handleEnded = () => {
		setPlayed(false);
		setPlaying(false);
		videoRef.current.pause();
		setAlertShown(true);
		setTimeout(() => {
			setAlertShown(false);
		}, 8000);
	};
	const handlePlay = () => {
		if (!playing) {
			videoRef.current.play();
			setPlaying(true);
			if (!played) {
				axios.put("/api/plays").then((response) => {
					setPlayed(true);
					refresh();
				});
			}
		} else {
			setPlaying(false);
			videoRef.current.pause();
		}
	};
	return (
		<Container sx={styles.mainPanel}>
			<video
				title="The Last Post"
				ref={videoRef}
				onEnded={handleEnded}
				style={{ width: "0px", height: "0px" }}
				playsInline
			>
				<source src="/assets/lastpost.mp3" />
			</video>
			<Slide direction="down" in={alertShown} mountOnEnter unmountOnExit>
				<Alert
					elevation={15}
					sx={styles.alert}
					variant="filled"
					color="success"
				>
					Thank You for Playing the Last Post. Please leave a story at the
					stories page.
				</Alert>
			</Slide>
			<Grid sx={styles.mainPanelGrid}>
				<Typography variant="h6" sx={styles.mainPanelDesc}>
					Memorial of the Band of Brothers
				</Typography>
				<Typography flex={1} variant="h3" sx={styles.mainPanelTitle}>
					{title}
				</Typography>
				<Button
					sx={playing ? styles.playButtonPlayed : styles.playButton}
					onClick={handlePlay}
					variant="contained"
				>
					{loading ? (
						<Box sx={{ width: 30 }}>
							<SVG />
						</Box>
					) : playing ? (
						<Box
							sx={{
								backgroundImage: 'url("/assets/Last-Post.jpg")',
								backgroundSize: "cover",
								backgroundPosition: "center",
								width: 150,
								height: 150,
							}}
						>
							<Image
								src={"/assets/loading.gif"}
								alt="loading"
								width={100}
								height={100}
								style={{
									position: "relative",
									top: "30%",
									mixBlendMode: "darken",
								}}
							/>{" "}
						</Box>
					) : (
						<>
							<PlayArrowSharp sx={{ mr: 2 }} />
							Play &quot;The Last Post&quot; for your comrade
						</>
					)}
				</Button>
				{!loading ? (
					<Typography variant="h6" sx={styles.lastPost}>
						The Last Post has been played{` `}
						<div
							style={{ color: "white", display: "inline" }}
						>{`${plays}`}</div>{" "}
						times for our comrades
					</Typography>
				) : (
					<Typography variant="h6" sx={styles.lastPost}>
						Loading...
					</Typography>
				)}
			</Grid>
		</Container>
	);
};

const SVG = () => {
	return (
		<svg
			version="1.1"
			id="L9"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 100 100"
			enableBackground="new 0 0 0 0"
			xmlSpace="preserve"
		>
			<path
				fill="#fff"
				d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
			>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					dur="1s"
					from="0 50 50"
					to="360 50 50"
					repeatCount="indefinite"
				/>
			</path>
		</svg>
	);
};

export default MainLandingPanel;
