import React from "react";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";

import {
	WalletDisconnectButton,
	WalletModalProvider,
	WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

import "./App.css";
import AirDrop from "./components/AirDrop";
import SolBalance from "./components/SolBalance";

function App() {
	return (
		<>
			<ConnectionProvider
				endpoint={
					"https://solana-devnet.g.alchemy.com/v2/AmXr0S1YgJcSBmZ816bmQ0H4ctY9dG9_"
				}
			>
				<WalletProvider wallets={[]} autoConnect>
					<WalletModalProvider>
						<WalletMultiButton />
						<WalletDisconnectButton />
						<AirDrop />
						<SolBalance />
					</WalletModalProvider>
				</WalletProvider>
			</ConnectionProvider>
		</>
	);
}

export default App;
