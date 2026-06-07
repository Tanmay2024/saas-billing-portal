import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Plans from "./pages/Plans";
import MySubscription
  from "./pages/MySubscription";
import AdminDashboard
  from "./pages/AdminDashboard";
import AdminPlans from "./pages/AdminPlans";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/plans"
          element={<Plans />}
        />

        <Route
          path="/subscription"
          element={<MySubscription />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin-plans"
          element={<AdminPlans />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;