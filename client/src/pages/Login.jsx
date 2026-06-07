import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Credentials");

      console.log(error);

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

        {/* Hero Section */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >

          <h1
            style={{
              fontSize: "4rem",
              color: "#fbbf24",
              marginBottom: "10px"
            }}
          >
            ScholarX
          </h1>

          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "15px"
            }}
          >
            SaaS Billing Portal
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
              maxWidth: "700px",
              margin: "auto"
            }}
          >
            Manage subscriptions, billing plans,
            users and memberships from one
            powerful dashboard.
          </p>

        </div>

        {/* Features */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "40px"
          }}
        >

          <div className="feature-badge">
            ✓ JWT Authentication
          </div>

          <div className="feature-badge">
            ✓ Subscription Management
          </div>

          <div className="feature-badge">
            ✓ Admin Dashboard
          </div>

          <div className="feature-badge">
            ✓ MongoDB Database
          </div>

        </div>

        {/* Login Card */}

        <div className="card">

          <h1>Login</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button onClick={handleLogin}>
            Login
          </button>

          <p
            style={{
              marginTop: "20px",
              textAlign: "center"
            }}
          >
            Don't have an account?{" "}
            <span
              onClick={() =>
                navigate("/register")
              }
              style={{
                color: "#fbbf24",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Register
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;