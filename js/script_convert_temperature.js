document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("btn-convrt");
  const resultElement = document.getElementById("show-result");
  const Radio = document.querySelectorAll('input[name="radio"]');
  const UnitText = document.getElementById("Unit");
  const UnitResult = document.getElementById("Unit2");
  const Temp = document.getElementById("temp");
  

 console.log (temp.value)
  function tempconvert() {
    const Temp1 = parseFloat(Temp.value);
    let result ;
    if (isNaN(Temp1)) {
      resultElement.textContent = "Please enter a valid temperature.";
      return;
    } else if (Radio[0].checked) {
      result = (Temp1 * 9) / 5 + 32;
    } else {
      result = ((Temp1 - 32) * 5) / 9;
    }
    resultElement.textContent = result;
    }
  function changeunit() {
    if (Radio[0].checked) {
      UnitText.textContent = "เซลเซียส";
      UnitResult.textContent = "ฟาเรนไฮต์";
    } else {
      UnitText.textContent = "ฟาเรนไฮต์";
      UnitResult.textContent = "เซลเซียส";
    }
    }

  Radio.forEach((option) => option.addEventListener("change", changeunit));
  convertButton.addEventListener("click", tempconvert);
});
