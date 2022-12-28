import { useLogout } from '../hooks/useLogout'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom'
//import logo from '/assets/RUBIX.png';
import logo2 from '../assets/RUBIX3.png';
import logonew from '../assets/rubixnew.png';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



function ResponsiveAppBar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const usertype = localStorage.getItem('type')
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function navigate(page) {
    if(page === 'Products'){
      window.location.href=`/Home?userId=${user._id}`
    }
  };

  const handleClick = () => {
    logout()
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{
              background: '#111111',
              color : '#a6607c',
              maxHeight : 100
            }}>

          
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              
              textDecoration: 'none',
            }}
          >
           <Link onClick={() => window.location.href=`/`}>
                <Box
                  component="img"
                  sx={{ height: 100, width: 100 , padding : 0, margins: 0}}
                  alt="Logo"
                  src={logonew}
                />
              </Link>


          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" ><Link onClick={() => window.location.href=`/Home?userId=${user._id}`}> Home</Link></Typography>
                </MenuItem>
            </Menu>
          </Box>
          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography textAlign="center" onClick={() => window.location.href=`/`}> Home </Typography>
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', left:20 }}
              >
                <Typography textAlign="center" onClick={() => window.location.href=`/about`}> About Us</Typography>
              </Button>

              {!user && (
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,left:880}}
                >
                <Typography textAlign="center" onClick={() => window.location.href=`Login`}> Login</Typography>
               </Button>

               <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,left:900}}
               >
                <Typography textAlign="center" onClick={() => window.location.href=`/Signup`}> Sign up</Typography>
               </Button>
               </Box>
             )}

             {user && (
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', position: 'right', left:850, cursor: 'text'}}
                >
                <Typography textAlign="center"  position={{
                vertical: 'top',
                horizontal: 'right',
                
            
                
              }}
              > Welcome {user.username} !</Typography>
               </Button>
               </Box>
             )}
          </Box>
        {user && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.username} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={() => window.location.href=`/Home?userId=${user._id}`}> Profile</Typography>
              </MenuItem>

              <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={() => window.location.href=`/Home?userId=${user._id}`}> Settings</Typography>
              </MenuItem>

              <MenuItem  onClick={() => window.location.href=`/`}>
                  <Typography textAlign="center" onClick={handleClick}> Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;