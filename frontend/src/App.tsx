import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Appbar />

                <Routes>
                    <Route path='/landing' element={<Landing />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function Appbar(){
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => {
                    navigate("/landing")
                }}> Landing Page </button>

            <button onClick={() => {
                    navigate("/dashboard")
                }}> Dashboard Page </button>
        </div>
    )
}

export default App;