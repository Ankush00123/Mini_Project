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
