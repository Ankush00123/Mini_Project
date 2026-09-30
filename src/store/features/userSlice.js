import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice(
    {
        name: "user",
        
        initialState: {
            name: "User1",
            isLoggedIn: false
        },
        
        reducers: {
            addNewUser: (state, action) =>
            {
                const { name } = action.payload;
                state.name = name;
                state.isLoggedIn = true;
            }
        }

    }
);

export const {
    addNewUser,
} = userSlice.actions;

export default userSlice.reducer;