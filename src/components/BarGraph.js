import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, CategoryScale, LinearScale, BarElement, Legend } from 'chart.js';
import { Typography, Grid } from '@mui/material';
ChartJS.register(
 BarElement, CategoryScale, LinearScale, Tooltip, Legend
);

const data = {
  day: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
       
        data: [10, 20, 30, 42, 51, 82, 31],
         
  
      }
    ]
  },
  week: {
    labels: ["W1", "W2", "W3", "W4"],
    datasets: [
      {
       
        data: [100, 120, 150, 130],
     
      
      }
    ]
  },
  month: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        
        data: [300, 320, 350, 380, 410, 420, 450, 430, 460, 490, 500, 480],
        
        
      }
    ]
  },
  year: {
    labels: ["2023", "2024", "2025", "2026"],
    datasets: [
      {
        
        data: [1500, 1700, 1900, 2100],
      
       
      }
    ]
  },
};

const BarGraph = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('day');

  const handleTimePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
  
    <div style={{ maxWidth: '300px', margin: '0 auto' , backgroundColor:"white",borderRadius:"4px"}}  >
      <Typography variant="h5" gutterBottom>
        Visit
      </Typography>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <span
          onClick={() => handleTimePeriodChange('day')}
          style={{
            color: selectedPeriod === 'day' ? 'blue' : 'grey',
            cursor: 'pointer',
          }}
        >
          D
        </span>
        <span
          onClick={() => handleTimePeriodChange('week')}
          style={{
            color: selectedPeriod === 'week' ? 'blue' : 'grey',
            cursor: 'pointer',
          }}
        >
          W
        </span>
        <span
          onClick={() => handleTimePeriodChange('month')}
          style={{
            color: selectedPeriod === 'month' ? 'blue' : 'grey',
            cursor: 'pointer',
          }}
        >
          M
        </span>
        <span
          onClick={() => handleTimePeriodChange('year')}
          style={{
            color: selectedPeriod === 'year' ? 'blue' : 'grey',
            cursor: 'pointer',
          }}
        >
          Y
        </span>
      </div>
       <Bar
        data={data[selectedPeriod]}
        options={{
          scales: {
            x: {
              ticks: {
                color: 'grey',
              },
            },
            y: {
              ticks: {
                color: 'grey',
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
              },
            },
          },
          elements: {
            bar: {
              
              borderRadius: 50,
              backgroundColor: 'blue',
              borderColor: 'blue',
               barThickness: 1,
           
            },
          },
          scales: {
            x: {
                
              grid: {
                display: false, // Hide the x-axis grid lines
              },
            },
            y: {
                display:false,
              grid: {
                display: false, // Hide the y-axis grid lines
              },
            },
          },
        }}
      />
    </div >
    
  );
};

export default BarGraph;
