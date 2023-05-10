import { SxProps } from "@mui/material";
import colors from "../../utils/colors";
const styles : Record<any, SxProps> = {
    main:{
        pt:"50px",
        minWidth:"100vw",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundImage:"url('/assets/inMemory.webp')",
        backgroundSize:"cover",
        backgroundAttachment:"fixed",
        backgroundRepeat:"no-repeat",
    },
    heading:{
        pt:10,
        borderRadius:10,
        mixBlendMode:"darken",
        mx:"auto",
        fontSize: {
            xs:30,
            sm:70,
            md:60
        },
        color:colors.bloodRed,
        fontFamily:"Cabin",
        fontWeight:800,
        textAlign:"center",
        textTransform:"capitalize",
        zIndex:100,
    },
    cardView:{
        pt:10,
        minWidth:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        flexWrap:"nowrap",
        flexFlow:"wrap",
        overflow:"scroll",
    },
    card:{
        display:"flex", 
        flexDirection:"column", 
        alignItems:"center",
        justifyContent:"space-between", 
        mx:{
            xs:"none", 
            sm:2
        }, 
        borderRadius:3, 
        mb:10, 
        minWidth: {xs:350, sm:400},  
    },
    avatar:{ 
        mx:"auto",
        height: 250,
        borderColor:colors.black,
        border:"solid",
        borderWidth:"1px",
    },
    name:{
        fontSize: "2rem",
        color:colors.offRed,
        fontFamily:"Cabin",
        fontWeight:800,
        textAlign:"center",
        textTransform:"capitalize"
    },
    desc:{
        textAlign:"center",
    },
    parameter_icon:{
        lineHeight:"100%",
        display:"flex",
        alignItems:"center",
        fontSize: "1.25rem",
        color:colors.offRed,
        fontFamily:"Cabin",
        fontWeight:400,
        width:"max-content",
        height:"max-content"
    },
    parameter_title:{
        pl:1,
        fontSize: {xs:"1rem", sm:"1.25rem"},
        color:colors.bloodRed,
        fontFamily:"Cabin",
        fontWeight:400,
        textAlign:"center",
        textTransform:"capitalize"
    },
    parameter_value:{
        fontSize: {xs:"1rem", sm:"1.25rem"},
        color:colors.bloodRed,
        fontFamily:"Cabin",
        fontWeight:600,
        textAlign:"center",
        textTransform:"capitalize"
    }
}

export default styles;