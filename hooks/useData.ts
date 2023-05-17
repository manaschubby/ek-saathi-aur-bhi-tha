import axios from "axios";
import { useEffect, useState } from "react";

export default function useData() {
	const [officers, setOfficers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [stories, setStories] = useState();
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
			setStories(response.data);
		});
	};
	useEffect(() => {
		loadOfficers();
		loadStories();
	}, []);

	return {
		officers,
		stories,
		loading,
	};
}
