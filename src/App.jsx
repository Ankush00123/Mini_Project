import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import SubjectsPage from './components/Subjects/SubjectsPage';
import Sidebar from './components/Sidebar/Sidebar';
import SessionPage from './components/Session/SessionPage';
import SingleSubjectPage from './components/Subjects/SingleSubjectPage';
import SettingsPage from './components/Settings/SettingsPage';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <BrowserRouter>
            <div className="flex min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden">
                <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
                
                <div className="flex-1 flex flex-col min-w-0">
                    
					<header className="md:hidden flex items-center justify-between px-6 py-4 bg-[#0b0b0f] border-b border-zinc-800/80">
						<button 
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 hover:text-white focus:outline-none"
                        >
                            ☰
                        </button>
                        <div className="flex items-center gap-2">
                            <NavLink to="/" className="font-['Lexend'] font-semibold text-sm">Study Tracker</NavLink>
                        </div>
                        
                    </header>

                    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/subjects" element={<SubjectsPage />} />
                            <Route path="/subjects/:subjectId" element={<SingleSubjectPage/>}/>
							<Route path="/sessions" element={<SessionPage />} />
							<Route path="/settings" element={<SettingsPage/>} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;