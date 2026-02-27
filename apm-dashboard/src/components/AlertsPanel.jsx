import { useEffect, useState } from "react";
import { getAlerts } from "../services/api";
import { ALERT_TYPE_LABELS } from "../utils/alertMapper";
import { POLLING_INTERVALS } from "../config/pollingConfig";

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    loadAlerts();

    const interval = setInterval(() => {
      loadAlerts();
    }, POLLING_INTERVALS.ALERTS);

    return () => clearInterval(interval);
  }, []);

  const loadAlerts = async () => {
    const data = await getAlerts();
    setAlerts(data);
  };

  const getAlertMessage = (alertType) => ALERT_TYPE_LABELS[alertType];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        background: "#ffffff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "20px",
          textAlign: "center",
          color: "#c0392b",
        }}
      >
        🚨 Alertas Críticos
      </h2>

      {alerts.length === 0 && (
        <p style={{ textAlign: "center" }}>Nenhum alerta ativo.</p>
      )}

      {alerts.map((alert) => (
        <div
          key={alert.id}
          style={{
            borderLeft: "5px solid #e74c3c",
            background: "#fdecea",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "6px",
          }}
        >
          <strong>{getAlertMessage(alert.tipo)}</strong>
          <p style={{ margin: "5px 0" }}>{}</p>
          <small>{alert.talhaoNome}</small>
        </div>
      ))}
    </div>
  );
};

export default AlertsPanel;
