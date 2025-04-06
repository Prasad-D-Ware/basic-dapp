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
import SendTokens from "./components/SendTokens";
import GetTokens from "./components/GetTokens";

function App() {
	return (
		<ConnectionProvider
			endpoint={
				"https://solana-devnet.g.alchemy.com/v2/btdUtkWnLIFsX4vpHhtuq5tVzox7Vk9y"
			}
		>
			<WalletProvider wallets={[]} autoConnect>
				<WalletModalProvider>
					<div className="app-container">
						<div className="wallet-buttons-container">
							<WalletMultiButton />
							<WalletDisconnectButton />
						</div>
						<div className="components-grid">
							<div className="component-card">
								<h2>Wallet Balance</h2>
								<SolBalance />
							</div>
							<div className="component-card">
								<h2>Request Airdrop</h2>
								<AirDrop />
							</div>
							<div className="component-card">
								<h2>Sign Message</h2>
								<SignTransaction />
							</div>
							<div className="component-card">
								<h2>Send SOL</h2>
								<SendTokens />
							</div>
							{/* <div className="component-card">
								<h2>Get Tokens</h2>
								<GetTokens />
							</div> */}
						</div>
					</div>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
}

export default App;
