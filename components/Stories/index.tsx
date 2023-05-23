import { Container } from "@mui/material";
import React from "react";
import StoryCard from "./StoryCard";
import { StoryProps } from "./types";
import styles from "./styles";

export default function Stories(props: StoryProps) {
	return (
		<Container sx={styles.cardView} component={"div"}>
			{props.stories &&
				props.stories.map((story, index) => {
					if (story.verified == props.verified) {
						return (
							<StoryCard
								story={story}
								delete={props.delete}
								edit={props.edit}
								handleEdit={props.handleEdit}
								verify={props.verify}
								key={index}
							/>
						);
					}
				})}
		</Container>
	);
}
