import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

<BrowserRouter>
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
</BrowserRouter>;