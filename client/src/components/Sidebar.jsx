import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();
    const user =
        JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
    };

    return (

        <div className="sidebar">

            <div>

                <div className="logo">
                    💳 ScholarX
                </div>

                <p
                    style={{
                        textAlign: "center",
                        color: "#94a3b8",
                        marginTop: "10px"
                    }}
                >
                    Welcome {user?.name}
                </p>

                <nav>

                    <Link to="/dashboard">
                        🏠 Dashboard
                    </Link>

                    <Link to="/plans">
                        📦 Plans
                    </Link>

                    <Link to="/subscription">
                        💳 Subscription
                    </Link>

                    {user?.role === "admin" && (
                        <Link to="/admin">
                            👑 Admin
                        </Link>
                    )}

                    {user?.role === "admin" && (
                        <Link to="/admin-plans">
                            ⚙️ Manage Plans
                        </Link>
                    )}
                </nav>

            </div>

            <button
                className="logout-btn"
                onClick={logout}
            >
                🚪 Logout
            </button>

            <p
                style={{
                    textAlign: "center",
                    color: "#64748b",
                    marginTop: "40px"
                }}
            >
                © 2026 ScholarX SaaS Billing Portal
            </p>
        </div>

    );
}

export default Sidebar;