<script>
  import { navigate } from "svelte-routing";
  import TablaInventario from '../components/TablaInventario.svelte';
  import { productoStore } from '../../stores/productStore';
  let productos = [];
  // Suscribirse al store para obtener los productos
  productoStore.subscribe(state => {
    productos = state.filteredProductos;
  });
  // Función para navegar programáticamente
  function irANuevoProducto() {
    navigate("/nuevo-producto");
  }
</script>

<div class="p-6">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-semibold text-[#303F33]">Inventario</h1>
    
    <!-- Botón que usa navigate -->
    <button 
      class="px-4 py-2 bg-[#303F33] text-white rounded-lg"
      on:click={irANuevoProducto}
    >
      + Nuevo Producto
    </button>
  </div>

  <TablaInventario {productos} />
</div>