import { Provider } from "react-redux";
import { store , persistor }  from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)
