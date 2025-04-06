import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useState, useEffect } from "react";

const SolBalance = () => {
	const [balance, setBalance] = useState(null);
	const wallet = useWallet();
	const { connection } = useConnection();

	useEffect(() => {
		const getBalance = async () => {
			if (wallet.publicKey) {
				const balance = await connection.getBalance(wallet.publicKey);
				setBalance(balance / LAMPORTS_PER_SOL);
			}
		};

		getBalance();
		const interval = setInterval(getBalance, 10000); // Update every 10 seconds
		return () => clearInterval(interval);
	}, [wallet.publicKey, connection]);

	return (
		<div className="balance-display">
			<span className="balance-label">Current Balance:</span>
			<span className="balance-amount">
				{balance !== null ? `${balance.toFixed(4)} SOL` : 'Connect wallet to view balance'}
			</span>
		</div>
	);
};

export default SolBalance;
