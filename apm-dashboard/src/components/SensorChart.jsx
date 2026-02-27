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
        <Line
          type="monotone"
          dataKey="humidity"
          name="Umidade (%)"
          stroke="#1E88E5"
          strokeWidth={3}
          dot={false}
        />

        <Line
          type="monotone"
          dataKey="temperature"
          name="Temperatura (°C)"
          stroke="#E53935"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SensorChart;
