import { timeToSeconds } from "./timeUtils"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//returns weekdays wise hours
export const getWeeklyHoursData= (subjectList) => {
    const sessions = getAllSessions(subjectList)
    //days index
    const todayIndex = new Date().getDay()

    //days in reference to current day
    const orderedDays = Array.from({ length: 7 }, (_, i) => 
        DAYS[(todayIndex + 1 + i) % 7]
    )

    //object containing hours info for each day of week
    const totalHours = {}
    DAYS.forEach(day => totalHours[day] = 0)

    //setting hours in totalHours 
    sessions.forEach(session => {
        const dayName = DAYS[new Date(session.date).getDay()]
        totalHours[dayName] += timeToSeconds(session.duration) / 3600
    })

    return orderedDays.map(day => ({ 
        day, 
        hours: Number(totalHours[day].toFixed(2)) 
    }))
}

//returns subject and their respective hours
export const getSubjectHoursData = (subjectList) => {
    console.log(subjectList);
    return subjectList.map((subject) => ({
        name: subject.name,
        hours: Number(
            subject.sessions.reduce((sum, s) => sum + timeToSeconds(s.duration) / 3600, 0).toFixed(2)
        )
    })).filter(subject => subject.hours > 0)
}

export const getAllSessions = (subjectList) => {
    return subjectList.flatMap(subject => 
        subject.sessions.map(session => ({ ...session, subjectName: subject.name }))
    )
}