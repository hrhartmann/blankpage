import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Button
            color="error"
            sx={{ borderRadius: 0 }}
            component={RouterLink}
            to="/"
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{ borderRadius: 0 }}
            component={RouterLink}
            to="/nosotros"
          >
            Nosotros
          </Button>
          <Button
            color="inherit"
            sx={{ borderRadius: 0 }}
            component={RouterLink}
            to="/servicios"
          >
            Servicios
          </Button>
          <Button
            color="inherit"
            sx={{ borderRadius: 0 }}
            component={RouterLink}
            to="/experiencia"
          >
            Experiencia
          </Button>
          <Button
            color="inherit"
            sx={{ borderRadius: 0 }}
            component={RouterLink}
            to="/contacto"
          >
            Contacto
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
