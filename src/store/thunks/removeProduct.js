import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeProduct = createAsyncThunk('products/remove', async (product) => {
  await axios.delete(`http://localhost:3001/products/${product.id}`);

  return product;
});

export { removeProduct };
