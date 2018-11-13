export enum SensorType {
  Light = 257,
  Humidity = 2305,
  Temperature = 2306,
  Sound = 20225,
  CO2 = 26369,
  OccupanceERS = 28417, // to check whether the workplace is free or occupied
  // PresenceMobile = 4353, // derived from beacon presence
  // InfraRed = 10241, // outdated, is now Occupancy
  // Sound_Max = 20226,
  // Movement = 22017,
  // Movement_Filtered = 22018, // calculated, not a physical sensor
  // Movement_Presence = 22019, // calculated, not a physical sensor
  // CO2_Filtered = 26368, // calculated, not a physical sensor
  // VOC = 27649,
  // CO2_Equivalent = 27650,
  // Temperature_Preset = 27393, // outdated
  // BatteryERS = 28161,
  // MovementERS = 28673,
  // MovementERS_Filtered = 28674, // calculated, not a physical sensor
  // MovementERS_Presence = 28675, // calculated, not a physical sensor
  // OccupanceERS_Limited = 28418, // calculated, not a physical sensor
}
