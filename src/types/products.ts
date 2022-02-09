export enum ConnectionEnumType {
  CONNECTED = 'connected',
  DISCONECTED = 'disconected',
  POOR_CONNECTION = 'poorConnection'
}

export enum DiviceEnumType {
  BULB = 'bulb',
  OUTLET = 'outlet',
  TEMPERATURE_SENSOR = 'temperatureSensor'
}

export interface SmartDevice {
  type: DiviceEnumType; // 'bulb', 'outlet' or 'temperatureSensor';
  id: string;
  name: string;
  connectionState: ConnectionEnumType; // 'connected', 'disconnected' or 'poorConnection'
}

export interface SmartBulb {
  type: DiviceEnumType.BULB;
  id: string;
  name: string;
  connectionState: ConnectionEnumType; // 'connected', 'disconnected' or 'poorConnection'
  isTurnedOn: boolean;
  brightness: number; // <0, 100>
  color: string; // in the CSS formats
}

export interface SmartOutlet {
  type: DiviceEnumType.OUTLET;
  id: string;
  name: string;
  connectionState: ConnectionEnumType; // 'connected', 'disconnected' or 'poorConnection'
  isTurnedOn: boolean;
  powerConsumption: number; // in watts
}

export interface SmartTemperatureSensor {
  type: DiviceEnumType.TEMPERATURE_SENSOR;
  id: string;
  name: string;
  connectionState: ConnectionEnumType; // 'connected', 'disconnected' or 'poorConnection'
  temperature: number; // in Celsius
}
