const btn_cotizar = document.getElementById("btn_cotizar")
const sub_box = document.getElementById("sub_box")
const des_box = document.getElementById("des_box")
const iva_box = document.getElementById("iva_box")
const total_box = document.getElementById("total_box")

btn_cotizar.addEventListener("click", function(){
    const input_personas = document.getElementById("input_personas").value
    const input_dias = document.getElementById("input_dias").value
    const input_valorXpersona = document.getElementById("input_valorXpersona").value
    let total = ((input_personas * input_valorXpersona) * input_dias)
    let descuento = total * (15 / 100)
    let iva = descuento * (19 / 100)
    sub_box.value = total
    des_box.value = descuento
    iva_box.value =  iva
    total_box.value = total + iva - descuento
})