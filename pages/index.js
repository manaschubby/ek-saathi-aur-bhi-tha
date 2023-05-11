import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Template from "./template";
import MainPanel from "../components/MainPanel";
import Officers from "../components/Officers";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
	const [officers, setOfficers] = useState([]);
	const [loading, setLoading] = useState(true);
	const loadOfficers = () => {
		axios.get("/api/officers").then((response) => {
			setOfficers(response.data);
			setLoading(false);
		});
	};
	useEffect(() => {
		loadOfficers();
	}, []);
	return (
		<div className={styles.container} style={{ backgroundColor: "#B4B89E" }}>
			<Head>
				<title>EK SAATHI AUR BHI THA</title>
				<meta
					name="description"
					content="Memorial of the band of brothers. IMA Summer of '98."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Template />
			<MainPanel />
			{!loading && officers && <Officers officers={officers} />}
		</div>
	);
}
