import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const res = await axios.post(
        "/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert("Registration Successful");

      console.log(res.data);

    } catch (err) {

      alert("Registration Failed");

      console.log(err);

    }

  };

  return (
    <div className="page">

      <div className="card">

        <h1>Register</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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

        <button
          onClick={handleRegister}
        >
          Register
        </button>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "white"
          }}
        >
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{
              color: "#fbbf24",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Register;