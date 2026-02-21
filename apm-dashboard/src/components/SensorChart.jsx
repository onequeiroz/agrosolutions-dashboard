import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SensorChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="soilMoisture" name="Umidade (%)" />
        <Line type="monotone" dataKey="temperature" name="Temperatura (°C)" />
        <Line
          type="monotone"
          dataKey="precipitation"
          name="Precipitação (mm)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SensorChart;
