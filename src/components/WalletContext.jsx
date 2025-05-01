// src/context/WalletContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState('');

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError('Please install MetaMask.');
      return;
    }
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum); // ✅ v5
      const accounts = await provider.send('eth_requestAccounts', []);
      setWalletAddress(accounts[0]);
    } catch (err) {
      setError('User rejected wallet connection');
    }
  };

  useEffect(() => {
    // Auto-connect if already authorized
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
        if (accounts.length > 0) setWalletAddress(accounts[0]);
      });
    }
  }, []);

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet, error }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
