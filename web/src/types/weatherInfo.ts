export interface IWeatherInfo {
  min: Array<ITemperatureInfo>;
  max: Array<ITemperatureInfo>;
}

interface ITemperatureInfo {
  endTime: string;
  startTime: string;
  parameter: {
    parameterName: string;
    parameterUnit: string;
  };
}
