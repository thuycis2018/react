import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers:{

    }
});

// export const { } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;