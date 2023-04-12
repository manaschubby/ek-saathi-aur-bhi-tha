import React, { useState } from 'react';
import Template from '../template';
import { Box, Container, Typography } from '@mui/material';
import styles from "./styles"
import { useEffect } from 'react';
import axios from 'axios';
import StoryCard from "../../components/Stories/StoryCard"
const Index = () => {
    const [stories, setStories] = useState()
    const loadOfficers= () => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        axios.get("/api/stories")
          .then((response)=>{
            setStories(response.data)
          })
        
      }
      useEffect(()=>{
        loadOfficers()
      },[])
    return (
        <div>
            <Template/>
            <Box sx={styles.main}>
                <Typography sx={styles.heading}>MEMORIES</Typography>
                <Container sx={styles.cardView} component={"div"}>
                {stories && stories.map((story, index)=>{
                    return <StoryCard styles={styles} />
                })}
                
                </Container>
            </Box>
        </div>
    );
}

export default Index;
