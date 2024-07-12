import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const addProduct = createAsyncThunk('products/add', async () => {
  const response = await axios.post('http://localhost:3001/products/', {
    name: faker.name.fullName(),
  });

  return response.data;
});

export { addProduct };
