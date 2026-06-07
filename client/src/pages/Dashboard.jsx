import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "../api";

function Dashboard() {

    const navigate = useNavigate();
    const [subscription, setSubscription] =
        useState(null);


    const user =
        JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
    };
    useEffect(() => {

        const fetchSubscription =
            async () => {

                try {

                    const token =
                        localStorage.getItem("token");

                    const res =
                        await axios.get(
                            "/subscriptions/my",
                            {
                                headers: {
                                    Authorization:
                                        `Bearer ${token}`
                                }
                            }
                        );

                    setSubscription(
                        res.data
                    );

                } catch (error) {

                    console.log(error);

                }

            };

        fetchSubscription();

    }, []);

    return (
        <>

            <Sidebar />

            <div className="main-content">

                <h1
                    style={{
                        fontSize: "3.5rem",
                        marginBottom: "10px"
                    }}
                >
                    Welcome {user?.name}
                </h1>
                <div
                    className="card"
                    style={{
                        marginTop: "25px",
                        marginBottom: "30px",
                        padding: "25px"
                    }}
                >
                    <h3>
                        SaaS Billing Portal
                    </h3>
                    <div
                        className="card"
                        style={{
                            marginBottom: "25px",
                            padding: "25px"
                        }}
                    >
                        <h2 style={{ color: "#fbbf24" }}>
                            👤 User Profile
                        </h2>

                        <p style={{ marginTop: "15px" }}>
                            <strong>Name:</strong> {user?.name}
                        </p>

                        <p>
                            <strong>Email:</strong> {user?.email}
                        </p>

                        <p>
                            <strong>Role:</strong> {user?.role}
                        </p>
                    </div>
                    {
                        subscription ? (

                            <div
                                className="card"
                                style={{
                                    marginBottom: "30px"
                                }}
                            >

                                <h2
                                    style={{
                                        color: "#fbbf24"
                                    }}
                                >
                                    💳 Current Subscription
                                </h2>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "50px",
                                        marginTop: "20px"
                                    }}
                                >

                                    <div>

                                        <h3>
                                            {subscription.plan.name}
                                        </h3>

                                        <p>
                                            ${subscription.plan.price}
                                            / month
                                        </p>

                                    </div>

                                    <div>

                                        <h3>Status</h3>

                                        <p
                                            style={{
                                                color: "#22c55e"
                                            }}
                                        >
                                            {subscription.status}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ) : (

                            <div
                                className="card"
                                style={{
                                    marginBottom: "30px"
                                }}
                            >

                                <h2
                                    style={{
                                        color: "#ef4444"
                                    }}
                                >
                                    No Active Subscription
                                </h2>

                            </div>

                        )
                    }

                    <p
                        style={{
                            color: "#94a3b8",
                            marginTop: "10px"
                        }}
                    >
                        Manage subscriptions, billing plans,
                        account settings and platform access
                        from one dashboard.
                    </p>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3,1fr)",
                        gap: "20px",
                        marginBottom: "30px"
                    }}
                >

                    <div className="stat-box">
                        <h2
                            style={{
                                fontSize: "3rem",
                                color: "#fbbf24"
                            }}
                        >
                            📦
                        </h2>

                        <h3
                            style={{
                                marginTop: "10px"
                            }}
                        >
                            3
                        </h3>

                        <p>Available Plans</p>
                    </div>

                    <div className="stat-box">
                        <h2
                            style={{
                                fontSize: "3rem",
                                color: "#22c55e"
                            }}
                        >
                            ✓
                        </h2>

                        <h3
                            style={{
                                marginTop: "10px"
                            }}
                        >
                            Active
                        </h3>

                        <p>Subscription Status</p>
                    </div>

                    <div className="stat-box">
                        <h2
                            style={{
                                fontSize: "3rem",
                                color: "#a855f7"
                            }}
                        >
                            👤
                        </h2>

                        <h3
                            style={{
                                marginTop: "10px"
                            }}
                        >
                            {user?.role}
                        </h3>

                        <p>User Account</p>
                    </div>

                </div>

                <div className="dashboard-cards">

                    <div
                        className="stat-box"
                        onClick={() => navigate("/plans")}
                        style={{
                            minHeight: "180px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                    >
                        <h2 style={{ fontSize: "3rem" }}>
                            📦
                        </h2>

                        <p
                            style={{
                                marginTop: "10px"
                            }}
                        >
                            Manage Plans
                        </p>
                    </div>

                    <div
                        className="stat-box"
                        onClick={() => navigate("/subscription")}
                        style={{
                            minHeight: "180px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                    >
                        <h2 style={{ fontSize: "3rem" }}>
                            💳
                        </h2>

                        <p
                            style={{
                                marginTop: "10px"
                            }}
                        >
                            My Subscription
                        </p>
                    </div>

                    <div
                        className="stat-box"
                        onClick={() => navigate("/admin")}
                        style={{
                            minHeight: "180px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                    >
                        <h2 style={{ fontSize: "3rem" }}>
                            👑
                        </h2>

                        <p
                            style={{
                                marginTop: "10px"
                            }}
                        >
                            Admin Dashboard
                        </p>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Dashboard;