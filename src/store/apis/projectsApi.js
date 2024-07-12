import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// DEV to test loading state
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const projectsApi = createApi({
  reducerPath: 'projects',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    fetchFn: async (...args) => {
      // DEV to test loading state
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      addProject: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: 'UsersProjects', id: user.id }];
        },
        query: (user) => {
          return {
            url: '/projects',
            method: 'POST',
            body: {
              userId: user.id,
              name: 'project ' + faker.word.noun(),
            },
          };
        },
      }),
      fetchProjects: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map((project) => {
            return { type: 'Project', id: project.id };
          });
          tags.push({ type: 'UsersProjects', id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: '/projects',
            method: 'GET',
            params: {
              userId: user.id,
            },
          };
        },
      }),
      removeProject: builder.mutation({
        invalidatesTags: (result, error, project) => {
          return [{ type: 'Project', id: project.id }];
        },
        query: (project) => {
          return {
            url: `/projects/${project.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const {
  useFetchProjectsQuery,
  useAddProjectMutation,
  useRemoveProjectMutation,
} = projectsApi;
export { projectsApi };
