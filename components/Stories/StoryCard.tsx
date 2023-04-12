import { Box, Card, CardActionArea, CardContent, CardMedia, Icon, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { AccountBalance, FolderOpenOutlined, LocalHospital, LocalOffer, LocalPolice, MilitaryTech, MilitaryTechSharp } from "@mui/icons-material";
import colors from "../../utils/colors";
import GroupsIcon from '@mui/icons-material/Groups';
import StarsIcon from '@mui/icons-material/Stars';
import FlagIcon from '@mui/icons-material/Flag';
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export default function StoryCard(props) {
    const {styles} = props
    const router = useRouter()
    const handleCardClick = () => {
        //router.push("/")
    }
    interface Parameter {
        icon: ReactJSXElement,
        title: string,
        value: any
    }
    const list = () =>{
        const list : Array<Parameter> = [
            {
                icon: <LocalOffer/>,
                title: "Service No.",
                value: props.svc_no
            },
            {
                icon: <LocalPolice/>,
                title: "FORCE",
                value: props.svc
            },
            {
                icon: <StarsIcon/>,
                title: "Last Rank",
                value: props.rank
            },
            {
                icon: <GroupsIcon/>,
                title: "Unit",
                value: props.unit
            },
            {
                icon: <AccountBalance/>,
                title: "Arm/Regt",
                value: props.arm
            },
            {
                icon: <MilitaryTech/>,
                title: "Awards",
                value: props.awards
            },
            {
                icon: <FolderOpenOutlined/>,
                title: "Operation",
                value: props.operation
            },
            {
                icon: <LocalHospital/>,
                title: "Lost Him to",
                value: props.reasonOfDeath
            },
            {
                icon: <FlagIcon/>,
                title: "Lost Him On",
                value: props.yearOfDeath
            }
        ]
        return(<>
            {
                list.map((parameter, index)=>{
                    if (parameter.value){
                        return(<Box key={index} sx={{display:"flex", ml:1}}>
                            <Icon sx={styles.parameter_icon}>{parameter.icon}</Icon>
                            <Typography sx={styles.parameter_title}>{parameter.title}</Typography>
                            <Typography flexGrow={1}/>
                            <Typography sx={styles.parameter_value}>{parameter.value}</Typography>
                        </Box>)
                    }
                })
            }
        </>)
    }
    return (
    <Card sx={styles.card}>
        <CardActionArea onClick={handleCardClick}>
            <CardMedia sx={styles.avatar} image={"http://localhost:3002/assets/mainPanelBG.jpeg"}/>
            <CardContent>
                <Typography sx={styles.name}>{props.name}</Typography>
                {list()}
            </CardContent>
        </CardActionArea>
    </Card>)
}