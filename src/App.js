import { Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import Resume from './components/Resume/Resume';

function App() {
    return (
        <main className="flex-1 md:h-[100vh]">
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </main>
    );
}

export default App;
