let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");
let applyButtonElement = document.getElementById("applyButton");

function applyStylesToButton(){
    let bgColorValue = bgColorInputElement.value;
    let fontColorValue = fontColorInputElement.value;
    let fontSizeValue = fontSizeInputElement.value + "px";
    let fontWeightValue = fontWeightInputElement.value;
    let paddingValue = paddingInputElement.value + "px";
    let borderRadiusValue = borderRadiusInputElement.value + "px";

    customButtonElement.style.backgroundColor = bgColorValue;
    customButtonElement.style.color = fontColorValue;
    customButtonElement.style.fontSize = fontSizeValue;
    customButtonElement.style.fontWeight = fontWeightValue;
    customButtonElement.style.padding = paddingValue;
    customButtonElement.style.borderRadius = borderRadiusValue;
}
applyButtonElement.addEventListener("click",applyStylesToButton);