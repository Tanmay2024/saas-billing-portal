import { useEffect, useState } from "react";
import axios from "../api";

function AdminDashboard() {

    const [stats, setStats] = useState(null);

    useEffect(() => {

        const fetchStats = async () => {

            try {

                const token =
                    localStorage.getItem("token");

                const res =
                    await axios.get(
                        "/admin/stats",
                        {
                            headers: {
                                Authorization:
                                    `Bearer ${token}`
                            }
                        }
                    );

                setStats(res.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchStats();

    }, []);

    if (!stats) {

        return (

            <div className="page">

                <div className="card">

                    <h1>
                        Loading Dashboard...
                    </h1>

                </div>

            </div>

        );

    }
console.log(stats);
    return (

        <div className="page">

            <div
                style={{
                    width: "100%",
                    maxWidth: "1000px"
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "15px"
                    }}
                >
                    Admin Dashboard
                </h1>
                <p
                    style={{
                        textAlign: "center",
                        color: "#94a3b8",
                        marginBottom: "40px"
                    }}
                >
                    Monitor users, plans and subscriptions
                </p>
                <div className="dashboard-cards">

                    <div className="stat-box">

                        <h2>👥</h2>

                        <h1
                            style={{
                                color: "#60a5fa",
                                margin: "15px 0"
                            }}
                        >
                            {stats.users}
                        </h1>

                        <p>Total Users</p>

                    </div>

                    <div className="stat-box">

                        <h2>📦</h2>

                        <h1
                            style={{
                                color: "#60a5fa",
                                margin: "15px 0"
                            }}
                        >
                            {stats.plans}
                        </h1>

                        <p>Total Plans</p>

                    </div>

                    <div className="stat-box">

                        <h2>💳</h2>

                        <h1
                            style={{
                                color: "#60a5fa",
                                margin: "15px 0"
                            }}
                        >
                            {stats.subscriptions}
                        </h1>

                        <p>Total Subscriptions</p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;