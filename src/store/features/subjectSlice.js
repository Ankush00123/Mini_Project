import { createSlice } from "@reduxjs/toolkit";
import { createSession } from "../../utils/sessionUtils";
import { formatTime } from "../../utils/timeUtils";

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
            },
            
            addSession: (state, action) => 
            {
                const { subjectId, session } = action.payload;
                const subject = state.subjectList.find(subject => subject.id === subjectId);
                
                if (subject)
                {
                    if (!subject.sessions) 
                    {
                        subject.sessions = [];
                    }
                    subject.sessions.push(session);
                }
            },

            addDummySession: (state) => {
                state.subjectList = state.subjectList.map((subject) => {
                    const offsets = [0, 1, 2, 3, 4, 5, 6];
                    const durations = [ 900, 1800, 2700, 3600, 5400, 7200];

                    offsets.forEach((daysAgo, i) => {
                        const sessionDuration = durations[Math.floor((Math.random() * 6))];
                        const session = createSession(subject.id, formatTime(sessionDuration));
                        
                        const date = new Date();
                        date.setDate(date.getDate() - daysAgo);
                        session.date = date.toISOString().split('T')[0];

                        subject.sessions.push(session);
                    })

                    return subject;
                })
            },

            importSubjectState: (state, action) =>
            {
                return action.payload;
            },

            resetSubjectState: (state) =>
            {
                state.subjectList = [];
            }
        }
    }
);

export const {
    addNewSubject,
    addSession,
    addDummySession,
    importSubjectState,
    resetSubjectState
} = subjectSlice.actions;

export default subjectSlice.reducer;