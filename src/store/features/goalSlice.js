import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice(
    {
        name: "goal",

        initialState: {
            goal: "GATE 2027",
            deadline: "Feb 2027",
        },

        reducers: {
            importGoalState: (state, action) =>
            {
                return action.payload;
            }
        },
    }
);

export const {
    importGoalState
} = goalSlice.actions;

export default goalSlice.reducer;