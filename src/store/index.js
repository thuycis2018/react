import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from './apis/usersApi';
import { projectsApi } from './apis/projectsApi';
import { tasksApi } from './apis/tasksApi';
import { productsReducer } from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(projectsApi.middleware)
      .concat(tasksApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchUsersQuery,
  useAddUserMutation,
  useRemoveUserMutation,
} from './apis/usersApi';

export {
  useFetchProjectsQuery,
  useAddProjectMutation,
  useRemoveProjectMutation,
} from './apis/projectsApi';

export {
  useFetchTasksQuery,
  useAddTaskMutation,
  useRemoveTaskMutation,
} from './apis/tasksApi';

// for thunks
export * from './thunks/fetchProducts';
export * from './thunks/addProduct';
export * from './thunks/removeProduct';
