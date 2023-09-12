const resultado = document.getElementById("imc_input");
const imc_button = document.getElementById("imc_button");

imc_button.addEventListener("click", function() {
    calculate_imc();
});

function calculate_imc() {
    const img_default = document.getElementById("div-img-default")
    img_default.style.display = "None"
    const new_img = document.getElementById("div-img")
    new_img.style.display = "block"
    const altura = parseFloat(document.getElementById("altura_input").value);
    const peso = parseFloat(document.getElementById("peso_input").value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.value = "Por favor, ingresa valores válidos para altura y peso.";
    } else {
        const imc = peso / (altura ** 2);
        resultado.value = imc.toFixed(2);
    }
}
