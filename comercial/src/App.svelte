<script>
  import Router from 'svelte-routing/src/Router.svelte';
  import Link from 'svelte-routing/src/Link.svelte';
  import Route from 'svelte-routing/src/Route.svelte';
  import Inventario from "./views/pages/Inventario.svelte";
  export let url = "";
</script>

<Router {url}>
  <div class="flex h-screen">
    <!-- Sidebar/Navegación -->
    <nav class="w-16 bg-[#303F33] min-h-screen text-white fixed left-0 top-0">
      <div class="flex flex-col items-center py-4">
        <!-- Logo -->
        <div class="mb-8">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8" />
        </div>
        
        <!-- Enlaces de navegación -->
        <Link 
          to="/inventario" 
          class="p-2 rounded-lg hover:bg-[#4A5F4E] transition-colors mb-4"
        >
          <span class="text-xl">📦</span>
        </Link>

        <Link 
          to="/usuarios" 
          class="p-2 rounded-lg hover:bg-[#4A5F4E] transition-colors mb-4"
        >
          <span class="text-xl">👥</span>
        </Link>

        <Link 
          to="/reportes" 
          class="p-2 rounded-lg hover:bg-[#4A5F4E] transition-colors mb-4"
        >
          <span class="text-xl">📊</span>
        </Link>
      </div>
    </nav>

    <!-- Contenido Principal -->
    <main class="flex-1 pl-16">
      <Route path="/" component={Inventario} />
      <Route path="/inventario" component={Inventario} />
    </main>
  </div>
</Router>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>