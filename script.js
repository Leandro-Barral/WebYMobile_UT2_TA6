function convertToCelsius(temp){
    let result = (temp-32)*(5/9);
    result = Math.round(result*10)/10;
    console.log(result);
}

function convertToFahrenheit(temp){
    let result = temp*(9/5)+32;
    result = Math.round(result*10)/10;
    console.log(result);
}


convertToCelsius(100);
convertToFahrenheit(37.8);