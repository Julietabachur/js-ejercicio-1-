var torta1 = "chocotorta";
var torta2 = "balcarce";
var torta3 = "mousse";
var torta4 = "ricota";

var precioChocotorta = 1500;
var precioBalcarce = 2500;
var precioMousse = 1200;
var precioRicota = 900;

var listaProductos = torta1+", "+torta2+", "+torta3+", "+torta4;

console.log("LA LISTA DE LAS TORTAS ES: "+listaProductos)

var tortaSeleccionada1 = prompt("Escriba la torta que quiere comprar")
var tortaSeleccionada2 = prompt("Escriba otra torta que quiera comprar")

alert("El precio de la chocotorta es $"+precioChocotorta+" y el precio de la mousse es $"+precioMousse)

var total = precioChocotorta+precioMousse
alert("El total de su compra es: $"+total)

var pago = prompt("Ingrese con cuanto va a pagar")

alert("Su cambio es: "+parseInt(pago-total))

alert("MUCHAS GRACIAS POR SU COMPRA!")