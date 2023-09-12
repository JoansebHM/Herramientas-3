const resultado = document.getElementById("imc_input");
const imc_button = document.getElementById("imc_button");

imc_button.addEventListener("click", function() {
    calculate_imc();
});

function calculate_imc() {
    const img_default = document.getElementById("div-img-default")
    const new_img = document.getElementById("div-img")
    const altura = parseFloat(document.getElementById("altura_input").value);
    const peso = parseFloat(document.getElementById("peso_input").value);
    const show_img_imc = document.getElementById("img-section")

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.value = "Ingrese valores validos";
        new_img.style.display = "none"
        img_default.style.display = "block"
    } else {
        img_default.style.display = "None"
        new_img.style.display = "block"
        const imc = peso / (altura ** 2);
        resultado.value = imc.toFixed(2);
        if (imc < 18.5){
            show_img_imc.classList.remove("img-sobrepeso")
            show_img_imc.src = "./img/peso_insuficiente.png"
        } else if ((imc > 18.5) && (imc < 25)){
            show_img_imc.classList.remove("img-sobrepeso")
            show_img_imc.src = "./img/peso_saludable.png"
        } else if ((imc > 25.0) && (imc < 29.9)){
            show_img_imc.classList.add("img-sobrepeso")
            show_img_imc.src = "./img/sobrepeso.png"
        } else {
            show_img_imc.classList.remove("img-sobrepeso")
            show_img_imc.src = "./img/obesidad.png"
        }
    }
}
