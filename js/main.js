function plusMinus() {
    var currentValue = document.calc.result.value;
    if (currentValue.indexOf("-") === 0) {
        document.calc.result.value = document.calc.result.value.substring(1);
    } else {
        document.calc.result.value = "-" + document.calc.result.value;
    }
}
