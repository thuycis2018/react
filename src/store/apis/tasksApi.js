import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints(builder) {
    return {
      addTask: builder.mutation({
        invalidatesTags: (result, error, project) => {
          return [{ type: 'ProjectsTasks', id: project.id }];
        },
        query: (project) => {
          return {
            method: 'POST',
            url: '/tasks',
            body: {
              projectId: project.id,
              url: faker.image.abstract(150, 150, true),
              name: 'task ' + faker.word.noun(),
            },
          };
        },
      }),  
      fetchTasks: builder.query({
        providesTags: (result, error, project) => {
          const tags = result.map((task) => {
            return { type: 'Task', id: task.id };
          });
          tags.push({ type: 'ProjectsTasks', id: project.id });
          return tags;
        },
        query: (project) => {
          return {
            url: '/tasks',
            method: 'GET',
            params: {
              projectId: project.id,
            },
          };
        },
      }),
      removeTask: builder.mutation({
        invalidatesTags: (result, error, task) => {
          return [{ type: 'Task', id: task.id }];
        },
        query: (task) => {
          return {
            method: 'DELETE',
            url: `/tasks/${task.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchTasksQuery,
  useAddTaskMutation,
  useRemoveTaskMutation,
} = tasksApi;
export { tasksApi };
