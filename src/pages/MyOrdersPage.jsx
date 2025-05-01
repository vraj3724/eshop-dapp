import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWallet } from '../components/WalletContext';
import { orderContractAddress, orderABI } from '../utils/constants';

const MyOrdersPage = () => {
  const { walletAddress, connectWallet } = useWallet();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (walletAddress) {
      fetchOrders();
    }
  }, [walletAddress]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(orderContractAddress, orderABI, signer);
      const userOrders = await contract.getMyOrders();
      setOrders(userOrders || []);
    } catch (error) {
      console.error('❌ Failed to fetch orders:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!walletAddress) {
    return (
      <div className="text-center mt-20 text-xl text-gray-600">
        Please connect your wallet to view your orders. <br />
        <button
          onClick={connectWallet}
          className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

      {loading ? (
        <p className="text-center text-lg">Loading your orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          You haven't bought anything yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-2">Seller</h2>
              <p className="text-sm text-gray-700 break-all">{order?.seller || 'N/A'}</p>

              <h2 className="text-lg font-semibold mt-4">Amount</h2>
              <p className="text-sm text-gray-800">
                {order?.amount ? `${ethers.utils.formatEther(order.amount)} ETH` : '0 ETH'}
              </p>

              <h2 className="text-lg font-semibold mt-4">Date</h2>
              <p className="text-sm text-gray-600">
                {order?.timestamp
                  ? new Date(order.timestamp * 1000).toLocaleString()
                  : 'Unknown'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
