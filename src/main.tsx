import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Suppress noisy third-party Three.js deprecation warnings from @react-three/drei
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args.some(arg => typeof arg === 'string' && arg.includes('THREE.Clock: This module has been deprecated'))) {
    return;
  }
  originalWarn(...args);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
