import React from "react";
import styles from "./styles";
import OfficerCard from "./OfficerCard";
import { Typography, Container, Box } from "@mui/material";
import { OfficersProps } from "./types";
import colors from "../../utils/colors";

const Officers = (props: OfficersProps) => {
	return (
		<Box sx={styles.main} component={"div"}>
			{!props.noMemory && (
				<Typography sx={styles.heading}>In Memory of</Typography>
			)}
			{!props.noMemory && (
				<Typography color={colors.bloodRed} variant="subtitle1">
					Click on the officer to view memories
				</Typography>
			)}
			<Container sx={styles.cardView} component={"div"}>
				{props.officers.map((officer, index) => {
					return (
						<OfficerCard
							key={index}
							onClick={props.onClick ? props.onClick : null}
							{...officer}
						/>
					);
				})}
			</Container>
		</Box>
	);
};

export default Officers;
