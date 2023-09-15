document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    const resultado = document.getElementById("imc_input");
    const imc_button = document.getElementById("imc_button");
    const bajo = document.querySelector(".row-img1");
    const normal = document.querySelector(".row-img2");
    const sobrepeso = document.querySelector(".row-img3");
    const obesidad = document.querySelector(".row-img4");
    const rowimg1 = bajo.classList.value;
    const rowimg2 = normal.classList.value;
    const rowimg3 = sobrepeso.classList.value;
    const rowimg4 = obesidad.classList.value;

    imc_button.addEventListener("click", function() {
        bajo.className = rowimg1;
        normal.className = rowimg2;
        sobrepeso.className = rowimg3;
        obesidad.className = rowimg4;
        calculate_imc();
    });

    function calculate_imc() {
        const altura = parseFloat(document.getElementById("altura_input").value);
        const peso = parseFloat(document.getElementById("peso_input").value);
    
        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            resultado.value = "Ingrese valores validos";
        } else {
            const imc = peso / (altura ** 2);
            resultado.value = imc.toFixed(2);
            if (imc < 18.5){
                bajo.classList.remove("row-img1") 
                bajo.classList.add("blur-off")
            } else if ((imc > 18.5) && (imc < 25)){
                normal.classList.remove("row-img2") 
                normal.classList.add("blur-off")
            } else if ((imc > 25.0) && (imc < 29.9)){
                sobrepeso.classList.remove("row-img3") 
                sobrepeso.classList.add("blur-off")
            } else {
                obesidad.classList.remove("row-img4") 
                obesidad.classList.add("blur-off")
            }
        }
    }
    
});

