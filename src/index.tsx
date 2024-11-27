import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Logger, RadixDappToolkit, RadixNetwork} from "@radixdlt/radix-dapp-toolkit";

// Initialisation du RadixDappToolkit
const rdt = RadixDappToolkit({
  dAppDefinitionAddress: 'account_rdx128uazakd5z2707m8t640swdvce3wnc4h8f38wmmq7fmqhdetcdpytu',
  networkId: RadixNetwork.Mainnet,
  applicationName: 'Radix Web3 dApp',
  applicationVersion: '1.0.0',
  logger: Logger(5),
});

// Initialiser React avec React 18
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App rdt={rdt}/>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
