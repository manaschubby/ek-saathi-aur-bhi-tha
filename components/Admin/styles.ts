import { SxProps } from "@mui/material";
import { height } from "@mui/system";
import colors from "../../utils/colors";
import rgba from "../../utils/hexTool";

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
		scrollBehavior: "smooth",
		width: "80vw",
		backgroundColor: rgba("#ffffff", 0.6),
		borderRadius: "2%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		backdropFilter: "blur(20px)",
		gap: 2,
		pt: "50vh",
	},
	addButton: {
		color: colors.black,
		fontSize: "large",
		flexGrow: 0.3,
	},
};
