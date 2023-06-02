import React, { useEffect, useRef, useState } from "react";
import { Story, StoryCardProps } from "../../Stories/types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styles } from "../styles";
import axios from "axios";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

interface EditStoryPopUpProps extends StoryCardProps {
	handleClose: (save: boolean) => void;
}

export default function EditStoryPopUp(props: EditStoryPopUpProps) {
	const authorRef = useRef<HTMLInputElement>();
	const memoryRef = useRef<HTMLInputElement>();
	const wrapperRef = useRef();
	useOutsideAlerter(wrapperRef, useState(null)[1], true);
	const { story } = props;
	const loadRefs = () => {
		authorRef.current.value = story.author;
		memoryRef.current.value = story.body;
	};
	useEffect(() => {
		if (story) {
			loadRefs();
		}
	}, [story]);
	const handleSave = () => {
		if (authorRef.current.value == "" || memoryRef.current.value == "") {
			return alert("Please fill all fields");
		}
		axios
			.put(
				"/api/stories",
				{
					$set: {
						body: memoryRef.current.value.trim(),
						author: authorRef.current.value.trim(),
					},
				},
				{
					params: {
						id: story._id,
					},
					headers: {
						Authorization: process.env.NEXT_PUBLIC_AUTH_KEY,
					},
				}
			)
			.then(() => {
				props.handleClose(true);
			});
	};
	const handleCancel = () => {
		props.handleClose(false);
	};

	return (
		<Box ref={wrapperRef} sx={styles.popUp}>
			<Typography variant="h3">Edit Story</Typography>
			{props.story.email && (
				<Typography variant="h5">Contact Email {props.story.email}</Typography>
			)}
			<TextField
				inputRef={authorRef}
				variant="filled"
				multiline
				label={"Author"}
			/>
			<TextField
				inputRef={memoryRef}
				variant="filled"
				multiline
				label={"Memory"}
				sx={{
					width: "80%",
				}}
			/>
			<Button onClick={handleSave} variant="contained" color="success">
				Save
			</Button>
			<Button onClick={handleCancel} variant="outlined" color="error">
				Cancel
			</Button>
		</Box>
	);
}
