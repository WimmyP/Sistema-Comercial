import { writable } from 'svelte/store';
import { ProductModel } from '../models/ProductModel';

const initialProducts = [
  {
    id: 1,
    nombre: 'Laptop HP Pavilion',
    modelo: 'HP-15-2024',
    fechaEntrada: '11/03/2024',
    fechaSalida: '18/03/2024',
    stock: 4,
    precio: '1567.45',
    estado: ProductModel.estados.RECEPCION
  },
  // Más productos aquí...
];

function createProductStore() {
  const { subscribe, set, update } = writable({
    productos: initialProducts,
    filteredProductos: initialProducts,
    loading: false,
    error: null
  });

  return {
    subscribe,
    filterProductos: (searchTerm) => {
      update(state => ({
        ...state,
        filteredProductos: state.productos.filter(producto =>
          producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          producto.modelo.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }));
    },
    addProducto: (producto) => {
      update(state => ({
        ...state,
        productos: [...state.productos, producto],
        filteredProductos: [...state.productos, producto]
      }));
    },
    deleteProducto: (id) => {
      update(state => ({
        ...state,
        productos: state.productos.filter(p => p.id !== id),
        filteredProductos: state.filteredProductos.filter(p => p.id !== id)
      }));
    }
  };
}

export const productoStore = createProductStore();