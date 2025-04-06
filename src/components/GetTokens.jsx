import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js';
import React from 'react'

const GetTokens = () => {
    const wallet = useWallet();
    const { connection } = useConnection();

    const getTokens = async () => {
        if (!wallet.publicKey) {
            console.log("Please connect your wallet first!");
            return;
        }

        
        const tokenBalances = await connection.getTokenAccountsByOwner(
            wallet.publicKey,
            {
                programId: new PublicKey('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb') // SPL Token program ID
            }
        );
        
        console.log(tokenBalances.value);
        const tokens = tokenBalances.value;

        tokens.map((token) => {
            console.log(token.pubkey.toBase58());
        })
    }

    return (
        <div>
            <button onClick={getTokens}>Get Tokens</button>
        </div>
    )
}

export default GetTokens
