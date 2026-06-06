import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const user =
        JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
    };

    return (

        <div className="page">

            <div
                className="card"
                style={{
                    maxWidth: "900px",
                    width: "100%"
                }}
            >

                <h1
                    style={{
                        fontSize: "4rem",
                        marginBottom: "40px"
                    }}
                >
                    Welcome {user?.name}
                </h1>

                <div className="dashboard-cards">

                    <div
                        className="stat-box"
                        style={{
                            minHeight: "150px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <h2>📦</h2>
                        <p>Manage Plans</p>
                    </div>

                    <div
                        className="stat-box"
                        style={{
                            minHeight: "150px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <h2>💳</h2>
                        <p>Billing Portal</p>
                    </div>

                    <div
                        className="stat-box"
                        style={{
                            minHeight: "150px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <h2>👤</h2>
                        <p>User Dashboard</p>
                    </div>

                </div>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "15px",
                        justifyContent: "center",
                        marginTop: "30px"
                    }}
                >

                    <button
                        onClick={() =>
                            navigate("/plans")
                        }
                    >
                        View Plans
                    </button>

                    <button
                        onClick={() =>
                            navigate("/subscription")
                        }
                    >
                        My Subscription
                    </button>

                    <button
                        onClick={() =>
                            navigate("/admin")
                        }
                    >
                        Admin Dashboard
                    </button>

                    <button
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;