import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log('📱 main.tsx loading...');

// Hide initial loader when React starts rendering
const hideLoader = () => {
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.classList.add('hidden');
    console.log('📱 Loader hidden');
  }
};

// Start React with error handling for mobile
try {
  console.log('📱 Starting React...');
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error('❌ Root element not found!');
    throw new Error('Root element not found');
  }
  
  const root = createRoot(rootElement);
  root.render(<App />);
  
  console.log('📱 React rendered successfully');
  
  // Hide loader after React mounts
  hideLoader();
} catch (error) {
  console.error('❌ Failed to start React:', error);
  // Show error message to user on mobile
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <p style="color: #dc2626; font-size: 16px; margin-bottom: 10px;">Erro ao carregar o app</p>
        <p style="color: #666; font-size: 14px;">Por favor, tente novamente</p>
        <button onclick="location.reload()" style="margin-top: 16px; padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 8px; font-size: 14px;">
          Recarregar
        </button>
      </div>
    `;
  }
}
