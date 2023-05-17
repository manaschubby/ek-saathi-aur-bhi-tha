import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import Officers from "../../Officers";
import { OfficersProps } from "../../Officers/types";
import { AddBoxOutlined } from "@mui/icons-material";
import colors from "../../../utils/colors";
import OfficerPopUp from "./AddOfficerPopUp";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

interface OfficerPanelProps extends OfficersProps {}

export default function OfficerPanel(props: OfficerPanelProps) {
	const [editShown, setEditShown] = useState(true);
	return (
		<Box sx={styles.officerPanel}>
			<Box sx={styles.officerPanelTitle}>
				<Typography variant="h3" flexGrow={1} />
				<Typography variant="h3" flexGrow={0.7}>
					Add Officers
				</Typography>
				<Button sx={{ color: colors.black, fontSize: "large", flexGrow: 0.3 }}>
					<AddBoxOutlined fontSize="large" />
				</Button>
			</Box>
			{editShown && (
				<OfficerPopUp setShown={setEditShown} officer={props.officers[0]} />
			)}
			<Officers officers={props.officers} noMemory />
		</Box>
	);
}
