import React from 'react';
import './App.css';
import {Logger, RadixDappToolkit, RadixNetwork} from "@radixdlt/radix-dapp-toolkit";

function App() {
  /* const storageModule = LocalStorageModule(
     `rdt:${"account_rdx128uazakd5z2707m8t640swdvce3wnc4h8f38wmmq7fmqhdetcdpytu"}:${networkId}`,
   )*/
  const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
      'account_rdx128uazakd5z2707m8t640swdvce3wnc4h8f38wmmq7fmqhdetcdpytu',
    networkId: RadixNetwork.Mainnet,
    applicationName: 'Radix Web3 dApp',
    applicationVersion: '1.0.0',
    logger: Logger(5)
  })

  console.log('Toolkit initialized:', rdt);
  console.log('Wallet connection status:', rdt.walletApi.walletData$);

  /* const gatewayApi = GatewayApiClient.initialize(
     {
       ...rdt.gatewayApi.clientConfig,
       basePath: 'https://mainnet.radixdlt.com'
     }// Pour le Mainnet
   )*/

  rdt.walletApi.provideChallengeGenerator(async () => {
    return "simple-test-challenge"; // Chaîne statique
  });

  console.log('Challenge generator registered');


  return (
    <div className="App">

    </div>
  );
}

export default App;
