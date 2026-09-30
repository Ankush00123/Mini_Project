import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice(
    {
        name: "goal",

        initialState: {
            goal: "",
            deadline: "",
        },

        reducers: {
            updateGoal: (state, action) =>
            {
                const { goal, deadline } = action.payload;
                state.goal = goal;
                state.deadline = deadline;
            },

            importGoalState: (state, action) =>
            {
                return action.payload;
            },

            resetGoalState: (state) =>
            {
                state.goal = "";
                state.deadline = "";
            }
        },
    }
);

export const {
    updateGoal,
    importGoalState,
    resetGoalState
} = goalSlice.actions;

export default goalSlice.reducer;