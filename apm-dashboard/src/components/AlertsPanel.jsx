import { ALERT_TYPE_LABELS } from "../utils/alertMapper";

const AlertsPanel = ({ alerts, talhoes }) => {
  // ===============================
  // Descobrir tipos únicos de alerta
  // ===============================
  const uniqueAlertTypes = [...new Set(alerts.map((alert) => alert.tipo))];

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

      {uniqueAlertTypes.length === 0 && (
        <p style={{ textAlign: "center" }}>Nenhum alerta ativo.</p>
      )}

      {uniqueAlertTypes.map((tipo) => {
        const talhaoNames = talhoes.map((t) => t.nome).join(", ");

        return (
          <div
            key={tipo}
            style={{
              borderLeft: "5px solid #e74c3c",
              background: "#fdecea",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "6px",
            }}
          >
            <strong>{ALERT_TYPE_LABELS[tipo]}</strong>
            <p style={{ margin: "5px 0" }}>{talhaoNames}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AlertsPanel;
