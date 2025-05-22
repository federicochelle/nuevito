function convertir() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  let resultado;

  if (isNaN(temp)) {
    resultado = "Por favor, ingresa un número válido.";
  } else {
    if (from === to) {
      resultado = temp;
    } else {
      // Primero convertimos a Celsius
      let tempCelsius;
      switch (from) {
        case "celsius":
          tempCelsius = temp;
          break;
        case "fahrenheit":
          tempCelsius = (temp - 32) * 5 / 9;
          break;
        case "kelvin":
          tempCelsius = temp - 273.15;
          break;
      }

      // Luego convertimos de Celsius a la unidad deseada
      switch (to) {
        case "celsius":
          resultado = tempCelsius;
          break;
        case "fahrenheit":
          resultado = (tempCelsius * 9 / 5) + 32;
          break;
        case "kelvin":
          resultado = tempCelsius + 273.15;
          break;
      }

      resultado = resultado.toFixed(2);
    }
  }

  document.getElementById("resultado").textContent = resultado;
}