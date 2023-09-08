document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert-button");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperatureInput = parseFloat(document.getElementById("temperature").value);
        const conversionType = document.querySelector('input[name="conversion"]:checked').value;
        let result;

        if (isNaN(temperatureInput)) {
            resultElement.textContent = "Please enter a valid temperature.";
            return;
        }

        if (conversionType === "celsius-to-fahrenheit") {
            result = (temperatureInput * 9/5) + 32;
            resultElement.textContent = `${temperatureInput}°C is equal to ${result}°F`;
        } else {
            result = (temperatureInput - 32) * 5/9;
            resultElement.textContent = `${temperatureInput}°F is equal to ${result}°C`;
        }
    });
});
