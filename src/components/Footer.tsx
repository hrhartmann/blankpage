import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate("/contacto");
  };

  return (
    <Box sx={{ backgroundColor: "black", padding: "40px 0", marginTop: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" color="white" gutterBottom>
          Subscribe to Our Newsletter
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleContactUs}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
