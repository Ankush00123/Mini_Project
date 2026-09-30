import { Link } from "react-router-dom";

const SubjectCard = ({subject}) => {
    return (
        <Link to={`/subjects/${subject.id}`}>
            <div className="
                group
                bg-[#16161d] border border-zinc-900 rounded-2xl
                p-5 gap-2
                hover:border-indigo-500/30 hover:bg-[#191922]
                transition-all duration-200
            ">
                <div className="flex items-start justify-between mb-2">
                    <h1 className="font-['Lexend'] font-semibold text-zinc-100 group-hover:text-indigo-300 transition-colors">
                        {subject.name}
                    </h1>
                    <span className="text-zinc-700 group-hover:text-indigo-400 transition-colors">→</span>
                </div>
            </div>
        </Link>
    )
};

export default SubjectCard;