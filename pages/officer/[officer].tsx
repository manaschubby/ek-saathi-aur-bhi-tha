"use client";
import React from "react";
import Template from "../template";
import Head from "next/head";
import { useRouter } from "next/router";
import useOfficer from "../../hooks/useOfficer";
import {
	Backdrop,
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	CircularProgress,
	Typography,
} from "@mui/material";
import colors from "../../utils/colors";
import Image from "next/image";
import { list } from "../../components/Officers/OfficerCard/list";
import Footer from "../../components/Footer";

const Officer = () => {
	const {
		officer,
		officerLoaded,
		stories,
		storiesLoaded,
		images,
		imagesLoaded,
	} = useOfficer();
	return (
		<div>
			<Head>
				<title>
					{officerLoaded
						? officer.rank + " " + officer.name + " - EK SAATHI AUR BHI THA"
						: "EK SAATHI AUR BHI THA"}
				</title>
				<meta
					name="description"
					content="Memorial of the band of brothers. IMA Summer of '98."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Template />
			{officerLoaded && storiesLoaded && imagesLoaded ? (
				<Box
					sx={{
						width: "100vw",
						minHeight: "100vh",
						backgroundImage: `linear-gradient(to bottom, ${colors.sage} , ${colors.battleshipGray},${colors.sage} , ${colors.bloodRed})`,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						pt: 10,
						pb: 20,
						textTransform: "uppercase",
					}}
				>
					{officer.image && (
						<Image
							src={
								officer.image +
								"-/preview/938x432/-/quality/smart/-/format/auto/"
							}
							width={250}
							height={250}
							style={{
								objectFit: "contain",
							}}
							alt={officer.name}
						/>
					)}
					<Typography variant="h3" textAlign={"center"} color={colors.bloodRed}>
						{officer.rank} {officer.name}
					</Typography>
					<CardContent sx={{ minWidth: "50%" }}>{list(officer)}</CardContent>
					{storiesLoaded && stories.length > 0 && (
						<Typography variant="h4" pt={5} color={colors.bloodRed}>
							Memories
						</Typography>
					)}
					{storiesLoaded &&
						stories.map((story, index) => {
							return (
								<Card
									key={index}
									sx={{
										width: "80vw",
										display: "flex",
										flexDirection: "column",
										backdropFilter: "blur(10px)",
										mt: 5,
										px: 4,
										py: 2,
									}}
								>
									<Typography
										variant={"h6"}
										textAlign={"justify"}
										textTransform={"initial"}
										color={colors.black}
										py={2}
										lineHeight={1.25}
									>
										<b>{story.body}</b>
									</Typography>
									<CardMedia>
										<Typography variant="body1" textAlign={"left"}>
											Author: <b>{story.author}</b>
										</Typography>
										<Typography variant="body2" textAlign={"left"}>
											Written on:{" "}
											<b>{story.createdAt.toString().slice(0, 10)}</b>
										</Typography>
									</CardMedia>
								</Card>
							);
						})}
					{images && images.length > 0 && (
						<>
							<Typography variant="h4" pt={5} color={colors.bloodRed}>
								Photos
							</Typography>

							{images.map((image, index) => {
								return (
									<Card
										key={index}
										sx={{
											width: "80vw",
											display: "flex",
											flexDirection: "column",
											backdropFilter: "blur(10px)",
											mt: 5,
											px: 4,
											py: 2,
										}}
									>
										<CardMedia
											src={
												image.image +
												"-/preview/938x432/-/quality/smart/-/format/auto/"
											}
											component={"img"}
											sx={{
												mx: "auto",
												maxHeight: 250,
												objectFit: "contain",
												borderWidth: "1px",
											}}
										/>
										<CardContent
											sx={{
												display: "flex",
												flexWrap: "nowrap",
												flexFlow: "wrap",
												overflow: "hidden",
											}}
										>
											{image.officers.length != 1 && (
												<Typography variant="h6" fontWeight={100}>
													Officers in this image:{" "}
												</Typography>
											)}
											{image.officers.map((officer, index) => {
												return (
													<Typography key={index} variant="h6">
														<b>
															{officer.rank} {officer.name}
														</b>
														{index == image.officers.length - 1 ? (
															<></>
														) : (
															<>, </>
														)}
													</Typography>
												);
											})}
										</CardContent>
									</Card>
								);
							})}
						</>
					)}
				</Box>
			) : (
				<Backdrop open={!(officerLoaded && storiesLoaded && imagesLoaded)}>
					Loading...
					<CircularProgress />
				</Backdrop>
			)}
			<Footer />
		</div>
	);
};

export default Officer;
