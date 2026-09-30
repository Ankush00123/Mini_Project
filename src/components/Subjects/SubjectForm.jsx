import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewSubject } from "../../store/features/subjectSlice";
import { createSubject } from "../../utils/subjectUtils";


const SubjectForm = ({onClose}) => {
    const dispatch = useDispatch();
    const [subjectName, setSubjectName] = useState("");

    const handleAddNewSubject = (e) =>
    {
        e.preventDefault();
        if (!subjectName.trim()) return;
        dispatch(addNewSubject({ subject: createSubject(subjectName.trim()) }));
        setSubjectName("");
        onClose();
    }

    return (
        <div className="bg-[#16161d] border border-zinc-900 rounded-2xl p-4 mb-5">
            <form onSubmit={handleAddNewSubject} className="flex gap-2"
            >
                <input 
                    type="text" 
                    placeholder="Enter subject name..."
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    autoFocus
                    className="
                        flex-1 bg-zinc-900/60 border border-zinc-800 rounded-xl
                        px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600
                        focus:outline-none focus:border-indigo-500/50 focus:bg-zinc-900
                        transition-all
                    "
                />

                <button 
                    type="submit"
                    className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl text-sm font-medium transition-all"
                >
                    Add Subject
                </button>
            </form>
        </div>
    )
};

export default SubjectForm;