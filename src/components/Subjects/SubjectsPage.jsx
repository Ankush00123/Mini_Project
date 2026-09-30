import { useDispatch, useSelector } from "react-redux";
import SubjectCard from "./SubjectCard";
import { addDummySubjects } from "../../utils/subjectUtils";
import { useState } from "react";
import SubjectForm from "./SubjectForm";

const SubjectsPage = () => {
    const subjectList = useSelector(state => state.subject.subjectList);
    const dispatch = useDispatch();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const addDummyHandler = () => {
        addDummySubjects(dispatch);
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#121216] border border-zinc-800/70 p-6 rounded-3xl shadow-xl">
                <div>
                    <h1 className="font-['Lexend'] text-2xl font-semibold text-zinc-100">Subjects</h1>
                    <p className="text-sm text-zinc-400 mt-1">{subjectList.length} total subjects added</p>
                </div>

                {/* main add subject button in subject page */}
                <div className="flex flex-wrap items-center gap-3">
                    <button 
                        onClick={() => setIsFormOpen(true)}
                        className="
                            px-4 py-2.5 bg-indigo-500 hover:bg-indigo-400 
                            text-white rounded-xl text-sm font-medium 
                            transition-all active:scale-95 shadow-lg shadow-indigo-500/20
                        "
                    >
                        + New Subject
                    </button>
                    <button 
                        onClick={addDummyHandler}
                        className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-xs text-zinc-400 transition-all"
                    >
                        Add Dummy Subjects
                    </button>
                </div>
            </div>


            {/* subject addition window */}
            {
                isFormOpen && (<SubjectForm onClose={() => setIsFormOpen(false)} />)
            }

            {/* list of all subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjectList.map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} />
                ))}
            </div>

        </div>
    );
};

export default SubjectsPage;