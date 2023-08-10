const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const IMC = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let description = "";

  value.classList.add("attention");

  document.getElementById("infos").classList.remove("hidden");

  if (IMC < 18.5) {
    description = `be careful, you are underweight!`;
  } else if (IMC >= 18.5 && IMC <= 25) {
    description = `you are at the ideal weight!`;
    value.classList.remove("attention");
    value.classList.add("normal");
  } else if (IMC > 25 && IMC <= 30) {
    description = `you are overweight!`;
  } else if (IMC > 30 && IMC <= 35) {
    description = `you are moderately obese!`;
  } else if (IMC > 35 && IMC <= 40) {
    description = `Careful! You are severely obese!`;
  } else {
    description = `you are morbidly obese!`;
  }

  value.textContent = IMC.replace(".", ",");
  document.getElementById("description").textContent = description;
});
