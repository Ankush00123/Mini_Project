import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import subjectReducer from "./features/subjectSlice";
import goalReducer from "./features/goalSlice";
import sessionReducer from "./features/sessionSlice";

const store = configureStore(
    {
        reducer: {
            user: userReducer,
            subject: subjectReducer,
            goal: goalReducer,
            session: sessionReducer,
        }
    }
);

export default store;