import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import Officers from "../../Officers";
import { OfficerCardProps, OfficersProps } from "../../Officers/types";
import { AddBoxOutlined } from "@mui/icons-material";
import { Story, StoryProps } from "../../Stories/types";
import Stories from "../../Stories";
import EditStoryPopUp from "./EditStoryPopUp";

interface StoriesAdminPanelProps extends StoryProps {
	setReload?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function StoriesAdminPanel(props: StoriesAdminPanelProps) {
	const [editPopUpShown, setEditPopUpShown] = useState(false);
	const [editStory, setEditStory] = useState<Story>();
	const handleEdit = (id: string) => {
		setEditStory(props.stories.find((story) => story._id == id));
		setEditPopUpShown(true);
	};
	const handlePopUpClose = (save: boolean) => {
		if (save) {
			props.setReload(true);
		}
		setEditPopUpShown(false);
		setEditStory(null);
	};
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
							edit
							verify
							handleEdit={handleEdit}
							stories={props.stories.filter((story) => !story.verified)}
						/>
						<Typography variant="h3" textAlign={"center"} flexGrow={0.7}>
							Verified stories
						</Typography>
						<Stories
							verified={true}
							delete
							edit
							handleEdit={handleEdit}
							stories={props.stories.filter((story) => {
								return story.verified;
							})}
						/>
					</Box>
				</>
			)}
			{editPopUpShown && (
				<EditStoryPopUp handleClose={handlePopUpClose} story={editStory} />
			)}
		</Box>
	);
}
