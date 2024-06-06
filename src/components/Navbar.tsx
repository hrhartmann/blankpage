import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Nosotros", path: "/nosotros" },
    { text: "Servicios", path: "/servicios" },
    { text: "Experiencia", path: "/experiencia" },
    { text: "Contacto", path: "/contacto" },
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              color={location.pathname === item.path ? "error" : "inherit"}
              sx={{
                borderRadius: 0,
                borderBottom: location.pathname === item.path ? 2 : 0,
                borderColor: "error.main",
              }}
              component={RouterLink}
              to={item.path}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
