import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Mi Aplicación
        </Typography>

        {/* Enlace a Dashboard */}
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>

        {/* Enlace a Contacto */}
        <Button color="inherit" component={Link} to="/contacto">
          Contacto
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;