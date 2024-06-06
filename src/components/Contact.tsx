import React, { useEffect } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <Typography variant="h3" align="center" color="white">
          Contact Us
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              John Doe - Forest Engineer
            </Typography>
            <Typography variant="body1" paragraph>
              Email: john.doe@example.com
            </Typography>
            <Typography variant="body1" paragraph>
              Phone: +1 (123) 456-7890
            </Typography>
            <Typography variant="body1" paragraph>
              Address: 123 Forest Street, Cityville, Country
            </Typography>
            <Typography variant="body1" paragraph>
              LinkedIn: linkedin.com/in/johndoe
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Jane Smith - Forest Ecologist
            </Typography>
            <Typography variant="body1" paragraph>
              Email: jane.smith@example.com
            </Typography>
            <Typography variant="body1" paragraph>
              Phone: +1 (987) 654-3210
            </Typography>
            <Typography variant="body1" paragraph>
              Address: 456 Ecology Road, Townsville, Country
            </Typography>
            <Typography variant="body1" paragraph>
              LinkedIn: linkedin.com/in/janesmith
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactPage;
