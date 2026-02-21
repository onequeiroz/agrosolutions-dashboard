import { useEffect, useState } from "react";
import { getSensorHistory } from "../services/api";
import SensorChart from "./SensorChart";

const TalhaoCard = ({ talhao }) => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getSensorHistory(talhao.id);
    setSensorData(data);
  };

  const getStatusColor = () => {
    switch (talhao.status) {
      case "Normal":
        return "#27ae60";
      case "Alerta de Seca":
        return "#f39c12";
      case "Risco de Praga":
        return "#e74c3c";
      default:
        return "#7f8c8d";
    }
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
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h3 style={{ margin: 0 }}>{talhao.nome}</h3>

        <span
          style={{
            background: getStatusColor(),
            color: "white",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {talhao.status}
        </span>
      </div>

      <SensorChart data={sensorData} />
    </div>
  );
};

export default TalhaoCard;
