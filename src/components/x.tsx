import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const NosotrosPage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to right, #4A7023, #9DC183)",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" align="center" color="white">
          Nosotros
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              John Doe - Forest Engineer
            </Typography>
            <Typography variant="body1" paragraph>
              John Doe is a highly experienced forest engineer with over 15
              years of expertise in sustainable forest management and
              conservation. He holds a Master's degree in Forest Science from
              the University of XYZ and has worked on numerous projects across
              the country. John is passionate about developing innovative
              solutions to balance economic development and ecological
              preservation in forested areas.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Jane Smith - Forest Ecologist
            </Typography>
            <Typography variant="body1" paragraph>
              Jane Smith is a renowned forest ecologist with a Ph.D. in
              Ecosystem Science from ABC University. She has conducted extensive
              research on the impacts of climate change on forest ecosystems and
              has published several influential papers in peer-reviewed
              journals. Jane is dedicated to promoting sustainable forestry
              practices and educating the public about the importance of forest
              conservation.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NosotrosPage;
