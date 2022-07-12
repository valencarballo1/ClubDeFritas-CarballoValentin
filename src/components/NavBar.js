import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png'
import StyledBadge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} width="50%" />
          </IconButton>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }} color="textPrimary">
            Hello Guest
          </Typography>
          <Button color="inherit" variant="outlined">Login</Button>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={3} color="secondary">
              <ShoppingCartCheckoutIcon />
            </StyledBadge>
          </IconButton>

          
          </Toolbar>
      </AppBar>
    </Box>
  );
}
