// Gera histórico de 24 horas
const generateSensorHistory = () => {
  const data = [];

  for (let i = 0; i < 24; i++) {
    data.push({
      timestamp: `${i}:00`,
      soilMoisture: Math.floor(Math.random() * 60) + 20,
      temperature: Math.floor(Math.random() * 15) + 20,
      precipitation: Math.floor(Math.random() * 10),
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
    status: "Normal",
    sensores: generateSensorHistory(),
  },
  {
    id: 2,
    nome: "Talhão Sul",
    status: "Alerta de Seca",
    sensores: generateSensorHistory(),
  },
  {
    id: 3,
    nome: "Talhão Leste",
    status: "Normal",
    sensores: generateSensorHistory(),
  },
  {
    id: 4,
    nome: "Talhão Oeste",
    status: "Risco de Praga",
    sensores: generateSensorHistory(),
  },
  {
    id: 5,
    nome: "Talhão Central",
    status: "Normal",
    sensores: generateSensorHistory(),
  },
];

export const alerts = [
  {
    id: 1,
    tipo: "Alerta de Seca",
    mensagem: "Umidade abaixo de 30% por 24h",
    talhaoNome: "Talhão Sul",
  },
  {
    id: 2,
    tipo: "Risco de Praga",
    mensagem: "Alta umidade combinada com alta temperatura",
    talhaoNome: "Talhão Oeste",
  },
];
