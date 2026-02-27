import { useEffect, useState } from "react";
import { getTalhoes, getAlerts } from "../services/api";
import TalhaoCard from "../components/TalhaoCard";
import AlertsPanel from "../components/AlertsPanel";
import Header from "../components/Header";

const Dashboard = () => {
  const [talhoes, setTalhoes] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    loadTalhoes();
    loadAlerts();
  }, []);

  const loadTalhoes = async () => {
    const data = await getTalhoes();
    setTalhoes(data);
  };

  const loadAlerts = async () => {
    const data = await getAlerts();
    setAlerts(data);
  };

  // Simulação de status geral
  const calculateOverallStatus = () =>
    alerts.length > 0 ? "Alerta" : "Normal";

  return (
    <>
      <Header
        propertyName="Fazenda Boa Vista"
        overallStatus={calculateOverallStatus()}
      />

      <div className="dashboard-container content-with-header">
        <div className="dashboard-title">Monitoramento em Tempo Real</div>

        <div className="alerts-wrapper">
          <AlertsPanel overallStatus={calculateOverallStatus()} />
        </div>

        <div className="talhoes-grid">
          {talhoes.map((t) => (
            <TalhaoCard key={t.id} talhao={t} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
