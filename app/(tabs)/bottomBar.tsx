import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Fab, CssBaseline, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { styled } from '@mui/material/styles';
import { TouchableOpacity } from 'react-native';
import { router } from "expo-router";
  
export function BottomBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }} />
      <StyledAppBar>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
            height: '70px',
          }}
        >
          {/* Left Group of Icons */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            <IconButton sx={{ color: '#093B39',
             }}>
              <BookmarkBorderIcon sx={{fontSize: 32,}} />
            </IconButton>
            <IconButton sx={{ color: '#093B39' }}>
              <NotificationsNoneIcon sx={{fontSize: 32,}}/>
            </IconButton>
          </Box>

          <StyledFab color="secondary" aria-label="add">
          {/* Center Button */}
          <TouchableOpacity
          onPress={() => router.navigate('./create')}>
            <AddIcon sx={{ fontSize: 32,
             }} />
            </TouchableOpacity>
            </StyledFab>

          {/* Right Group of Icons */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            <IconButton sx={{ color: '#093B39' }}>
              <PersonOutlineIcon sx={{fontSize: 32,}}/>
            </IconButton>
            <IconButton sx={{ color: '#093B39' }}>
              <HomeOutlinedIcon sx={{fontSize: 32,}}/>
            </IconButton>
          </Box>
        </Toolbar>
    </StyledAppBar>
    </React.Fragment>
  );
}

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',

  height: 65,
  width: 65,
  boxShadow: '0px -5px 10px rgba(195, 105, 34, 0.4)',
  backgroundColor: '#ED802A',

  border: '3px solid #fff', 
  transition: 'all 0.3s ease-in-out', 

  '&:hover': {
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.4)', 
  },

  '&:focus': {
  outline: 'none',
  backgroundColor: '#ED802A',
  },

  '&:active': {
  backgroundColor: '#ED802A',
  },

  '&:inactive': {
      backgroundColor: '#ED802A',
  }
});

const StyledAppBar = styled(AppBar)(({  }) => ({
  position: 'fixed',
  color: 'primary',
  top: 'auto',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#65BCB5',
  borderTopLeftRadius: '30px', 
  borderTopRightRadius: '30px',
  boxShadow: '0px -8px 50px rgba(195, 105, 34, 0.9)',
}));