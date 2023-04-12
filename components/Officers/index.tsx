import React from 'react';
import styles from './styles';
import OfficerCard from './OfficerCard';
import { Typography, Container, Box } from '@mui/material';
import { OfficersProps } from './types';

const Officers = (props: OfficersProps) => {
    return (
        <Box sx={styles.main} component={"div"}>
            <Typography sx={styles.heading}>In Memory of</Typography>
            <Container sx={styles.cardView} component={"div"}>
                {props.officers.map((officer, index)=>{
                    return <OfficerCard key={index} {...officer}  />
                })}
                
            </Container>
        </Box>
    );
}

export default Officers;
