import { createRoot } from 'react-dom/client'
import DevTools from './App.jsx'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DevTools />
    </StrictMode>
)
