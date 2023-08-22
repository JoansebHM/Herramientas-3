let nota = parseFloat(prompt("Por favor, ingresa la nota final"));

if (nota < 0 || nota > 5){
    console.log("error");
} else if (nota > 0.01 && nota < 2){
    console.log("Perdio por vago");
} else if (nota >= 2 && nota < 3){
    console.log("Puede recuperar");
} else if (nota >= 3 && nota < 4){
    console.log("Gano, felicitaciones");
} else if (nota > 4 && nota < 4.6){
    console.log("Eres genial");
} else if (nota >= 4.6){
    console.log("Eres un genio");
}
