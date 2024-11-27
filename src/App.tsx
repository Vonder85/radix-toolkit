import React from 'react';
import RadixConnectButton from "./connect-button/radix-connect-button";
import {Logger, RadixDappToolkit} from "@radixdlt/radix-dapp-toolkit";
import {RadixNetwork} from "@radixdlt/babylon-gateway-api-sdk";

const App = () => {
// Initialisation du RadixDappToolkit
  const rdt = RadixDappToolkit({
    dAppDefinitionAddress: 'account_rdx128uazakd5z2707m8t640swdvce3wnc4h8f38wmmq7fmqhdetcdpytu',
    networkId: RadixNetwork.Mainnet,
    applicationName: 'Radix Web3 dApp',
    applicationVersion: '1.0.0',
    logger: Logger(5),
  });
  return (
    <div>
      <RadixConnectButton rdt={rdt}/>
    </div>);
};

export default App;
