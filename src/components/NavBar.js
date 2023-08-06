import React from 'react';
import {
  SearchOutlined as SearchOutlinedIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  PersonOutline as PersonOutlineIcon,
} from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, InputBase, useTheme } from '@mui/material';

const NavBar = () => {
  const theme = useTheme();

  const iconStyle = {
    color: theme.palette.common.grey, 
    '&:hover': {
      color: theme.palette.primary.main, 
    },
  };


    const searchContainerStyle = {
    backgroundColor: theme.palette.grey[300], // Grey background color
    
    borderRadius: theme.shape.borderRadius,
    
  };

  return (
    
     <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around",backgroundColor:"white"}}>
        
        
          <IconButton sx={searchContainerStyle}>
            <SearchOutlinedIcon />
               <InputBase
            placeholder="Search..."
            sx={{
              marginLeft: theme.spacing(1),
              flexGrow: 1,
            }}
          />
          </IconButton>
       
      

      <div>
        <IconButton sx={iconStyle}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
          <PersonOutlineIcon />
        </IconButton>
        </div>
      </div>
    
  );
};

export default NavBar;
