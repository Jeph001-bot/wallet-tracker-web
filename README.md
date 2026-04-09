Wallet Tracker (GetBlock Web App)

A simple web application that allows users to track Ethereum wallet balances in real-time using the GetBlock blockchain API.

Project Overview
This project demonstrates how to:
- Connect to a blockchain using RPC (via GetBlock)
- Build a backend using Node.js and Express
- Create a simple frontend interface
- Deploy a working Web3 application

Users can input any Ethereum wallet address and instantly view its balance.

Use Case
- Track wallet balances
- Learn how blockchain APIs work
- Build a foundation for Web3 applications
- Use as a starter template for dApps

Tech Stack
- Backend: Node.js, Express
  
API: GetBlock RPC

Frontend: HTML, JavaScript

Hosting: Render

Project Structure
wallet-tracker-web/
│
├── public/
│   └── index.html
│
├── server.js
├── package.json
└── README.md

How to Run Locally
1. Clone the repository
git clone https://github.com/your-username/wallet-tracker-web.git
cd wallet-tracker-web
2. Install dependencies
npm install
3. Add your API key
Create a .env file or set environment variables:

API_KEY= API KEY FROM GETBLOCK
4. Start the server
node server.js

5. Open in browser
(https://wallet-tracker-web.onrender.com/)

How It Works
- User enters an Ethereum wallet address
- Frontend sends a request to the backend
- Backend calls GetBlock RPC
- Returns wallet balance
- Balance is displayed on the screen

  Environment Variables
-Variable	Description
-API_KEY	Your GetBlock API key
 
Deployment
-This project is deployed using Render.

To deploy your own:
-Push code to GitHub
-Go to Render
-Create a new Web Service
-Connect your repository
-Add environment variable (API_KEY)
-Deploy
 
Future Improvements
-Add transaction history
-Display charts and analytics
-Add support for multiple blockchains
-Improve UI design
-Add wallet alerts & notifications
