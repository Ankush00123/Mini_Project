import { createSlice, isAction } from "@reduxjs/toolkit";

const sessionSlice = createSlice(
    {
        name: "session",
        initialState: {
            isActive: false,
            startTimestamp: 0,
            accumulatedSeconds: 0,
            selectedSubjectId: -1,
        },
        reducers: {
            startSession: (state, action) => {
                const { selectedSubjectId } = action.payload;
                if (selectedSubjectId === -1)
                {
                    console.log("No subject selected");
                    return;
                }
                state.selectedSubjectId = selectedSubjectId;
                state.accumulatedSeconds = 0;
                state.startTimestamp = Date.now();
                state.isActive = true;
            },

            endSession: (state) => {
                state.isActive = false;
                state.startTimestamp = 0;
                state.accumulatedSeconds = 0;
                state.selectedSubjectId = -1;
            },

            pauseSession: (state) => 
            {
                if (state.startTimestamp) {
                    state.accumulatedSeconds += Math.floor((Date.now() - state.startTimestamp) / 1000);
                }
                state.startTimestamp = 0;
                state.isActive = false;
            },

            resumeSession: (state) =>
            {
                state.startTimestamp = Date.now();
                state.isActive = true;
            },
            
            updateSelectedSubjectId: (state, action) => {
                const { subjectId } = action.payload;
                state.selectedSubjectId = subjectId;
            },

            resetSessionState: (state) =>
            {
                state.isActive = false;
                state.startTimestamp = 0;
                state.accumulatedSeconds = 0;
                state.selectedSubjectId = -1;
            }
        },
    }
);

export const {
    startSession, 
    updateSeconds,
    endSession,
    pauseSession,
    resumeSession,
    updateSelectedSubjectId,
    resetSessionState
} = sessionSlice.actions;

export default sessionSlice.reducer;