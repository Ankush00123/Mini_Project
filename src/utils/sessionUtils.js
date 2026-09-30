export const createSession = (subjectID) => {
    return {
        id: Date.now(),
        duration: 0,
        date: new Date(Date.now()),
        hasEnded: false
    };
};
