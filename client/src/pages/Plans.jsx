import { useEffect, useState } from "react";
import axios from "../api";

function Plans() {

    const [plans, setPlans] = useState([]);

    useEffect(() => {

        const fetchPlans = async () => {

            try {

                const res =
                    await axios.get("/plans");

                setPlans(res.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchPlans();

    }, []);

    const subscribePlan = async (planId) => {

        try {

            const token =
                localStorage.getItem("token");

            await axios.post(
                "/subscriptions",
                {
                    planId
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            alert(
                "Subscription Successful"
            );

        } catch (error) {

            console.log(error);

            alert(
                "Subscription Failed"
            );

        }

    };

    return (

        <div className="page">

            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px"
                }}
            >

                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "10px"
                    }}
                >
                    Subscription Plans
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        color: "#94a3b8",
                        marginBottom: "50px"
                    }}
                >
                    Choose the perfect plan for your business
                </p>

                <div
                    className="plan-grid"
                    style={{
                        maxWidth: "450px",
                        margin: "0 auto"
                    }}
                >

                    {plans.map((plan) => (

                        <div
                            key={plan._id}
                            className="plan-card"
                        >

                            {plan.name === "Pro" && (

                                <span
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#f59e0b,#fbbf24)",
                                        color: "black",
                                        padding: "6px 14px",
                                        borderRadius: "20px",
                                        fontSize: "12px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    MOST POPULAR
                                </span>

                            )}

                            <h2
                                style={{
                                    marginTop: "20px"
                                }}
                            >
                                {plan.name}
                            </h2>

                            <div className="plan-price">
                                ${plan.price}
                            </div>

                            <ul>

                                {plan.features.map(
                                    (feature, index) => (

                                        <li key={index}>
                                            ✅ {feature}
                                        </li>

                                    )
                                )}

                            </ul>

                            <button
                                onClick={() =>
                                    subscribePlan(plan._id)
                                }
                            >
                                Subscribe
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );
}

export default Plans;