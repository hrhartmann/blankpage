import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

const HomePage: React.FC = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [
    "linear-gradient(to right, #4A7023, #9DC183)",
    "linear-gradient(to right, #8D5B4C, #F3EFCC)",
    "linear-gradient(to right, #2E4600, #486B00)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          background: backgrounds[backgroundIndex],
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 1s ease",
        }}
      >
        <Typography variant="h3" align="center" color="white">
          Welcome to the Forest
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Forests are vital ecosystems that support a wide variety of plant
              and animal life. They provide numerous benefits, including oxygen
              production, carbon sequestration, and habitat for countless
              species.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <img src="path/to/image1.jpg" alt="Forest" style={{ width: '100%' }} /> */}
            <Box sx={{ background: "lightgreen", minHeight: "200px" }}></Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            {/* <img src="path/to/image2.jpg" alt="Forest" style={{ width: '100%' }} /> */}
            <Box sx={{ background: "lightblue", minHeight: "200px" }}></Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Forests play a crucial role in regulating the Earth's climate by
              absorbing carbon dioxide from the atmosphere and releasing oxygen.
              They also help prevent soil erosion, maintain water quality, and
              provide timber and other resources for human use.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
