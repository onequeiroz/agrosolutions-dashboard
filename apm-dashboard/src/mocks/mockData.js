// Gera histórico de 24 horas
const generateSensorHistory = () => {
  const data = [];

  for (let i = 0; i < 24; i++) {
    data.push({
      timestamp: `${i}:00`,
      humidity: Math.floor(Math.random() * 60) + 20,
      temperature: Math.floor(Math.random() * 15) + 20,
    });
  }

  return data;
};

export const property = {
  id: 1,
  nome: "Fazenda Boa Vista",
};

export const talhoes = [
  {
    id: 1,
    nome: "Talhão Norte",
    sensor: generateSensorHistory(),
  },
  {
    id: 2,
    nome: "Talhão Sul",
    sensor: generateSensorHistory(),
  },
  {
    id: 3,
    nome: "Talhão Leste",
    sensor: generateSensorHistory(),
  },
  {
    id: 4,
    nome: "Talhão Oeste",
    sensor: generateSensorHistory(),
  },
  {
    id: 5,
    nome: "Talhão Central",
    sensor: generateSensorHistory(),
  },
];

export const alerts = [
  {
    id: 1,
    tipo: 1,
    talhaoNome: "Talhão Norte",
    valorMedio: 46.84,
    limiteConfigurado: 35,
  },
  {
    id: 2,
    tipo: 2,
    talhaoNome: "Talhão Leste",
    valorMedio: 2.04,
    limiteConfigurado: 60,
  },
  {
    id: 3,
    tipo: 3,
    talhaoNome: "Talhão Sul",
    valorMedio: 46.84,
    limiteConfigurado: 35,
  },
  {
    id: 4,
    tipo: 4,
    talhaoNome: "Talhão Oeste",
    valorMedio: 2.04,
    limiteConfigurado: 60,
  },
];
