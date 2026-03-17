import "./StatusPanel.css";

export default function StatusPanel({
  status,
  toggleStatus,
  changeRole
}) {
  return (
    <div className="panel">
      <h3>Status Controls</h3>
      <button onClick={toggleStatus} className="btn primary">
        Toggle Status
      </button>
      <button onClick={changeRole} className="btn secondary">
        Change Role
      </button>
      <p className="info">
        Current Status: <strong>{status}</strong>
      </p>
    </div>
  );
}
