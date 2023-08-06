import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const Orders = () => {
  const data = [
    {
      "item_name": "Iphone 13",
      "quantity": 6,
      "date": "January 20, 2022",
      "amount": "$799.00",
      "status": "In Process"
    },
    {
      "item_name": "Xiaomi Redmi note 10",
      "quantity": 14,
      "date": "January 20, 2022",
      "amount": "$788.02",
      "status": "Approved"
    },
    {
      "item_name": "Iphone 12 pro",
      "quantity": 40,
      "date": "January 22, 2022",
      "amount": "$699.00",
      "status": "In Process"
    }
  ];

  return (
   <>
   <Typography variant="h6" sx={{ color: 'black' }}>Recent Orders</Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'grey.500' }}>Item Name</TableCell>
            <TableCell sx={{ color: 'grey.500' }}>Quantity</TableCell>
            <TableCell sx={{ color: 'grey.500' }}>Order Date</TableCell>
            <TableCell sx={{ color: 'grey.500' }}>Amount</TableCell>
            <TableCell sx={{ color: 'grey.500' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.item_name}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell sx={{ color: 'grey.500' }}>{order.date}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell
                sx={{
                  backgroundColor:
                    order.status === 'Pending'
                      ? 'lightblue'
                      : order.status === 'Approved'
                      ? 'lightgreen'
                      : 'lightorange',
                  color:
                    order.status === 'Pending'
                      ? 'blue'
                      : order.status === 'Approved'
                      ? 'green'
                      : 'orange',
                  borderRadius: '50px',
                }}
              >
                {order.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default Orders;
