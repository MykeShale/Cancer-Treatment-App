import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import {PrivyProvider} from '@privy-io/react-auth';

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <PrivyProvider
        appId="cm02wlq1f008h12v8lxoymhtx"
        config={{
            appearance: {
                theme: "dark",
            },
            embeddedWallets: {
                createOnLogin: 'users-without-wallets',
            },
        }}
    >
        <Router>
            <App />
        </Router>
    </PrivyProvider>
)