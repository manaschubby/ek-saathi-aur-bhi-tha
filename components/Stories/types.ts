import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { SxProps } from "@mui/material";

interface Parameter {
	icon: ReactJSXElement;
	title: string;
	value: any;
}

export interface Story {
	officer: string;
	author: string;
	body: string;
	createdAt: Date;
	email: string;
	verified: boolean;
	_id?: string;
	image?: string;
}
export interface StoryCardProps {
	story: Story;
	delete?: boolean;
	verify?: boolean;
	edit?: boolean;
	handleEdit?: (id: string) => void;
}

export interface StoryProps {
	stories: Array<Story>;
	verified?: boolean;
	delete?: boolean;
	verify?: boolean;
	edit?: boolean;
	handleEdit?: (id: string) => void;
}
