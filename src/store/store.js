import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import subjectReducer from "./features/subjectSlice";
import goalReducer from "./features/goalSlice";

const store = configureStore(
    {
        reducer: {
            user: userReducer,
            subject: subjectReducer,
            goal: goalReducer
        }
    }
);

export default store;