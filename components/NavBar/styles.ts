import colors from "../../utils/colors"
import { SxProps } from "@mui/material"
const styles : Record<string,SxProps> = {
  title:{
    color:colors.black,
    fontFamily:"Cabin",
    fontSize: { xs: "1rem", sm:"1.25rem"},
    fontWeight:"800",
    my:"auto",
  },
  logo:{
    pl:{ xs: 0, sm: 10 },
    mr: 1,
    height: { xs: 50, sm: 100 },
    
  },
  links:{
    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
    justifyContent:"flex-end"
  },
  linksText:{
    fontFamily:"Cabin",
    mr: 2,
    fontSize: "1.25rem",
    fontWeight: "600",
    color: colors.black,
    textAlign:"center"
  },
  linksTextSelected:{
    mr: 4,
    fontSize: "1.25rem",
    fontWeight: "600",
    color: colors.black,
    borderColor:colors.black,
    border:"solid",
    borderRadius:"10px"
  },
  menu:{
    my:"auto",
    mr: {xs:0, sm:2},
    display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
    color: colors.black,
  },
  drawer:{
    justifyContent:"space-around",
    textAlign: "center",
    my:"auto",
    fontSize: "1.25rem",
    fontWeight: "200",
    color: colors.black,
  }

}
export default styles;