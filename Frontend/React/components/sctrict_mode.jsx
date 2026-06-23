// ---------------------------- Strict Mode ------------------------------ //

/*
    StrictMode - помогает найти простые баги до момента build.

*/ 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)