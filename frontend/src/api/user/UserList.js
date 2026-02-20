import React, { useEffect, useState } from "react";
import api from "../axios";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    // Pobierz użytkowników
    const fetchUsers = async () => {
        try {
            const res = await api.get("/users/");
            setUsers(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Obsługa zmian w formularzu
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Tworzenie użytkownika
    const handleCreate = async () => {
        try {
            await api.post("/users/", form);
            setForm({ username: "", email: "", password: "" });
            fetchUsers();
        } catch (err) {
            console.error(err);
        }
    };

    // Usuwanie użytkownika
    const handleDelete = async (id) => {
        try {
            await api.delete(`/users/${id}/`);
            fetchUsers();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Users</h2>
            <div>
                <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    type="password"
                />
                <button onClick={handleCreate}>Create</button>
            </div>

            <ul>
                {users.map((u) => (
                    <li key={u.id}>
                        {u.username} ({u.email}){" "}
                        <button onClick={() => handleDelete(u.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
