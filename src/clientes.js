class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  calcularImpuesto() {
    const montoBrutoAnual = this._impuesto.getmontoBrutoAnual();
    const deducciones = this._impuesto.getdeducciones();
    const impuestoCalculado = (montoBrutoAnual - deducciones) * 0.21; 
    return impuestoCalculado;
  }
}

module.exports = Cliente;
