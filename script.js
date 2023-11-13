document.addEventListener('DOMContentLoaded', function() {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const kelvinInput = document.getElementById('kelvin');
  celsiusInput.addEventListener('input', convertCelsius);
  fahrenheitInput.addEventListener('input', convertFahrenheit);
  kelvinInput.addEventListener('input', convertKelvin);

  function convertCelsius() {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    const kelvinValue = celsiusToKelvin(celsiusValue);

    fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
    kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
  }

  function convertFahrenheit() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
    const kelvinValue = fahrenheitToKelvin(fahrenheitValue);

    celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
    kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
  }

  function convertKelvin() {
    const kelvinValue = parseFloat(kelvinInput.value);
    const celsiusValue = kelvinToCelsius(kelvinValue);
    const fahrenheitValue = kelvinToFahrenheit(kelvinValue);

    celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
    fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
  }

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
  }

  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
  }
});
