import { useEffect, useState } from "react";
import axios from "axios";
import { OfficerCardProps } from "../components/Officers/types";
import { Story } from "../components/Stories/types";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

export default function useOfficer() {
	const [officerLoaded, setOfficerLoaded] = useState(false);
	const [storiesLoaded, setStoriesLoaded] = useState(false);
	const [noOfficer, setNoOfficer] = useState(false);
	const [stories, setStories] = useState<Array<Story>>();
	const [officer, setOfficer] = useState<OfficerCardProps>();
	const router = useRouter();

	const query = router.query;
	useEffect(() => {
		console.log(query);
		if (!storiesLoaded && !officerLoaded) {
			if (query.officer) {
				console.log("hey");
				const id = query.officer;
				axios
					.get("/api/officers?id=" + id)
					.then((response) => {
						setOfficer(response.data);
						setOfficerLoaded(true);
					})
					.catch((reason) => {
						setNoOfficer(true);
						console.log(reason);
					});
				axios
					.get("/api/stories", {
						params: {
							officer_id: id,
						},
					})
					.then((response) => {
						setStories(response.data);
						setStoriesLoaded(true);
					});
			}
		}
	});
	useEffect(() => {
		if (noOfficer) {
			router.push("/");
		}
	}, [noOfficer, officerLoaded, stories]);

	return {
		officer,
		stories,
		noOfficer,
		officerLoaded,
		storiesLoaded,
	};
}
