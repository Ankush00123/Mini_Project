import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import WeeklyHoursBarChart from "../Charts/WeeklyHoursBarChart";

const SingleSubjectPage = () => {
    //gets id 
    let { subjectId } = useParams();

    subjectId = parseInt(subjectId);
    const subject = useSelector(state => state.subject.subjectList.find(sub => sub.id === subjectId));

    //subject not found
    if (!subject) {
        return (
            <div className="p-8 max-w-md mx-auto text-center space-y-4">
                <h2 className="font-['Lexend'] text-xl font-semibold text-zinc-100">Subject not found</h2>
                <Link to="/subjects" className="inline-block text-xs font-semibold text-indigo-400 hover:text-indigo-300">← Back to Subjects</Link>
            </div>
        );
    }

    return (
        // actual comp
        <div className="p-4 sm:p-8 max-w-4xl mx-auto w-full space-y-6">
            <Link to="/subjects" className="inline-block text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">← Back to Subjects</Link>
            
            <h1 className="font-['Lexend'] text-2xl sm:text-3xl font-semibold text-zinc-100">Subject: {subject.name}</h1>

            <div className="bg-[#16161d] border border-zinc-900 rounded-2xl p-5 sm:p-6 space-y-4">
                <h3 className="font-['Lexend'] text-sm font-semibold text-zinc-200">Past Sessions:</h3>
                {
                    subject.sessions.length === 0 ? (
                        <p className="text-sm text-zinc-500 italic">No sessions recorded yet for {subject.name}.</p>
                    )
                        :
                    (
                        <ul className="space-y-2">
                            {subject.sessions.map(session => (
                                <li key={session.id} className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 text-xs sm:text-sm text-zinc-300 flex flex-col sm:flex-row justify-between gap-1">
                                    <span className="text-zinc-100 font-medium">Date: {session.date}</span> 
                                    <span className="text-indigo-400 font-semibold">Duration: {session.duration.hours} hours {session.duration.mins} minutes {session.duration.secs} seconds</span>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>

            <div className="bg-[#16161d] border border-zinc-900 rounded-2xl p-5 sm:p-6">
                <WeeklyHoursBarChart subjectList={[subject]}/>
            </div>
        </div>
    );
};

export default SingleSubjectPage;