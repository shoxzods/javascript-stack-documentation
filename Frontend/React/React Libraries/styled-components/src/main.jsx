import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StyledComponent from './StyledComponent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledComponent />
  </StrictMode>
)