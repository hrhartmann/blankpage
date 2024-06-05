import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { experienceData } from "../content/experienceData";

const ExperiencePage: React.FC = () => {
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
          Our Experience
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="body1" paragraph>
          {experienceData.introduction}
        </Typography>

        {experienceData.sectors.map((sector, index) => (
          <Grid
            container
            spacing={4}
            key={sector.name}
            sx={{
              marginTop: 4,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <Grid item xs={12} md={6}>
              <img
                src={sector.image}
                alt={sector.name}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {sector.name}
              </Typography>
              <List>
                {sector.bullets.map((bullet) => (
                  <ListItem key={bullet}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: "#4A7023" }} />
                    </ListItemIcon>
                    <ListItemText primary={bullet} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
};

export default ExperiencePage;
