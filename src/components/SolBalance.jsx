import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useState } from "react";

const SolBalance = () => {
	const [balance, setBalance] = useState();

	const wallet = useWallet();

	const { connection } = useConnection();

	const getBalance = async () => {
		if (wallet.publicKey) {
			const balance = await connection.getBalance(wallet.publicKey);
			setBalance(balance / LAMPORTS_PER_SOL);
		}
	};

	getBalance();
	return <div>SOL : {balance}</div>;
};

export default SolBalance;
