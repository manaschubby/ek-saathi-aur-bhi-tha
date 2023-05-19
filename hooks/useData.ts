import axios from "axios";
import React, { useEffect, useState } from "react";
import { Story } from "../components/Stories/types";

export const validateOfficers = async (stories: Array<Story>) => {
	const newStories = [];
	for (const story of stories) {
		let newStory = story;
		const officer1 = await axios.get("/api/officers/", {
			params: {
				id: story.officer,
			},
		});
		newStory.officer = officer1.data.rank
			? officer1.data.rank + " " + officer1.data.name
			: officer1.data.name;
		newStories.push(newStory);
	}
	return newStories;
};

export default function useData(
	reload?: boolean,
	setReload?: React.Dispatch<React.SetStateAction<boolean>>
) {
	const [officers, setOfficers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [stories, setStories] = useState<Array<Story>>();
	const loadOfficers = () => {
		axios.get("/api/officers").then((response) => {
			setOfficers(response.data);
			setLoading(false);
		});
	};
	const loadStories = () => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};
		axios.get("/api/stories", requestOptions).then((response) => {
			let stories = response.data;
			validateOfficers(stories).then((stories) => {
				setStories(stories);
			});
		});
	};
	useEffect(() => {
		loadOfficers();
		loadStories();
	}, []);
	if (setReload) {
		useEffect(() => {
			if (reload) {
				loadOfficers();
				setReload(false);
			}
		}, [reload]);
	}

	return {
		officers,
		stories,
		loading,
	};
}
