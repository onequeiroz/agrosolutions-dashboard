import { useEffect, useState } from "react";
import { getTalhoes } from "../services/api";
import TalhaoCard from "../components/TalhaoCard";
import AlertsPanel from "../components/AlertsPanel";
import Header from "../components/Header";

const Dashboard = () => {
  const [talhoes, setTalhoes] = useState([]);

  useEffect(() => {
    loadTalhoes();
  }, []);

  const loadTalhoes = async () => {
    const data = await getTalhoes();
    setTalhoes(data);
  };

  // Simulação de status geral
  const calculateOverallStatus = () => {
    if (talhoes.some((t) => t.status === "Risco de Praga")) return "Crítico";

    if (talhoes.some((t) => t.status === "Alerta de Seca")) return "Alerta";

    return "Normal";
  };

  return (
    <>
      <Header
        propertyName="Fazenda Boa Vista"
        overallStatus={calculateOverallStatus()}
      />

      <div className="dashboard-container content-with-header">
        <div className="dashboard-title">Monitoramento em Tempo Real</div>

        <div className="alerts-wrapper">
          <AlertsPanel />
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
