let $ = document;

function addToCalculator(value) {
    $.getElementById('display').value += value;
}

function finilize() {
    $.getElementById('display').value = eval(document.getElementById('display').value)
}

function reset() {
    $.getElementById('display').value = ''
}
