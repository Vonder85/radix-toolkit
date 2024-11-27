import React from 'react';
import {
  DataRequestBuilder,
  generateRolaChallenge,
  OneTimeDataRequestBuilder,
  RadixDappToolkit
} from '@radixdlt/radix-dapp-toolkit';

interface RadixConnectButtonProps {
  rdt: ReturnType<typeof RadixDappToolkit>; // Type pour le RadixDappToolkit instance
}

const RadixConnectButton: React.FC<RadixConnectButtonProps> = ({rdt}) => {

  const handleConnect = async () => {
    console.log(rdt)
    try {
      // Définir les données demandées
      rdt.walletApi.setRequestData((builder: DataRequestBuilder) =>
        builder.accounts().exactly(1)
      );

      /* // Démarrer la connexion
       const gatewayApi = GatewayApiClient.initialize(
         rdt.gatewayApi.clientConfig,
       )*/

      rdt.walletApi.provideChallengeGenerator(async () => generateRolaChallenge())

      rdt.walletApi.setRequestData(
        DataRequestBuilder.persona().withProof(),
        DataRequestBuilder.accounts().atLeast(1),
      )

      /* if (result.data) {
         setIsConnected(true);
         setAccount(result.data.accounts[0]); // Récupère le premier compte
         console.log('Connected account:', result.data.accounts[0]);
       } else {
         console.error('Connection failed:', result);
       }*/
    } catch (error) {
      console.error('Error connecting to Radix Wallet:', error);
    }
  };

  const oneTimeRequest = () => {
    rdt.walletApi.sendOneTimeRequest(
      OneTimeDataRequestBuilder.accounts().exactly(1),
    )
  }


  return (
    <div>
      <button onClick={handleConnect} style={styles.button}>
        Connect to Radix Wallet
      </button>
      <button onClick={oneTimeRequest} style={styles.button}>
        Ont Time Request
      </button>

    </div>
  );
};

// Styles de base pour le bouton et les informations connectées
const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  connectedInfo: {
    marginTop: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  account: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
};

export default RadixConnectButton;
