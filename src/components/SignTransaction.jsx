import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react'
import React, { useState } from 'react'
import bs58 from "bs58";

const SignTransaction = () => {
    const [message , setMessage] = useState();
    const { publicKey , signMessage } = useWallet();


    const handleSigning = async () => {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');

        const encodedMsg = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMsg);

        if(!ed25519.verify(signature,message,publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    }

  return (
    <>
    <input type="text" onChange={(e)=>setMessage(e.target.value)} />
    <button onClick={handleSigning}>
      SignMessage
    </button>
    </>
  )
}

export default SignTransaction
