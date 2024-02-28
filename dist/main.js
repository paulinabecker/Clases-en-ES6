"use strict";

var Cliente = require("./clientes");
var Impuestos = require("./impuestos");
var impuestosCliente = new Impuestos(50000, 10000); 
var cliente1 = new Cliente("Juan", impuestosCliente);
console.log(
  "El impuesto total a pagar por "
    .concat(cliente1.nombre, " es: ")
    .concat(cliente1.calcularImpuesto())
);
