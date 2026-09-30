import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatTime } from "../../utils/timeUtils";
import { addSession } from "../../store/features/subjectSlice";
import { endSession, pauseSession, resumeSession, startSession, updateSeconds, updateSelectedSubjectId } from "../../store/features/sessionSlice";
import { createSession } from "../../utils/sessionUtils";

const SessionPage = () => {
    const dispatch = useDispatch();
    const { subjectList } = useSelector(state => state.subject); 

    const { isActive, startTimestamp, accumulatedSeconds, selectedSubjectId } = useSelector(state => state.session);
    const [subjectId, setSubjectId] = useState(selectedSubjectId);
    const [displaySecs, setDisplaySecs] = useState(accumulatedSeconds);

    const handleEndSession = () => {
        if (selectedSubjectId === -1) {
            alert("Please select a subject first");
            return;
        }
        const totalSeconds = Math.floor((Date.now() - startTimestamp) / 1000) + accumulatedSeconds;
        if (totalSeconds < 10) {
            alert("Session too short to save");
            return;
        }

        const session = createSession(subjectId, formatTime(totalSeconds));
        dispatch(addSession({ subjectId: selectedSubjectId, session: session }));
        alert("Successfully saved the session information!");
        dispatch(endSession());
    }
    
    const handleResumeSession = () => {
        if (selectedSubjectId !== subjectId)
        {
            if (subjectId === -1)
            {
                alert("No subject selected hence can't resume session");
                return;
            }
            dispatch(updateSelectedSubjectId({ subjectId }));
        }
        dispatch(resumeSession());
    }

    useEffect(() => {
        if (!isActive) {
            setDisplaySecs(accumulatedSeconds);
            return;
        }
        const tick = () => {
            const overflowing = Math.floor((Date.now() - startTimestamp) / 1000);
            setDisplaySecs(accumulatedSeconds + overflowing);
        }
        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [isActive, startTimestamp, accumulatedSeconds]);

    const timerField = formatTime(displaySecs);

    return (
        <div className="p-4 sm:p-8 max-w-lg mx-auto w-full">
            <h2 className="font-['Lexend'] text-2xl font-semibold text-zinc-100 mb-6">Session Timer</h2>
            
            <div className="mb-6">
                <select 
                    value={subjectId} 
                    onChange={(e) => setSubjectId(Number(e.target.value))}
                    disabled={isActive}
                    className="
                        w-full bg-[#121216] border border-zinc-800 rounded-2xl
                        px-4 py-3 text-sm text-zinc-100
                        disabled:opacity-40 focus:outline-none focus:border-indigo-500/50
                        cursor-pointer shadow-inner
                    "
                >
                    <option value={-1}>Choose a Subject</option>
                    {subjectList.map(subject => (
                        <option key={subject.id} value={subject.id}>
                            {subject.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="
                relative overflow-hidden
                bg-[#121216] border border-zinc-800/80 rounded-3xl 
                p-8 sm:p-12 text-center mb-6 shadow-xl
            ">
                <div className="relative font-['Lexend'] text-4xl sm:text-6xl font-semibold text-zinc-100 tabular-nums tracking-tight">
                    {`${timerField.hours.toString().padStart(2, '0')}:${timerField.mins.toString().padStart(2, '0')}:${timerField.secs.toString().padStart(2, '0')}`}
                </div>
                <div className="relative flex items-center justify-center gap-2 mt-4">
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-indigo-400 animate-pulse' : 'bg-zinc-600'}`} />
                    <p className="text-xs font-medium text-zinc-400">
                        {isActive ? "Timer is running" : "Timer Paused"}
                    </p>
                </div>
            </div>

            <div className="flex gap-3">
                {!isActive && accumulatedSeconds === 0 ? (
                    <button onClick={() => dispatch(startSession({ selectedSubjectId: subjectId }))}
                        className="flex-1 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-2xl font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                        Start
                    </button>
                ) : isActive ? (
                    <button onClick={() => dispatch(pauseSession())}
                        className="flex-1 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-2xl font-medium transition-all">
                        Pause
                    </button>
                ) : (
                    <button onClick={handleResumeSession}
                        className="flex-1 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-2xl font-medium transition-all">
                        Resume
                    </button>
                )}
                <button onClick={handleEndSession}
                    className="flex-1 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 rounded-2xl font-medium transition-all">
                    End & Save
                </button>
            </div>
        </div>
    )
};

export default SessionPage;