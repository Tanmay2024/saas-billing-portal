import { useEffect, useState } from "react";
import axios from "../api";

function MySubscription() {

    const [subscription, setSubscription] =
        useState(null);

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

    if (!subscription) {

        return (

            <div className="page">

                <div className="card">

                    <h1>
                        Loading Subscription...
                    </h1>

                </div>

            </div>

        );

    }

    const cancelSubscription = async () => {

        try {

            const token =
                localStorage.getItem("token");

            await axios.put(
                "/subscriptions/cancel",
                {},
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            alert(
                "Subscription Cancelled"
            );

            window.location.reload();

        } catch (error) {

            console.log(error);

        }

    };
    return (

        <div className="page">

            <div
                className="card"
                style={{
                    maxWidth: "600px",
                    width: "100%",
                    textAlign: "center"
                }}
            >

                <h1>
                    My Subscription
                </h1>

                <div
                    className="plan-card"
                    style={{
                        marginTop: "20px"
                    }}
                >

                    <h2>
                        {subscription.plan.name}
                    </h2>

                    <div className="plan-price">
                        ${subscription.plan.price}
                    </div>

                    <ul>

                        {subscription.plan.features.map(
                            (feature, index) => (

                                <li key={index}>
                                    ✅ {feature}
                                </li>

                            )
                        )}

                    </ul>

                    <div
                        style={{
                            marginTop: "25px"
                        }}
                    >

                        <span
                            style={{
                                padding: "10px 18px",
                                borderRadius: "20px",
                                background:
                                    subscription.status === "active"
                                        ? "#22c55e"
                                        : "#ef4444",
                                color: "white",
                                fontWeight: "bold"
                            }}
                        >
                            {subscription.status.toUpperCase()}
                        </span>

                    </div>

                    {
                        subscription.status === "active" && (

                            <button
                                style={{
                                    marginTop: "25px"
                                }}
                                onClick={cancelSubscription}
                            >
                                Cancel Subscription
                            </button>

                        )
                    }

                </div>

            </div>

        </div>

    );
}

export default MySubscription;