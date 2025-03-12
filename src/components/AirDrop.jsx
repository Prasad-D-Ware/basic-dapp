import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const AirDrop = () => {
	const [amount, setAmount] = useState();

	const wallet = useWallet();
	const { connection } = useConnection();

	const handleAirdrop = async () => {
		const res = await connection.requestAirdrop(
			wallet.publicKey,
			amount * LAMPORTS_PER_SOL
		);
		console.log(res);
		alert(`Airdroped ${amount} SOL to ${wallet.publicKey.toString()}`);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Amount"
				onChange={(e) => setAmount(e.target.value)}
			/>
			<button onClick={handleAirdrop}>Request Airdrop</button>
		</div>
	);
};

export default AirDrop;
