import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import Officers from "../../Officers";
import { OfficerCardProps, OfficersProps } from "../../Officers/types";
import { AddBoxOutlined } from "@mui/icons-material";
import colors from "../../../utils/colors";
import OfficerPopUp from "./AddOfficerPopUp";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

interface OfficerPanelProps extends OfficersProps {
	setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OfficerPanel(props: OfficerPanelProps) {
	const [editShown, setEditShown] = useState(false);
	const [editOfficer, setEditOfficer] = useState<OfficerCardProps | null>();
	const [newer, setNew] = useState(false);
	const handleClick = (officer: OfficerCardProps) => {
		setEditOfficer(officer);
		setEditShown(true);
	};
	const handleAdd = () => {
		setNew(true);
		setEditShown(true);
	};
	return (
		<Box sx={styles.officerPanel}>
			<Box sx={styles.officerPanelTitle}>
				<Typography variant="h3" flexGrow={1} />
				<Typography variant="h3" flexGrow={0.7}>
					Add Officers
				</Typography>
				<Button sx={styles.addButton} onClick={handleAdd}>
					<AddBoxOutlined fontSize="large" />
				</Button>
			</Box>
			{editShown && (
				<OfficerPopUp
					new={newer}
					setReload={props.setReload}
					setShown={setEditShown}
					officer={editOfficer}
					setNew={setNew}
				/>
			)}
			<Officers onClick={handleClick} officers={props.officers} noMemory />
		</Box>
	);
}
