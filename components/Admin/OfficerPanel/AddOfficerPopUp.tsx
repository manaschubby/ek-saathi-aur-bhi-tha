import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import Officers from "../../Officers";
import { OfficerCardProps } from "../../Officers/types";
import { AddBoxOutlined } from "@mui/icons-material";
import colors from "../../../utils/colors";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

interface OfficerPopUpProps {
	officer?: OfficerCardProps;
	new?: boolean;
	setShown?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OfficerPopUp(props: OfficerPopUpProps) {
	const wrapperRef = useRef();
	const [edited, setEdited] = useState(true);
	useOutsideAlerter(wrapperRef, props.setShown, edited);

	return (
		<Box ref={wrapperRef} sx={styles.popUp}>
			<Typography variant="h3">
				{props.new ? <>Add an Officer</> : <>Edit {props.officer.name}</>}
			</Typography>
		</Box>
	);
}
