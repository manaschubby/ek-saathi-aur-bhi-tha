import { SxProps } from "@mui/material";

export const styles: Record<any, SxProps> = {
	footerPanel: {
		width: "100vw",
		minHeight: 200,
		display: "flex",
		flexDirection: { xs: "column", sm: "row" },
		justifyContent: "space-evenly",
		pt: 4,
		pb: 8,
	},
	contactUs: {
		minWidth: {
			xs: "80%",
			sm: "30%",
		},
		display: "flex",
		flexDirection: "column",
		gap: 2,
		textAlign: "center",
		textTransform: "uppercase",
	},
};
