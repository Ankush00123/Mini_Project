import { createSlice } from "@reduxjs/toolkit";

const subjectSlice = createSlice(
    {
        name: "subject",

        initialState:
        {
            subjectList: [],
        },
        
        reducers: {
            addNewSubject: (state, action) =>
            {
                const { subject } = action.payload;
                state.subjectList.push(subject);
            }
        }
    }
);

export const {
    addNewSubject
} = subjectSlice.actions;

export default subjectSlice.reducer;