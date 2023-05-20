import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import Officers from "../../Officers";
import { OfficerCardProps, OfficersProps } from "../../Officers/types";
import { AddBoxOutlined } from "@mui/icons-material";
import { StoryProps } from "../../Stories/types";
import Stories from "../../Stories";

interface StoriesAdminPanelProps extends StoryProps {
	setReload?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function StoriesAdminPanel(props: StoriesAdminPanelProps) {
	return (
		<Box sx={styles.officerPanel}>
			{props.stories && (
				<>
					<Box sx={styles.officerPanelTitle}>
						<Typography variant="h3" textAlign={"center"} flexGrow={1}>
							Verify stories
						</Typography>
					</Box>
					<Box>
						<Stories
							verified={false}
							delete
							verify
							stories={props.stories.filter((story) => !story.verified)}
						/>
						<Typography variant="h3" textAlign={"center"} flexGrow={0.7}>
							Verified stories
						</Typography>
						<Stories
							verified={true}
							delete
							stories={props.stories.filter((story) => {
								return story.verified;
							})}
						/>
					</Box>
				</>
			)}
		</Box>
	);
}
