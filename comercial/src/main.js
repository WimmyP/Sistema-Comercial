import App from './App.svelte';
import './app.css';
import { wrap } from 'svelte-spa-router/wrap';
const app = new App({
  target: document.getElementById('app'),
  props: {
    url: window.location.pathname
  }
});

export default app;