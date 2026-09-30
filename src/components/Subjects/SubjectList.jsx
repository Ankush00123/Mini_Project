import { useSelector } from "react-redux";
import SubjectCard from "./SubjectCard";

const SubjectList = () => {

    const subjectList = useSelector(state => state.subject.subjectList);

    return (
        <div>
            {
                subjectList.map((subject) => (
                    <SubjectCard subject={subject} id={subject.id} />
                ))
            }
        </div>
    )
};

export default SubjectList;