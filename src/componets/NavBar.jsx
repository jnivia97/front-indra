import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { label: 'Frases', path: '/' },
  { label: 'Historial', path: '/history' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Citas App
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.path} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Citas App
          </Typography>
          {/* Visible solo en pantallas grandes */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{ color: '#fff' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          {/* Menú hamburguesa para móviles */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer para móviles */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Mejora rendimiento móvil
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
