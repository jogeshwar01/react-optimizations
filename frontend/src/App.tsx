import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const Dashboard = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import("./components/Landing"))

function App() {
    return (
        <div>
            <BrowserRouter>
                <Appbar />

                <Routes>
                    <Route path='/landing' element={<Suspense fallback={"loading..."} > <Landing /></Suspense>} />
                    <Route path='/dashboard' element={<Suspense fallback={"loading..."} > <Dashboard /></Suspense>} />
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