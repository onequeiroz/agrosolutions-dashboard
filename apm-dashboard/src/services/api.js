// import axios from "axios";
import { talhoes, alerts } from "../mocks/mockData";

// const api = axios.create({
//   baseURL: "http://localhost:30080/api/monitoramento/",
// });

// export const getSensorHistory = async (sensorId) => {
//   const response = await api.get(`${sensorId}/metricas`);
//   return response.data;
// };

// export const getAlerts = async () => {
//   const response = await api.get(`${sensorId}/alertas`);
//   return response.data;
// };

const fakeDelay = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 500));

export const getTalhoes = async () => {
  return fakeDelay(talhoes);
};

export const getSensorHistory = async (sensorId) => {
  const talhao = talhoes.find((t) => t.id === sensorId);
  return fakeDelay(talhao.sensor);
};

export const getAlerts = async () => {
  return fakeDelay(alerts);
};
