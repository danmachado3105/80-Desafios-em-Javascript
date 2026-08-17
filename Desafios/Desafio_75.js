// Desafio 75 - Conversor de temperatura (Celsius para Fahrenheit)

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const temperaturaCelsius = 28;
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

console.log(`${temperaturaCelsius}°C equivalem a ${temperaturaFahrenheit}°F.`);