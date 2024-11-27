import React, {useState} from 'react';
import {
  DataRequestBuilder,
  generateRolaChallenge,
  Logger,
  RadixDappToolkit,
  RadixNetwork,
} from '@radixdlt/radix-dapp-toolkit';

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<string[]>([]);


  // Initialiser RadixDappToolkit
  const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
      'account_rdx128uazakd5z2707m8t640swdvce3wnc4h8f38wmmq7fmqhdetcdpytu', // Remplacez par votre adresse
    networkId: RadixNetwork.Mainnet, // Changez en RadixNetwork.Stokenet pour le Testnet
    applicationName: 'Radix Web3 dApp',
    applicationVersion: '1.0.0',
    logger: Logger(3), // Niveau de logs
  });

  // Fonction pour se connecter au Wallet

      // Définir les données demandées (ici les comptes)
      rdt.walletApi.setRequestData((builder: DataRequestBuilder) =>
        builder.accounts().exactly(1)
      );

      rdt.walletApi.provideChallengeGenerator(async () => generateRolaChallenge())

      rdt.walletApi.setRequestData(
        DataRequestBuilder.persona().withProof(),
        DataRequestBuilder.accounts().atLeast(1),
      )
      /*
            if (result.data) {
              setIsConnected(true);
              setAccounts(result.data.accounts);
              console.log('Connected accounts:', result.data.accounts);
            } else {
              console.error('Connection failed:', result);
            }*/
    }


  return (
    <div>
      <h1>Radix dApp Connection</h1>
      {!isConnected ? (
        <button onClick={connectWallet}>Connect to Radix Wallet</button>
      ) : (
        <div>
          <h2>Connected!</h2>
          <p>Accounts:</p>
          <ul>

          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
