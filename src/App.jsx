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

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

import "./App.css";
import AirDrop from "./components/AirDrop";
import SolBalance from "./components/SolBalance";
import SignTransaction from "./components/SignTransaction";

function App() {
	return (
		<>
			<ConnectionProvider
				endpoint={
					"https://solana-devnet.g.alchemy.com/v2/btdUtkWnLIFsX4vpHhtuq5tVzox7Vk9y"
				}
			>
				<WalletProvider wallets={[]} autoConnect>
					<WalletModalProvider>
						<WalletMultiButton />
						<WalletDisconnectButton />
						<AirDrop />
						<SolBalance />
						<SignTransaction/>
					</WalletModalProvider>
				</WalletProvider>
			</ConnectionProvider>
		</>
	);
}

export default App;
