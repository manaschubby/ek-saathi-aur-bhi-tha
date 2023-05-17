import { SxProps } from "@mui/material";
import { height } from "@mui/system";
import colors from "../../utils/colors";

export const styles: Record<any, SxProps> = {
	officerPanel: {
		pt: 10,
		width: "100%",
		backgroundColor: colors.sage,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	officerPanelTitle: {
		display: "flex",
		width: "100%",
	},
	loginPanel: {
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.sage,
	},
	loginForm: {
		display: "flex",
		flexDirection: "column",
		gap: 3,
	},
	popUp: {
		zIndex: 100,
		position: "fixed",
		top: 100,
		height: "80vh",
		overflow: "scroll",
		width: "80vw",
		backgroundColor: "white",
		borderRadius: 2,
		display: "flex",
		justifyContent: "center",
	},
};
