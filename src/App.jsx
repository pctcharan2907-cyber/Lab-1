import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import StatusPanel from "./components/StatusPanel";
import "./App.css";

export default function App() {
  const [profile, setProfile] = useState({
    name: " Charan",
    role: "Web Developer(Chrome)",
    status: "Active"
  });

  const toggleStatus = () => {
    setProfile((prev) => ({
      ...prev,
      status: prev.status === "Active" ? "Inactive" : "Active"
    }));
  };

  const changeRole = () => {
    setProfile((prev) => ({
      ...prev,
      role:
        prev.role === "Frontend Engineer"
          ? "UI Architect"
          : "Frontend Engineer"
    }));
  };

  return (
    <div className="app-container">
      <h1 className="dashboard-title">Profile Dashboard</h1>

      <ProfileCard profile={profile} />

      <StatusPanel
        status={profile.status}
        toggleStatus={toggleStatus}
        changeRole={changeRole}
      />
    </div>
  );
}
