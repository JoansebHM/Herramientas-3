function generarDescuento(precio, descuento){
    let desc = (descuento / 100)
    desc = desc * precio
    return desc
}

function calcularTotal(producto, cantidad, precio){
    let subtotal = (precio * cantidad)
    let descuento = parseFloat(prompt("Ingrese el descuento en porcentaje"))
    let Descuento = generarDescuento(subtotal, descuento)
    let precioPostDescuentoConIva = ((subtotal - Descuento) * (19 / 100))
    let subtotalConIva = ((subtotal - Descuento) + precioPostDescuentoConIva)
    console.log("Producto " + producto + "\nvale " + precio + "\nsubtotal " + 
    subtotal + "\ncantidad "+ cantidad + "\nDescuento del " + descuento + "% o " + Descuento+ " queda en " + (subtotal - Descuento) +
    "\nCon el iva del 19% queda un total de " + subtotalConIva + "\nTener en cuenta que el precio es sin iva")
}

function main(){
    let producto = prompt("Ingrese el producto")
    let cantidad = parseInt(prompt("Ingrese la cantidad"))
    let precio = parseFloat(prompt("Precio del producto"))
    calcularTotal(producto,cantidad,precio)
}

main()