import * as React from "react";
import PropTypes from "prop-types";
import { Collapse, SxProps } from "@mui/material";

//Material UI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Custom Scroll check component
import ElevationScroll from "./ElevationScroll";

// Logo File

import styles from "./styles";
import { useRouter } from "next/router";
import colors from "../../utils/colors";
import Image from "next/image";

const drawerWidth = 240;

interface navItem {
	name: string;
	link: string;
	hover?: string;
}

const navItems: Array<navItem> = [
	{
		name: "Home",
		link: "/",
	},
	// {
	//   name:"We Were Brothers",
	//   link:"/thelist"
	// },
	{
		name: "Reflect and Remember",
		link: "/share",
		hover: "Record Tributes for Your Fallen Brother".toUpperCase(),
	},
	{
		name: "Memories Unlocked",
		link: "/memories",
		hover: "Read the Tributes to Your Fallen Brothers".toUpperCase(),
	},
	{
		name: "Share Photos",
		link: "/uploadImages",
	},
];

function Navbar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [logo, setLogo] = React.useState(false);
	const [selected, setSelected] = React.useState(5);
	const [hoverNavShown, setHoverNavShown] = React.useState(false);
	const [hoverMessage, setHoverMessage] = React.useState("");
	const router = useRouter();
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};
	React.useEffect(() => {
		navItems.map((item, index) => {
			if (item.hover) {
				const button = document.getElementById(item.name);
				const showMessage = () => {
					setHoverNavShown(true);
					setHoverMessage(item.hover);
				};
				const hideMessage = () => {
					setHoverNavShown(false);
				};
				button.addEventListener("mouseenter", showMessage);
				button.addEventListener("mouseleave", hideMessage);
			}
			if (item.link == location.pathname) {
				setSelected(index);
			}
		});
	});
	const drawer = (
		<Box sx={styles.drawer}>
			<Image
				alt="inMemory"
				src={"/assets/inMemory.webp"}
				width={200}
				height={100}
			/>
			<Typography flexGrow={1} />
			<List onClick={handleDrawerToggle}>
				{navItems.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton href={item.link} sx={{ textAlign: "center" }}>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box position={"static"} sx={{ display: "flex", mr: 0 }}>
			<CssBaseline />
			<ElevationScroll setLogo={setLogo} {...props}>
				<AppBar sx={{ background: "none", mr: 0, pr: 0 }} component="nav">
					<Toolbar sx={{ mr: 0, pr: 0 }}>
						<Typography sx={styles.title} onClick={() => router.push("/")}>
							{logo ? <>EK SAATHI AUR BHI THA</> : <></>}
						</Typography>
						<Typography sx={{ flexGrow: 1 }}></Typography>
						<Box sx={styles.links}>
							{navItems.map((item, index) => (
								<Button
									id={item.name}
									key={item.name}
									sx={
										selected != index
											? styles.linksText
											: styles.linksTextSelected
									}
									href={item.link}
								>
									{item.name}
								</Button>
							))}
						</Box>
						<IconButton
							size="large"
							aria-label="menu"
							onClick={handleDrawerToggle}
							sx={styles.menu}
						>
							<MenuIcon fontSize="large" />
						</IconButton>
					</Toolbar>
					<Typography
						display={hoverNavShown ? "block" : "none"}
						sx={{
							width:
								hoverMessage ==
								"Record Tributes for Your Fallen Brother".toUpperCase()
									? "80vw"
									: "90vw",
							textAlign: "right",
							color: colors.bloodRed,
						}}
						variant="subtitle2"
					>
						{hoverMessage}
					</Typography>
				</AppBar>
			</ElevationScroll>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					anchor="right"
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
						justifyContent: "space-around",
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

export default Navbar;
