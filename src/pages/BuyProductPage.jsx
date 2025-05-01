import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { productContractAddress, productABI, orderContractAddress, orderABI } from '../utils/constants';

const getProductContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(productContractAddress, productABI, signer);
};

const getOrderContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(orderContractAddress, orderABI, signer);
};

const ethRate = 200000;

const BuyProductPage = () => {
  const [products, setProducts] = useState([]);
  const [processingId, setProcessingId] = useState(null);
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const showMessage = (message, type = 'success') => {
    setFeedback({ message, type });
    setTimeout(() => setFeedback({ message: '', type: '' }), 4000);
  };

  const loadProducts = async () => {
    try {
      const contract = getProductContract();
      const count = await contract.productCount();
      const temp = [];

      for (let i = 0; i < count; i++) {
        const product = await contract.products(i);
        temp.push(product);
      }
      setProducts(temp);
    } catch (error) {
      console.error(error);
      showMessage('❌ Failed to load products.', 'error');
    }
  };

  const buyProduct = async (productId, seller, priceInRupees) => {
    if (!window.ethereum) return showMessage("Please install MetaMask", "error");

    try {
      const contract = getOrderContract();
      const ethAmount = (priceInRupees / ethRate).toString();
      setProcessingId(productId);
      showMessage("⏳ Processing purchase...");

      const tx = await contract.buyProduct(seller, {
        value: ethers.utils.parseEther(ethAmount)
      });

      await tx.wait();
      setProcessingId(null);
      showMessage("✅ Purchase successful!", "success");
    } catch (error) {
      console.error(error);
      setProcessingId(null);
      showMessage("❌ Transaction failed.", "error");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Available Products</h1>

      {feedback.message && (
        <div className={`text-center mb-6 py-2 px-4 rounded ${feedback.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {feedback.message}
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => {
          const price = parseInt(product.price);
          const priceETH = (price / ethRate).toFixed(4);

          return (
            <div key={index} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="mb-1">₹{price} (~{priceETH} ETH)</p>
                <p className="text-sm text-gray-300 break-all">Seller: {product.owner}</p>
              </div>

              <button
                onClick={() => buyProduct(product.id, product.owner, price)}
                disabled={processingId === product.id}
                className={`mt-4 w-full py-2 rounded font-semibold transition ${processingId === product.id ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500 text-black'}`}
              >
                {processingId === product.id ? 'Processing...' : 'Buy Now'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyProductPage;
