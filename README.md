# AI Drama Betting Game - Frontend

## Overview
The AI Drama Betting Game is a decentralized platform where players engage in AI-generated social media controversies. Users predict drama outcomes, place bets using Reaction NFTs (😂, 😱, 🚀), and can influence events by paying tokens to "boost" specific actions. AI determines the final results based on user interactions, interventions, and predefined probability rules.

## Features
- **AI-Generated Social Media Dramas**: The platform creates influencers and scenarios based on real-world cultural trends.
- **Bet with Reaction NFTs**: Players choose how they think the controversy will end by using special NFTs.
- **Boost Mechanics**: Players can pay tokens to escalate the drama (e.g., leak fake DMs, buy followers).
- **Fair AI-Driven Outcome System**: AI calculates the final result based on bets, boosts, and randomness.
- **Reward System**: Winning bets split the prize pool.

## Tech Stack
- **Frontend**: React (Next.js / Vite)
- **Styling**: Tailwind CSS / shadcn/ui
- **State Management**: Redux / Context API
- **Smart Contracts**: Solidity (for NFT transactions and betting logic)
- **Backend (if needed)**: Node.js with Express or a decentralized storage system like IPFS and AI agents using gaia, auth using privy

## Getting Started
### Prerequisites
- **Node.js** (v16 or later)
- **Yarn or NPM**
- **MetaMask or WalletConnect** (for Web3 interactions)

### Installation
```sh
# Clone the repository
git clone https://github.com/your-repo/ai-drama-betting.git
cd ai-drama-betting

# Install dependencies
yarn install  # or npm install
```

### Running the App
```sh
# Start the development server
yarn dev  # or npm run dev
```
The app should now be running at `http://localhost:3000`.


## Smart Contract Integration
- **Minting Reaction NFTs**: Users must connect their wallets to place bets.
- **Boosting Drama**: AI agents handle token payments to influence the storyline.
- **Distributing Rewards**: A smart contract automatically distributes winnings.

## Future Enhancements
- **Social Media Integration**: Optional X (Twitter) API integration for viral reach.
- **Persistent AI Characters**: Long-term AI influencers with evolving narratives.
- **Mobile App**: Expanding to iOS & Android.

## Contributing
Pull requests are welcome! Please open an issue before making major changes.

