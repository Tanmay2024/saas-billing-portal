import { useEffect, useState } from "react";
import axios from "../api";
import Sidebar from "../components/Sidebar";

function AdminPlans() {

    const [plans, setPlans] =
        useState([]);

    const [name, setName] =
        useState("");

    const [price, setPrice] =
        useState("");

    const [features, setFeatures] =
        useState("");

    const token =
        localStorage.getItem("token");

    const fetchPlans = async () => {

        try {

            const res =
                await axios.get(
                    "/admin/plans",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            setPlans(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchPlans();

    }, []);

    const createPlan = async () => {

        try {

            await axios.post(
                "/admin/plans",
                {
                    name,
                    price,
                    features:
                        features.split(",")
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            setName("");
            setPrice("");
            setFeatures("");

            fetchPlans();

        } catch (error) {

            console.log(error);

        }

    };

    const deletePlan =
        async (id) => {

            try {

                await axios.delete(
                    `/admin/plans/${id}`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                fetchPlans();

            } catch (error) {

                console.log("FULL ERROR:", error);

                console.log("RESPONSE:", error.response);

                console.log("DATA:", error.response?.data);

            }

        };

    return (

        <>
            <Sidebar />

            <div className="main-content">

                <h1>
                    Manage Plans
                </h1>

                <div
                    className="card"
                    style={{
                        marginTop: "20px"
                    }}
                >

                    <input
                        placeholder="Plan Name"
                        value={name}
                        onChange={(e) =>
                            setName(
                                e.target.value
                            )
                        }
                    />

                    <input
                        placeholder="Price"
                        value={price}
                        onChange={(e) =>
                            setPrice(
                                e.target.value
                            )
                        }
                    />

                    <input
                        placeholder=
                        "Features separated by comma"
                        value={features}
                        onChange={(e) =>
                            setFeatures(
                                e.target.value
                            )
                        }
                    />

                    <button
                        onClick={
                            createPlan
                        }
                    >
                        Add Plan
                    </button>

                </div>

                <div
                    className="dashboard-cards"
                    style={{
                        marginTop: "30px"
                    }}
                >

                    {plans.map((plan) => (

                        <div
                            key={plan._id}
                            className="plan-card"
                        >

                            <h2>
                                {plan.name}
                            </h2>

                            <div
                                className=
                                "plan-price"
                            >
                                $
                                {plan.price}
                            </div>

                            <ul>

                                {plan.features.map(
                                    (
                                        feature,
                                        index
                                    ) => (

                                        <li
                                            key={index}
                                        >
                                            {feature}
                                        </li>

                                    )
                                )}

                            </ul>

                            <button
                                onClick={() => {

                                    if (
                                        window.confirm(
                                            "Are you sure you want to delete this plan?"
                                        )
                                    ) {

                                        deletePlan(
                                            plan._id
                                        );

                                    }

                                }}
                            >
                                Delete
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </>

    );

}

export default AdminPlans;