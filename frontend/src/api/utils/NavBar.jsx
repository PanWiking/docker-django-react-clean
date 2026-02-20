import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/login");
    };

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Navbar;