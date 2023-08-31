let flag = parseInt(prompt("Ingrese 1 para entrar"))

while (flag != 2) {
    flag = parseInt(prompt("1 para seguir 2 para salir"))
    if (flag == 1){
        continue
    } else if (flag == 2) { 
        break  
    } else {
        console.log("Concentrado pues")
    }
}