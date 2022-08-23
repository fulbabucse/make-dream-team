// get input value from any input form
function getInputValue(elementId) {
    const getInputElement = document.getElementById(elementId);
    const getInputString = getInputElement.value;
    const getInputValue = parseInt(getInputString);
    return getInputValue;
}

// get text element from any innerText
function getTextValue(elementId) {
    const getTextElement = document.getElementById(elementId);
    const getTextString = getTextElement.innerText;
    const getInputValue = parseInt(getTextString);
    return getInputValue;
}

// set element to new element
function setElement(elementId, newElement) {
    const setElement = document.getElementById(elementId);
    setElement.innerText = newElement;
}

