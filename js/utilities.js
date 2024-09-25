function getHtmlElementId(id){
    const elId=document.getElementById(id);
    return elId;
}

function getInputValueById(id){
    const inputValue=document.getElementById(id).value;
    // convert the input value string to number
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    // convert the text string to number
    const textNumber=parseFloat(textValue);
    return textNumber;

}