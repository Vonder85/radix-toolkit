import React from 'react';
import RadixConnectButton from "./connect-button/radix-connect-button";

const App = (rdt: any) => {


  return (
    <div>
      <RadixConnectButton rdt={rdt}/>
    </div>);
};

export default App;
