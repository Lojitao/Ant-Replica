import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'; // 引入 normalize.css
import "./styles/index.scss"
// import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
