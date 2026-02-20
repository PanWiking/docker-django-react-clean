
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./api/user/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./api/utils/NavBar";
import ProtectedRoute from "./api/user/ProtectedRoute";

function App() {
    const token = localStorage.getItem("access");

    return (
        <BrowserRouter>
            {token && <Navbar />}

            <Routes>
                <Route path="/login" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
