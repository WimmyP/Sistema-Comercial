<script>
    import { Link } from "svelte-routing";
  </script>
  
  <div class="flex h-screen">
    <!-- Header -->
    <header class="fixed top-0 left-16 right-0 h-16 bg-white border-b px-6 flex items-center justify-between">
      <h1 class="text-xl font-semibold text-[#303F33]">Data Lake</h1>
      <div class="flex items-center gap-4">
        <button class="p-2 hover:bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
      </div>
    </header>
  
    <slot></slot>
  </div>