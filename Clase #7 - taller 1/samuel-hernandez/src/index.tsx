import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './components/App/App';
import {SessionProvider} from "./context/Session/SessionProvider";
import {RoutingProvider} from "./context/Routing/RoutingProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <SessionProvider>
        <RoutingProvider>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </RoutingProvider>
    </SessionProvider>
);