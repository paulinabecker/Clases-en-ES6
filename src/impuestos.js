class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  getmontoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  setmontoBrutoAnual(nuevoMontoBrutoAnual) {
    this._montoBrutoAnual = nuevoMontoBrutoAnual;
  }

  getdeducciones() {
    return this._deducciones;
  }

  setdeducciones(nuevasDeducciones) {
    this._deducciones = nuevasDeducciones;
  }
}

module.exports = Impuestos;
