import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.scss";
import { StrictMode } from 'react';
import UserProvider from "./context/userProvider.jsx";

createRoot(document.getElementById('root')).render(
<StrictMode>
    <UserProvider>
        <App />
    </UserProvider>
</StrictMode>
)