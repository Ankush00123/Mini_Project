import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice(
    {
        name: "goal",

        initialState: {
            goal: "GATE 2027",
            deadline: "Feb 2027",
        },

        reducers: {

        },
    }
);

export const {

} = goalSlice.actions;

export default goalSlice.reducer;