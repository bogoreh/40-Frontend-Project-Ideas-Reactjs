export const devicesData = [
  {
    id: 1,
    name: "Living Room Thermostat",
    type: "thermostat",
    status: "online",
    temperature: 22.5,
    humidity: 45,
    lastUpdate: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "Security Camera",
    type: "camera",
    status: "online",
    motionDetected: false,
    lastUpdate: "2024-01-15T10:29:00Z"
  },
  {
    id: 3,
    name: "Smart Light",
    type: "light",
    status: "offline",
    isOn: false,
    brightness: 0,
    lastUpdate: "2024-01-15T09:15:00Z"
  },
  {
    id: 4,
    name: "Smart Lock",
    type: "lock",
    status: "online",
    isLocked: true,
    battery: 85,
    lastUpdate: "2024-01-15T10:25:00Z"
  },
  {
    id: 5,
    name: "Air Quality Sensor",
    type: "sensor",
    status: "online",
    airQuality: "good",
    pm25: 12,
    co2: 450,
    lastUpdate: "2024-01-15T10:28:00Z"
  },
  {
    id: 6,
    name: "Smart Plug",
    type: "plug",
    status: "online",
    isOn: true,
    powerConsumption: 45.2,
    lastUpdate: "2024-01-15T10:27:00Z"
  }
];

export const sensorData = {
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  temperature: [21, 20.5, 22, 23.5, 24, 22.5],
  humidity: [40, 42, 45, 43, 41, 45],
  power: [35, 30, 40, 45, 50, 45]
};