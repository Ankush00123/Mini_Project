import { addNewSubject } from "../store/features/subjectSlice";
import { mountNewUser } from "../store/features/userSlice";

export const createSubject = (subjectName) => {
    return {
        name: subjectName,
        id: Date.now() + Math.floor(Math.random() * 10000),
        sessions: [],
    };
};


export const addDummySubjects = (dispatch) =>
{
    dispatch(mountNewUser({ name: "user" }));
    dispatch(addNewSubject({ subject: createSubject("subject1") }));
    dispatch(addNewSubject({ subject: createSubject("subject2") }));
    dispatch(addNewSubject({ subject: createSubject("subject3") }));
    dispatch(addNewSubject({ subject: createSubject("subject4") }));
    dispatch(addNewSubject({ subject: createSubject("subject5") }));
    dispatch(addNewSubject({ subject: createSubject("subject6") }));
}  
