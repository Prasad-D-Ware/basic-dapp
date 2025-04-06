import { Buffer } from "buffer";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
	LAMPORTS_PER_SOL,
	PublicKey,
	SystemProgram,
	Transaction,
} from "@solana/web3.js";
import React, { useState } from "react";

const SendTokens = () => {
	const [to, setTo] = useState("");
	const [amount, setAmount] = useState("");
	const wallet = useWallet();
	const { connection } = useConnection();

	const sendTokens = async () => {
		try {
			const transaction = new Transaction();
			transaction.add(
				SystemProgram.transfer({
					fromPubkey: wallet.publicKey,
					toPubkey: new PublicKey(to),
					lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
				})
			);

			await wallet.sendTransaction(transaction, connection);
			alert(`Successfully sent ${amount} SOL to ${to}`);
			setTo("");
			setAmount("");
		} catch (error) {
			alert(`Error: ${error.message}`);
		}
	};

	return (
		<div className="send-tokens-form">
			<input
				type="text"
				placeholder="Recipient Address"
				value={to}
				onChange={(e) => setTo(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Amount in SOL"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				min="0"
				step="0.1"
			/>
			<button 
				onClick={sendTokens}
				disabled={!wallet.connected || !to || !amount}
			>
				Send SOL
			</button>
		</div>
	);
};

export default SendTokens;

window.Buffer = window.Buffer || Buffer;
