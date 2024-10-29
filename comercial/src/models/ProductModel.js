export class ProductModel {
    constructor({id, nombre, modelo, fechaEntrada, fechaSalida, stock, precio, estado}) {
      this.id = id;
      this.nombre = nombre;
      this.modelo = modelo;
      this.fechaEntrada = fechaEntrada;
      this.fechaSalida = fechaSalida;
      this.stock = stock;
      this.precio = precio;
      this.estado = estado;
    }
  
    static estados = {
      RECEPCION: 'Recepción',
      DEFECTUOSO: 'Defectuoso',
      EN_ESPERA: 'En Espera'
    };
  }