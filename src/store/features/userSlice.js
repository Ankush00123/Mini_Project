import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice(
    {
        name: "user",
        
        initialState: {
            name: "",
            userProfileMounted: false,
            isDummy: false,
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

            setDummyUser: (state) =>
            {   
                state.isDummy = true;
            },

            importUserState: (state, action) =>
            {
                return action.payload;
            },


            resetUserState: (state) =>
            {
                state.name = "";
                state.userProfileMounted = false;
                state.isDummy = false;
            }
        }

    }
);

export const {
    mountNewUser,
    updateUsername,
    setDummyUser,
    importUserState,
    resetUserState
} = userSlice.actions;

export default userSlice.reducer;