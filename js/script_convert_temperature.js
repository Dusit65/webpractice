
 showSum = document.getElementById("show-sum");
 btnCancel = document.getElementById("btn-cancel")

 num1 = document.getElementById("num1")


/*btnSum.addEventListener( "click" , function () {
    //alert("Congrats")    
    let sum = parseFloat(num1.value) * parseFloat(num2.value)
    showSum.innerHTML =  sum 
} )
*/

/*var calculate = document.getElementById("btn-convrt");
        calculate.onclick = function () {
            var num1 = Number(document.getElementById("num1").value);
            v
            if (document.getElementById("num1").checked) {
                alert("Congrats")
               var result = num1 * 9 / 5 + 32
                document.getElementById("show-sum").innerHTML = result;
                
            } else if (document.getElementById("num1").checked) {
                var result = (num1 - 32) * 5 / 9
                document.getElementById("show-sum").innerHTML = result;
            }
        }
        
        btnCancel.addEventListener( "click" , function () {
            num1.value =""
            num2.value = ""
            showSum.innerHTML = "?????"
        })
        */

        document.addEventListener("DOMContentLoaded", function () {
            const convertButton = document.getElementById("btn-convrt");
            const resultElement = document.getElementById("show-result");
        
            convertButton.addEventListener("click", function () {
                const Temp = parseFloat(document.getElementById("temp").value);
                const conversionType = document.querySelector('input[name="radio1"]:checked').value;
                let result;
        
                if (isNaN(temperatureInput)) {
                    resultElement.textContent = "Please enter a valid temperature.";
                    return;
                }
        
                if (conversionType === "CtoF") {
                    result = (Temp * 9/5) + 32;
                    resultElement.textContent = `${Temp}°C is equal to ${result}°F`;
                } else {
                    result = (Temp - 32) * 5/9;
                    resultElement.textContent = `${Temp}°F is equal to ${result}°C`;
                }
            });
        });