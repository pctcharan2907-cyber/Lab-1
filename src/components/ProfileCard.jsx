import "./ProfileCard.css";
import profileImage from "../assets/image.png"; // if using local image

export default function ProfileCard({ profile }) {
  return (
    <div className="card">
      <div className="avatar">
        <img src={profileImage} alt="Profile" />
      </div>

      <h2>{profile.name}</h2>
      <p className="role">{profile.role}</p>

      <span
        className={
          profile.status === "Active"
            ? "status active"
            : "status inactive"
        }
      >
        {profile.status}
      </span>
    </div>
  );
}
