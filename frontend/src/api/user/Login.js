import React, { useState } from "react";
import api from "../axios";   // poprawimy ścieżkę niżej

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        setError("");

        try {
            const res = await api.post("token/", {
                username,
                password,
            });

            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);

            window.location.href = "/dashboard";

        } catch (err) {
            if (err.response?.status === 401) {
                setError("Niepoprawne dane logowania");
            } else {
                setError("Błąd serwera");
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};


export default Login;