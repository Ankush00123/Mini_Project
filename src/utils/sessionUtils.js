import { addSession } from "../store/features/subjectSlice";
import { formatTime } from "./timeUtils";

export const createSession = (subjectId, duration) => {
    return {
        id: Date.now() + Math.floor(Math.random() * 10000),
        subjectId,
        subjectName: "",
        duration,
        date: new Date().toISOString().split('T')[0],
        hasEnded: true
    };
};


//adds dummy sessions to the subject passed
export const addDummySessions = (subject, dispatch) =>
{
    const offsets = [1, 3, 4, 5];
    const duration = [1800, 3600, 7200, 8000];

    offsets.forEach((daysAgo, i) => {
        const sessionDuration = duration[Math.floor((Math.random() * 4) + 1)];
        const session = createSession(subject.id, formatTime(sessionDuration));

        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        session.date = date.toISOString().split('T')[0];

        dispatch(addSession({ subjectId: subject.id, session }));
    });
}