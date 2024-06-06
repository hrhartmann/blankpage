import React, { useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" align="center" color="white" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="h6" align="center" color="white" paragraph>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "white",
            color: "#4A7023",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Go to Homepage
        </Button>
      </Box>

      <Container maxWidth="lg" sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Lost in the Forest?
        </Typography>
        <Typography variant="body1" paragraph>
          Don't worry! Our team of forest experts is here to guide you back to
          the right path.
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to use the navigation menu above or click the button to
          return to our homepage.
        </Typography>
      </Container>
    </>
  );
};

export default NotFoundPage;
