import { Card, CardMedia } from "@mui/material";
import React from "react";

interface OfficerCardProps {
    image?: string,
    name: string,
    rank?:string,
    yearOfDeath?:string,
    unit?:string,
    svc_no?:string,
    svc?:string,
    operation?:string,
    reasonOfDeath?:string,
    awards?:string,
}

export default function OfficerCard(props: OfficerCardProps) {

    return (<Card>
        <CardMedia src={props.image}/>
        
    </Card>)
}