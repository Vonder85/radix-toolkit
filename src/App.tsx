import React from 'react';
import {Logger, RadixDappToolkit, RadixNetwork} from "@radixdlt/radix-dapp-toolkit";

const App = () => {
// Initialisation du RadixDappToolkit

  const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
      'account_rdx128uazakd5z2707m8t640swdvce3wnc4h8f38wmmq7fmqhdetcdpytu',
    networkId: RadixNetwork.Mainnet,
    applicationName: 'Radix Web3 dApp',
    applicationVersion: '1.0.0',
    logger: Logger(3),
  })
  const getWalletData = () => {
    const walletData = rdt.walletApi.getWalletData()
    console.log(walletData)
  }
  return (
    <div>
      <button onClick={getWalletData}>getWalletData</button>
    </div>);
};

export default App;
