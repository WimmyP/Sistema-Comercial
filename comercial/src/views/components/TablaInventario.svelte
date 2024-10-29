<script>
    import { createEventDispatcher } from 'svelte';
    import { ProductModel } from '../../models/ProductModel';
  
    export let productos = [];
    const dispatch = createEventDispatcher();
  
    function getEstadoColor(estado) {
      const colors = {
        [ProductModel.estados.RECEPCION]: 'bg-green-100 text-green-800',
        [ProductModel.estados.DEFECTUOSO]: 'bg-red-100 text-red-800',
        [ProductModel.estados.EN_ESPERA]: 'bg-yellow-100 text-yellow-800'
      };
      return colors[estado] || 'bg-gray-100 text-gray-800';
    }
  </script>
  
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="bg-[#303F33] text-white">
          <th class="p-4 text-left">Producto</th>
          <th class="p-4 text-left">Fecha Entrada</th>
          <th class="p-4 text-left">Fecha Salida</th>
          <th class="p-4 text-left">Stock</th>
          <th class="p-4 text-left">Precio</th>
          <th class="p-4 text-left">Estado</th>
          <th class="p-4 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {#each productos as producto (producto.id)}
          <tr class="border-b hover:bg-gray-50">
            <td class="p-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  💻
                </div>
                <div>
                  <div class="font-medium">{producto.nombre}</div>
                  <div class="text-sm text-gray-500">{producto.modelo}</div>
                </div>
              </div>
            </td>
            <td class="p-4">{producto.fechaEntrada}</td>
            <td class="p-4">{producto.fechaSalida}</td>
            <td class="p-4">{producto.stock} unidades</td>
            <td class="p-4">${producto.precio}</td>
            <td class="p-4">
              <span class={`px-3 py-1 rounded-full text-sm ${getEstadoColor(producto.estado)}`}>
                {producto.estado}
              </span>
            </td>
            <td class="p-4">
              <div class="flex gap-2">
                <button 
                  class="text-[#303F33] hover:text-[#4A5F4E] transition-colors"
                  on:click={() => dispatch('edit', { producto })}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button 
                  class="text-[#303F33] hover:text-red-600 transition-colors"
                  on:click={() => dispatch('delete', { id: producto.id })}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>