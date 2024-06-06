import React, { useState, useEffect } from "react";
import { Grid, Typography, Container } from "@mui/material";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

const transitionStyles = css`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 1000ms;
  }
`;

const StyledBox = styled.div`
  background-color: grey.800;
  min-height: 100vh;
`;

const BackgroundBox = styled.div<{ background: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.background};
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderBox = styled.div`
  min-height: 700px;
`;

const ColorBox = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  min-height: 200px;
`;

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [
    "linear-gradient(to right, #4A7023, #9DC183)",
    "linear-gradient(to right, #8D5B4C, #F3EFCC)",
    "linear-gradient(to right, #2E4600, #486B00)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return jsx(
    "div",
    {
      css: [
        {
          backgroundColor: "grey.800",
          minHeight: "100vh",
        },
        transitionStyles,
      ],
    },
    <React.Fragment>
      <SwitchTransition>
        <CSSTransition
          key={backgroundIndex}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <BackgroundBox background={backgrounds[backgroundIndex]}>
            <Typography variant="h3" align="center" color="white">
              Welcome to the Forest
            </Typography>
          </BackgroundBox>
        </CSSTransition>
      </SwitchTransition>

      <PlaceholderBox />

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
            <ColorBox background="lightgreen" />
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <ColorBox background="lightblue" />
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
    </React.Fragment>
  );
};

export default HomePage;
