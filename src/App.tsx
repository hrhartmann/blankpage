import React from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Global, css } from "@emotion/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import UsPage from "./components/Us";
import ServicesPage from "./components/Services";
import ExperiencePage from "./components/Experience";
import ContactPage from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#your-navbar-color",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Global styles={globalStyles} />
      <Router>
        <Box sx={{ backgroundColor: "grey.800", minHeight: "100vh" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blankpage" element={<Navigate to="/" replace />} />
            <Route path="/nosotros" element={<UsPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/experiencia" element={<ExperiencePage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />{" "}
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
