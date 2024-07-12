import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints(builder) {
    return {
      addUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return ['Users'];
        },
        query: () => {
          return {
            method: 'POST',
            url: '/users',
            body: {
              name: faker.name.fullName(),
            },
          };
        },
      }),  
      fetchUsers: builder.query({
        providesTags: (result, error, user) => {
          return ['Users'];
        },
        query: () => {
          return {
            url: '/users',
            method: 'GET',
          };
        },
      }),
      removeUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return ['Users'];
        },
        query: (user) => {
          return {
            method: 'DELETE',
            url: `/users/${user.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchUsersQuery,
  useAddUserMutation,
  useRemoveUserMutation,
} = usersApi;
export { usersApi };
