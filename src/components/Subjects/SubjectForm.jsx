import { useState } from "react";
import { useDispatch } from "react-redux";


const SubjectForm = () => {
    const dispatch = useDispatch();
    const [subjectName, setSubjectName] = useState("");
    return (
        <div>
            <label id="subjectNameInput"></label>
            <input type="text" for="subjectNameInput" />
            <button>Add Subject</button>
        </div>
    )
};

export default SubjectForm;