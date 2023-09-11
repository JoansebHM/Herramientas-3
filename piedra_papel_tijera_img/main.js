const btn_next = document.getElementById("btn_next");
const btn_prev = document.getElementById("btn_prev");

btn_next.addEventListener("click", change_image);
btn_prev.addEventListener("click", change_image);

function change_image(path){
    let imagen = document.getElementById("papel_img")
    imagen.src = path
    alert(image)
}
