import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const sideBarCss = ({ isActive }) => (`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-3
        ${isActive 
            ? 'bg-indigo-500/15 text-indigo-300 font-semibold' 
            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
        }
    `);

    const { userProfileMounted } = useSelector(state => state.user);

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div 
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-50
                w-64 shrink-0 
                bg-[#0b0b0f] border-r border-zinc-800/80 
                p-5 flex flex-col gap-6
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                        <NavLink to={"/"} className="font-['Lexend'] text-base font-semibold text-zinc-100 tracking-tight">
                            Study Tracker
                        </NavLink>
                    </div>
                    {/* Close button for mobile */}
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="md:hidden text-zinc-400 hover:text-white p-1"
                    >
                        ✕
                    </button>
                </div>

                <nav className="flex flex-col gap-2 mt-2">
                    <NavLink to="/" className={sideBarCss} onClick={() => setIsOpen(false)}>Dashboard</NavLink>
                    {userProfileMounted && <NavLink to="/subjects" className={sideBarCss} onClick={() => setIsOpen(false)}>Subjects</NavLink>}
                    {userProfileMounted && <NavLink to="/sessions" className={sideBarCss} onClick={() => setIsOpen(false)}>Sessions</NavLink>}
                    <NavLink to="/settings" className={sideBarCss} onClick={() => setIsOpen(false)}>Settings</NavLink>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;