function transformarTexto() {

    const inputText = document.getElementById("idTexto");
    const inputTextValue = inputText.value;

    const selected = document.querySelector('input[name="radiobutton"]:checked');

    if (selected) {

        if (selected.value == "maiusculo") {
            alert(inputTextValue.toUpperCase());
        } else if (selected.value == "minusculo") {
            alert(inputTextValue.toLowerCase());
        }
        
    } else {
        alert("Selecione uma opção.");
    }

}

function limparTexto() {

    document.getElementById("idTexto").value = "";

    const radios = document.querySelectorAll('input[name="radiobutton"]');
    radios.forEach(radio => radio.checked = false);

}