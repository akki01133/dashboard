import React from 'react';
import {
  HomeOutlined as HomeOutlinedIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  PeopleAltOutlined as PeopleAltOutlinedIcon,
  HouseOutlined as HouseOutlinedIcon,
  ReceiptLongOutlined as ReceiptLongOutlinedIcon,
  AssessmentOutlined as AssessmentOutlinedIcon,
  MapsUgcOutlined as MapsUgcOutlinedIcon,
  SupportOutlined as SupportOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';

const SideBar = () => {
  const theme = useTheme();

  const iconStyle = {
    color: theme.palette.text.secondary, 
    '&:hover': {
      color: theme.palette.primary.main, 
      backgroundColor: theme.palette.primary.light,
    
    },
  };

  return (
  <>
    <Box display="flex" flexDirection="column" justifyContent="space-between" backgroundColor="white" >
      <IconButton sx={iconStyle}>
        <HomeOutlinedIcon />
         <Typography variant="body2" color="textSecondary">
        Dashboard
      </Typography>
      </IconButton>
     

      <IconButton sx={iconStyle}>
        <ShoppingCartOutlinedIcon />
        <Typography variant="body2" color="textSecondary">
       Orders
      </Typography>
      </IconButton>
      

      <IconButton sx={iconStyle}>
        <PeopleAltOutlinedIcon />
         <Typography variant="body2" color="textSecondary">
        Users
      </Typography>
      </IconButton>
     

      <IconButton sx={iconStyle}>
        <HouseOutlinedIcon />
        <Typography variant="body2" color="textSecondary">
        Items
      </Typography>
      </IconButton>
      

      <IconButton sx={iconStyle}>
        <ReceiptLongOutlinedIcon />
        <Typography variant="body2" color="textSecondary">
        Transactions
      </Typography>
      </IconButton>
      

      <IconButton sx={iconStyle}>
        <AssessmentOutlinedIcon />
         <Typography variant="body2" color="textSecondary">
        Reports
      </Typography>
      </IconButton>
     

      <IconButton sx={iconStyle}>
        <MapsUgcOutlinedIcon />
         <Typography variant="body2" color="textSecondary">
        Messages
      </Typography>
      </IconButton>
     

      <IconButton sx={iconStyle}>
        <SupportOutlinedIcon />
         <Typography variant="body2" color="textSecondary">
        Support
      </Typography>
      </IconButton>
     

      <IconButton sx={iconStyle}>
        <SettingsOutlinedIcon />
         <Typography variant="body2" color="textSecondary">
        Settings
      </Typography>
      </IconButton>
     
    </Box>
    </>
  );
};

export default SideBar;
