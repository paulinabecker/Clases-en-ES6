const Cliente = require("./clientes");
const Impuestos = require("./impuestos");

const impuestosCliente = new Impuestos(50000, 10000); 
const cliente1 = new Cliente("Juan", impuestosCliente);

console.log(
  `El impuesto total a pagar por ${
    cliente1.nombre
  } es: ${cliente1.calcularImpuesto()}`
);
