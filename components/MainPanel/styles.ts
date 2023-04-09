import { SxProps } from "@mui/material";
import colors from "../../utils/colors";

const styles : Record<any, SxProps> =  {
    mainPanel:{
        minHeight: { xs: "70vh", sm: 700 },
        minWidth: "100vw",
        pt: 10,
        display: "flex",
        backgroundImage:`url("/assets/mainPanelBG.webp")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    },
    mainPanelGrid:{
        maxWidth: { xs: "100vw", sm: "60vw" },
        display: "flex",
        flexDirection: "column",
        justifyContent:"flex-start",
        textAlign:"left"
      },
    mainPanelTitle:{
        fontSize: { xs:34, sm: 34, md:50, },
        fontStyle: "normal",
        color:colors.bloodRed,
        fontWeight:"800",
        fontFamily: 'Cabin',
        mx:"auto",
      },
    mainPanelDesc:{
        fontSize: { xs: 16, sm: 26 },
        fontStyle: "normal",
        color:colors.bloodRed,
        fontFamily: 'Cabin',
        mt:4,
      },
      mainPanelType:{
        fontSize: { xs: 16, sm: 26 },
        fontStyle: "normal",
        color:colors.sage,
        mt:4,
      }
}
export default styles