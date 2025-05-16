# 🛒 eShop DApp – Decentralized E-Commerce Platform

**eShop DApp** is a decentralized e-commerce platform that allows users to add, browse, and buy products directly on the Ethereum blockchain using MetaMask. Built with **React**, **Tailwind CSS**, and **ethers.js**, the app interacts with two smart contracts—**ProductContract** and **OrderContract**—to manage listings and purchases securely and transparently.

---

## 🚀 Features

- 🛠 Add new products (name & price) to the blockchain
- 🛒 View and purchase available products
- 📦 Track your past orders by wallet
- 🦾 Seamless MetaMask wallet integration
- 🔐 Immutable transactions using Ethereum smart contracts

---

## 🧱 Smart Contract Overview

### ProductContract.sol
- `addProduct(name, price)`: Adds a new product
- `products(index)`: Retrieves product info
- `productCount()`: Total products count

### OrderContract.sol
- `buyProduct(address seller)`: Handles product purchase
- `getMyOrders()`: Returns buyer's past orders

Deployed to:  
**Sepolia Testnet**

---

## 🖥️ Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Frontend    | React.js                     |
| Styling     | Tailwind CSS                 |
| Blockchain  | Solidity, Ethereum (Sepolia) |
| Wallet      | MetaMask                     |
| Web3        | ethers.js                    |
| Routing     | React Router                 |

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Animate.jsx
│   └── WalletContext.jsx
├── pages/
│   ├── WelcomePage.jsx       # Wallet connection screen
│   ├── AddProductPage.jsx    # Add product form
│   ├── BuyProductPage.jsx    # View & buy products
│   ├── MyOrdersPage.jsx      # View user's orders
├── contracts/
│   ├── ProductContract.sol
│   └── OrderContract.sol
```

---

## 🧪 Key Components Explained

- **`WalletContext.jsx`**: Global wallet state provider with `connectWallet` function
- **`AddProductPage.jsx`**: Form to list new products (price in ₹, auto-converted to ETH)
- **`BuyProductPage.jsx`**: Display of products and purchase using ETH
- **`MyOrdersPage.jsx`**: Fetches user's completed purchases
- **`WelcomePage.jsx`**: Entry screen prompting MetaMask login

---

## 🔧 How to Run Locally

### Prerequisites
- Node.js
- MetaMask (with Sepolia test ETH)
- Contracts deployed (use Remix)

### Steps

```bash
git clone https://github.com/vraj3724/eshop-dapp.git
cd eshop-dapp
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

Make sure contract addresses and ABIs are set in `utils/constants.js`.

---

## 🛠 Smart Contract Deployment (Remix)

1. Open [Remix IDE](https://remix.ethereum.org)
2. Compile both `ProductContract.sol` and `OrderContract.sol`
3. Deploy each using Injected Web3 (MetaMask)
4. Copy the contract addresses
5. Update them in `constants.js` file in the frontend

---

## 📈 Future Improvements

- 🧾 IPFS integration for product images
- 🛡️ Role-based product management
- 🔄 Order tracking by product ID
- 📲 Deploy on mobile web

---

## 🤝 Contributors

-  Vraj Patel (https://github.com/vraj3724)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
