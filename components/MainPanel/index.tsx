import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./styles";
const MainLandingPanel = () => {
  return (
    <Container
      sx={styles.mainPanel}
    >
      <Grid
        sx={styles.mainPanelGrid}
      >
          <Typography
            variant="h6"
            sx={styles.mainPanelDesc}
          >
            Memorial of the Band of Brothers
          </Typography>
          <Typography
            variant="h3"
            sx={styles.mainPanelTitle}
          >
            EK SAATHI AUR BHI THA
          </Typography>
      </Grid>
    </Container>
  );
};

export default MainLandingPanel;