import React from 'react';
import { Box, Typography, CircularProgress, Grid } from '@mui/material';

const Analytics = () => {
  const data = {
    "total_revenue": {
      "value": "56.2k",
      "currency": "$",
      "change": "+3.4%"
    },
    "today_revanue": {
      "value": "$1024",
      "change": "-5.5%"
    },
    "item_sold": 22,
    "user_active": 11
  }

  return (
    <>
     <Typography variant="h6" sx={{ color: 'black' }}>Analytics</Typography>
    <Grid container spacing={3} >
      
        
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ bgcolor: 'white', p: 2 ,borderRadius:2}}>
              <Typography variant="h6" sx={{ color: 'grey.500' }}>Total Revenue</Typography>
              
     <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold' }}>{data.total_revenue.value}</Typography>
  <Typography variant="subtitle2" sx={{ backgroundColor: 'lightgreen', color: 'green', padding: '3px 5px', borderRadius: '4px', width: 'fit-content', marginLeft: '8px' }}>
    {data.total_revenue.currency} {data.total_revenue.change}
  </Typography>
</Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ bgcolor: 'white', p: 2 ,borderRadius:2}}>
              <Typography variant="h6" sx={{ color: 'grey.500' }}>Today's Revenue</Typography>
               <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold' }}>{data.today_revanue.value}</Typography>
              <Typography variant="subtitle2" sx={{ backgroundColor: 'lightcoral', color: 'red', padding: '3px 5px', borderRadius: '4px', width: 'fit-content', marginLeft: '8px' }}>{data.today_revanue.change}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ bgcolor: 'white', p: 2 , borderRadius:2}}>
              <Typography variant="h6" sx={{ color: 'grey.500' }}>Items Sold</Typography>
              <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold' }}>{data.item_sold}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ bgcolor: 'white', p: 2 ,borderRadius:2}}>
              <Typography variant="h6" sx={{ color: 'grey.500' }}>Active Users</Typography>
              <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold' }}>{data.user_active}</Typography>
            </Box>
          </Grid>
       
      
    </Grid>
     </>
  );
};

export default Analytics;