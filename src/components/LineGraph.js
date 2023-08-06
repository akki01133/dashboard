import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { Button, ButtonGroup, Typography, Container } from '@mui/material';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
);

const data = {
  day: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [10, 20, 30, 42, 51, 82, 31],
       
      }
    ]
  },
  week: {
    labels: ["W 1", "W 2", "W 3", "W 4"],
    datasets: [
      {
        label: "Sales",
        data: [100, 120, 150, 130],
      
      }
    ]
  },
  month: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [300, 320, 350, 380, 410, 420, 450, 430, 460, 490, 500, 480],
     
       
      }
    ]
  },
  year: {
    labels: ["2023", "2024", "2025", "2026"],
    datasets: [
      {
        label: "Sales",
        data: [1500, 1700, 1900, 2100],
      
      }
    ]
  },
};

const LineGraph = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('day');

  const handleTimePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
     <div style={{ maxWidth: '500px', margin: '0 auto' ,backgroundColor:"white",borderRadius:"4px"}} >
      <Typography variant="h5" gutterBottom>
       Report
      </Typography>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <span
          onClick={() => handleTimePeriodChange('day')}
          style={{
            color: selectedPeriod === 'day' ? 'blue' : 'grey',
            cursor: 'pointer',
          }}
        >
          Day
        </span>
        <span
          onClick={() => handleTimePeriodChange('week')}
          style={{
            color: selectedPeriod === 'week' ? 'blue' : 'grey',
            cursor: 'pointer',
          }}
        >
          Week
        </span>
        <span
          onClick={() => handleTimePeriodChange('month')}
          style={{
            color: selectedPeriod === 'month' ? 'blue' : 'grey',
            cursor: 'pointer',
          }}
        >
          Month
        </span>
        <span
          onClick={() => handleTimePeriodChange('year')}
          style={{
            color: selectedPeriod === 'year' ? 'blue' : 'grey',
            cursor: 'pointer',
          }}
        >
          Year
        </span>
      </div>
      <Line
        data={data[selectedPeriod]}
        options={{
          scales: {
            x: {
              ticks: {
                color: 'grey',
              },
                grid: {
                display: false, // Hide the x-axis grid lines
              },
            },
            y: {
              ticks: {
                color: 'grey',
              },
                grid: {
                display: false, // Hide the x-axis grid lines
              },
            },
          },
          elements: {
            line: {
              borderColor: 'blue',
              borderWidth: 2,
              tension: 0.4,
              fill: true,
              backgroundColor: 'rgba(0, 0, 255, 0.2)',
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
