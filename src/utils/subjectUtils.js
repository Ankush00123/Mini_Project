import { addNewSubject } from "./../store/features/subjectSlice";
export const createSubject = (subjectName) => {
    return {
        name: subjectName,
        id: subjectName,
        sessions: [],
    };
};

export const addDummySubjects = (dispatch) => {
    dispatch(addNewSubject({subject: createSubject("physics")}));
    dispatch(addNewSubject({subject: createSubject("science")}));
    dispatch(addNewSubject({subject: createSubject("maths")}));
}