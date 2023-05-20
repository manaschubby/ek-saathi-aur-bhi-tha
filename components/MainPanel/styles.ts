import { SxProps } from "@mui/material";
import colors from "../../utils/colors";

const styles: Record<any, SxProps> = {
	mainPanel: {
		minHeight: { xs: "70vh", sm: 700 },
		minWidth: "100vw",
		pt: 10,
		display: "flex",
		backgroundImage: `url("/assets/IMA.png")`,
		backgroundPosition: "top",
		backgroundSize: "cover",
	},
	mainPanelGrid: {
		maxWidth: { xs: "100vw", sm: "60vw" },
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		textAlign: "left",
	},
	mainPanelTitle: {
		fontSize: { xs: 34, sm: 34, md: 50 },
		fontStyle: "normal",
		color: colors.bloodRed,
		fontWeight: "800",
		fontFamily: "Cabin",
		mx: "auto",
	},
	mainPanelDesc: {
		fontSize: { xs: 16, sm: 26 },
		fontStyle: "normal",
		color: colors.bloodRed,
		fontFamily: "Cabin",
		mt: 4,
	},
	mainPanelType: {
		fontSize: { xs: 16, sm: 26 },
		fontStyle: "normal",
		color: colors.sage,
		mt: 4,
	},
	playButton: {
		fontSize: { xs: 8, sm: 15 },
		width: "max-content",
		backgroundColor: colors.bloodRed,
		":hover": {
			backgroundColor: colors.bloodRed,
		},
	},
	playButtonPlayed: {
		fontSize: { xs: 8, sm: 15 },
		width: "max-content",
		backgroundColor: "white",
		":hover": {
			backgroundColor: "white",
		},
	},
	lastPost: {
		fontSize: { xs: 15, sm: 15 },
		fontStyle: "normal",
		fontWeight: "800",
		color: "white",
		fontFamily: "Cabin",
		px: 1,
		backdropFilter: "blur(5px)",
	},
	alert: {
		height: "max-content",
		width: { xs: "80vw", sm: "auto" },
		position: "fixed",
		zIndex: 100,
		top: { xs: 60, sm: 60 },
	},
};
export default styles;
