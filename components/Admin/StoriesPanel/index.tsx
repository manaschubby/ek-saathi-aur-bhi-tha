import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import Officers from "../../Officers";
import { OfficerCardProps, OfficersProps } from "../../Officers/types";
import { AddBoxOutlined } from "@mui/icons-material";
import { StoryProps } from "../../Stories/types";

interface StoriesAdminPanelProps extends StoryProps {
	setReload?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function StoriesPanel(props: StoriesAdminPanelProps) {
	return (
		<Box sx={styles.officerPanel}>
			<Box sx={styles.officerPanelTitle}>
				<Typography variant="h3" flexGrow={1} />
				<Typography variant="h3" flexGrow={0.7}>
					Verify stories
				</Typography>
				<StoriesPanel verified={false} stories={props.stories} />
			</Box>
		</Box>
	);
}
