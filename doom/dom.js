function change_txt_class(){
    let new_txt = document.getElementsByClassName("miTitulo")
    new_txt[0].innerHTML = "Bienvenidos al curso de Js"
}

function get_operation(){
    let num1 = parseInt(document.getElementById("first_num").value);
    let num2 = parseInt(document.getElementById("second_num").value);
    let ans_box = document.getElementById("ans_box");
    let add_button = document.getElementById("add_button")
    let sub_button = document.getElementById("sub_button")
    let mult_button = document.getElementById("mult_button")
    let div_button = document.getElementById("div_button")

    add_button.addEventListener("click", function(){
        ans_box.value
    })

}

function change_txt_id(){
    let new_id = document.getElementById("MiId")
    new_id.innerHTML = "Esto es un elemento de ID unico"
}

function sumar() {
    let num1 = parseInt(document.getElementById("first_num").value);
    let num2 = parseInt(document.getElementById("second_num").value);
    let ans_box = document.getElementById("ans_box");
    ans_box.value = (num1 + num2);
}

function restar() {
    let num1 = parseInt(document.getElementById("first_num").value);
    let num2 = parseInt(document.getElementById("second_num").value);
    let ans_box = document.getElementById("ans_box");
    ans_box.value = (num1 - num2);
}

function multiplicar() {
    let num1 = parseInt(document.getElementById("first_num").value);
    let num2 = parseInt(document.getElementById("second_num").value);
    let ans_box = document.getElementById("ans_box");
    ans_box.value = (num1 * num2);
}

function dividir() {
    let num1 = parseInt(document.getElementById("first_num").value);
    let num2 = parseInt(document.getElementById("second_num").value);
    let ans_box = document.getElementById("ans_box");
    if (num2 == 0){
        ans_box.value = "NO SE PUEDE DIVIDIR POR 0"
    } else {
        ans_box.value = (num1 / num2);
    }
}

let add_button = document.getElementById("add_button")
let sub_button = document.getElementById("sub_button")
let mult_button = document.getElementById("mult_button")
let div_button = document.getElementById("div_button")

add_button.addEventListener("click", function(event){
    event.preventDefault();
})

sub_button.addEventListener("click", function(event){
    event.preventDefault();
})

mult_button.addEventListener("click", function(event){
    event.preventDefault();
})

div_button.addEventListener("click", function(event){
    event.preventDefault();
})