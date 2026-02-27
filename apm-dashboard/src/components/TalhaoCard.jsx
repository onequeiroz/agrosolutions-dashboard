import { useEffect, useState } from "react";
import { getSensorHistory } from "../services/api";
import { POLLING_INTERVALS } from "../config/pollingConfig";
import SensorChart from "./SensorChart";

const TalhaoCard = ({ talhao, overallStatus }) => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, POLLING_INTERVALS.METRICS);

    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    const data = await getSensorHistory(talhao.id);
    setSensorData(data);
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h3 style={{ margin: 0 }}>{talhao.nome}</h3>
      </div>

      <SensorChart data={sensorData} />
    </div>
  );
};

export default TalhaoCard;
