import axios from "axios";
import { talhoes, alerts, responseMetrics } from "../mocks/mockData";

const fakeDelay = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 500));

export const getTalhoes = async () => {
  return fakeDelay(talhoes);
};

const api = axios.create({
  baseURL: "http://localhost:30080/api/monitoramento/",
});

// export const getSensorHistory = async (sensorId) => {
//   const response = await api.get(`${sensorId}/metricas`);
//   return response.data;
// };

// export const getAlerts = async (sensorId) => {
//   const response = await api.get(`${sensorId}/alertas`);
//   return response.data;
// };

// export const getSensorHistory = async (sensorId) => {
//   const talhao = talhoes.find((t) => t.sensorId === sensorId);
//   return fakeDelay(talhao.sensor);
// };

export const getSensorHistory = async (sensorId) => {
  return responseMetrics.data;
};

export const getAlerts = async () => {
  return alerts.data;
};
