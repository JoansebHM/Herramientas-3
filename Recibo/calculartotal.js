function generardescuento(precio, descuento){
    let desc = (descuento / 100)
    desc = desc * precio
    return desc
}

function calcularTotal(producto, cantidad, precio){
    let subtotal = (precio * cantidad)
    let DescuentoGlobal = parseFloat(prompt("Ingrese el descuento en porcentaje"))
    let descuento = generardescuento(subtotal, DescuentoGlobal)
    let iva = ((subtotal - descuento) * (19 / 100))
    let subtotalConIva = ((subtotal - descuento) + iva)
    console.log("RECIBO"+"\n-------------------"+"\nProducto: " + producto + "\nCosto por unidad: " + precio + "\nsubtotal: " + 
    subtotal + "\ncantidad: " + cantidad + " " + producto +"\ndescuento del " + DescuentoGlobal + "% => " + descuento + "\nSubtotal: " + 
    (subtotal - descuento) + "\nCon el iva del 19% => " + ((subtotal - descuento) * (19 / 100))+"\n"+"-------------------"+"\nTotal: "+ subtotalConIva)
}

function main(){
    let producto = prompt("Ingrese el producto")
    let cantidad = parseInt(prompt("Ingrese la cantidad"))
    let precio = parseFloat(prompt("Precio del producto"))
    calcularTotal(producto,cantidad,precio)
}

main()