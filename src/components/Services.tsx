import React, { useEffect } from "react";

import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const ServicesPage: React.FC = () => {
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
          Our Services
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#4A7023" }}>
          Due Diligence
        </Typography>
        <Typography variant="body1" paragraph>
          We offer comprehensive due diligence services to assess the viability
          and potential risks associated with forest-related investments. Our
          services include:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: "#4A7023" }} />
            </ListItemIcon>
            <ListItemText primary="Site assessments and inspections" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: "#4A7023" }} />
            </ListItemIcon>
            <ListItemText primary="Legal and regulatory compliance checks" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: "#4A7023" }} />
            </ListItemIcon>
            <ListItemText primary="Financial and market analysis" />
          </ListItem>
        </List>

        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#4A7023", marginTop: 4 }}
        >
          Consulting
        </Typography>
        <Typography variant="body1" paragraph>
          Our team of experienced forest engineers provides expert consulting
          services to help clients make informed decisions. We offer:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: "#4A7023" }} />
            </ListItemIcon>
            <ListItemText primary="Forest management planning" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: "#4A7023" }} />
            </ListItemIcon>
            <ListItemText primary="Sustainable harvesting strategies" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: "#4A7023" }} />
            </ListItemIcon>
            <ListItemText primary="Reforestation and afforestation guidance" />
          </ListItem>
        </List>

        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#4A7023", marginTop: 4 }}
        >
          Environmental Project Evaluation
        </Typography>
        <Typography variant="body1" paragraph>
          We specialize in evaluating the environmental impact of projects
          related to forests. Our services include:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: "#4A7023" }} />
            </ListItemIcon>
            <ListItemText primary="Environmental impact assessments" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: "#4A7023" }} />
            </ListItemIcon>
            <ListItemText primary="Biodiversity surveys and monitoring" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: "#4A7023" }} />
            </ListItemIcon>
            <ListItemText primary="Mitigation and conservation planning" />
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default ServicesPage;
