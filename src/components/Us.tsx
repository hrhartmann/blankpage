import React, { useEffect } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

const UsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "600px",
        }}
      >
        <img
          src="/images/image1.jpg"
          alt="albase"
          style={{ maxWidth: "100%" }}
        />
      </div>

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              John Doe - Forest Engineer
            </Typography>
            <Typography variant="body1" paragraph>
              John Doe is a highly experienced forest engineer with over 15
              years of expertise in sustainable forest management. He holds a
              Master's degree in Forest Engineering from the University of XYZ
              and has worked on numerous projects across the country. John is
              passionate about preserving forest ecosystems while ensuring
              responsible resource utilization.
            </Typography>
            <Typography variant="body1" paragraph>
              Throughout his career, John has led several successful
              reforestation initiatives and has been instrumental in developing
              innovative strategies for forest conservation. He is a recognized
              expert in his field and frequently speaks at conferences and
              workshops to share his knowledge and insights.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Jane Smith - Forest Ecologist
            </Typography>
            <Typography variant="body1" paragraph>
              Jane Smith is a dedicated forest ecologist with a Ph.D. in Forest
              Ecology from the University of ABC. She has conducted extensive
              research on the impacts of climate change on forest ecosystems and
              has published several peer-reviewed papers in renowned scientific
              journals.
            </Typography>
            <Typography variant="body1" paragraph>
              Jane's expertise lies in understanding the complex interactions
              between trees, wildlife, and the environment. She has worked
              closely with government agencies and conservation organizations to
              develop effective strategies for protecting biodiversity and
              mitigating the effects of climate change on forests. Her work has
              been instrumental in shaping policies and practices related to
              forest management and conservation.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UsPage;
