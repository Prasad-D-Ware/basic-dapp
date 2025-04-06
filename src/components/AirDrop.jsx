import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const AirDrop = () => {
	const [amount, setAmount] = useState("");

	const wallet = useWallet();
	const { connection } = useConnection();

	const handleAirdrop = async () => {
		try {
			const res = await connection.requestAirdrop(
				wallet.publicKey,
				parseFloat(amount) * LAMPORTS_PER_SOL
			);
			console.log(res);
			alert(`Successfully airdropped ${amount} SOL to ${wallet.publicKey.toString()}`);
			setAmount("");
		} catch (error) {
			alert(`Error: ${error.message}`);
		}
	};

	return (
		<div className="airdrop-form">
			<input
				type="number"
				placeholder="Amount in SOL"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				min="0"
				step="0.1"
			/>
			<button 
				onClick={handleAirdrop}
				disabled={!wallet.connected || !amount}
			>
				Request Airdrop
			</button>
		</div>
	);
};

export default AirDrop;
