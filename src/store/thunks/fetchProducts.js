import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await axios.get('http://localhost:3001/products/');
  return response.data;
});

export { fetchProducts };
