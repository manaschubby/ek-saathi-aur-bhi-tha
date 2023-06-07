import axios from "axios";
import React, { useEffect, useState } from "react";
import { Story } from "../components/Stories/types";

export default function useData(
	reload?: boolean,
	setReload?: React.Dispatch<React.SetStateAction<boolean>>
) {
	const [officers, setOfficers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [stories, setStories] = useState<Array<Story>>();
	const [storiesLoaded, setStoriesLoaded] = useState(false);
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

			setStories(stories);
			setStoriesLoaded(true);
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
				loadStories();
				setReload(false);
			}
		}, [reload]);
	}

	return {
		officers,
		stories,
		loading,
		storiesLoaded,
	};
}
