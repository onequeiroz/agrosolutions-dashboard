// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// export const getSensorHistory = async (talhaoId) => {
//   const response = await api.get(`/talhoes/${talhaoId}/sensores`);
//   return response.data;
// };

// export const getAlerts = async () => {
//   const response = await api.get(`/alerts`);
//   return response.data;
// };

import { talhoes, alerts } from "../mocks/mockData";

const fakeDelay = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 500));

export const getTalhoes = async () => {
  return fakeDelay(talhoes);
};

export const getSensorHistory = async (talhaoId) => {
  const talhao = talhoes.find((t) => t.id === talhaoId);
  return fakeDelay(talhao.sensores);
};

export const getAlerts = async () => {
  return fakeDelay(alerts);
};
