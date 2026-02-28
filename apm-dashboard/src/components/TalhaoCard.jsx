import SensorChart from "./SensorChart";

const TalhaoCard = ({ talhao }) => {
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

      <SensorChart data={talhao.sensorData} />
    </div>
  );
};

export default TalhaoCard;
