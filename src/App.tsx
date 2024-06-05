import React from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import UsPage from "./components/Us";
import ServicesPage from "./components/Services";
import ExperiencePage from "./components/Experience";

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
      <Router>
        <Box sx={{ backgroundColor: "grey.800", minHeight: "100vh" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<UsPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/experiencia" element={<ExperiencePage />} />
            <Route path="/contacto" element={<HomePage />} />
            {/* Add more routes for other pages */}
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
