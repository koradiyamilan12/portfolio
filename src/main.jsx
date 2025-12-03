import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log(
  "%c👋 Welcome to My Portfolio!",
  "color: #fff; font-size: 18px; font-weight: bold; padding: 12px 16px; border-radius: 8px; background: linear-gradient(90deg, #6e00ff, #ff00c3); box-shadow: 0 0 10px #ff00c3;"
);

createRoot(document.getElementById('root')).render(
    <App />
)
