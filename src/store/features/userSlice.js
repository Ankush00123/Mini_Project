import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice(
    {
        name: "user",
        
        initialState: {
            name: "",
            userProfileMounted: false
        },
        
        reducers: {
            mountNewUser: (state, action) =>
            {
                const { name } = action.payload;
                state.name = name;
                state.userProfileMounted = true;
            },

            updateUsername: (state, action) =>
            {
                if (!state.userProfileMounted) return;
                state.name = action.payload;
            },

            importUserState: (state, action) =>
            {
                return action.payload;
            }
        }

    }
);

export const {
    mountNewUser,
    updateUsername,
    importUserState,
} = userSlice.actions;

export default userSlice.reducer;