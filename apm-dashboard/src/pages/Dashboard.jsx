import { useEffect, useState } from "react";
import { getTalhoes, getAlerts, getSensorHistory } from "../services/api";
import { POLLING_INTERVALS } from "../config/pollingConfig";
import TalhaoCard from "../components/TalhaoCard";
import AlertsPanel from "../components/AlertsPanel";
import Header from "../components/Header";

const Dashboard = () => {
  const [talhoes, setTalhoes] = useState([]);
  const [alerts, setAlerts] = useState([]);

  /**
   * Carrega os talhões (apenas 1x)
   */
  useEffect(() => {
    loadTalhoes();
  }, []);

  const loadTalhoes = async () => {
    const data = await getTalhoes();
    setTalhoes(data);
  };

  /**
   * Polling de métricas (só depois de ter talhões)
   */
  useEffect(() => {
    if (talhoes.length === 0) return;

    loadMetricas();

    const interval = setInterval(() => {
      loadMetricas();
    }, POLLING_INTERVALS.METRICS);

    return () => clearInterval(interval);
  }, [talhoes.length]);

  const loadMetricas = async () => {
    if (!Array.isArray(talhoes) || talhoes.length === 0) return;

    const updatedTalhoes = await Promise.all(
      talhoes.map(async (t) => {
        const sensorData = await getSensorHistory(t.sensorId);
        return { ...t, sensorData };
      }),
    );

    setTalhoes(updatedTalhoes);
  };

  /**
   * Polling de alertas
   */
  useEffect(() => {
    if (talhoes.length === 0) return;

    loadAlerts();

    const interval = setInterval(() => {
      loadAlerts();
    }, POLLING_INTERVALS.ALERTS);

    return () => clearInterval(interval);
  }, [talhoes.length]);

  const loadAlerts = async () => {
    if (!Array.isArray(talhoes) || talhoes.length === 0) return;

    const responses = await Promise.all(
      talhoes.map((t) => getAlerts(t.sensorId)),
    );

    // Caso cada sensor retorne uma lista de alertas
    const flattenedAlerts = responses.flat();

    setAlerts(flattenedAlerts);
  };

  // Status Geral da Propriedade
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
          <AlertsPanel alerts={alerts} talhoes={talhoes} />
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
