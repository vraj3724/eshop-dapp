import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import { productContractAddress, productABI } from '../utils/constants';

const getProductContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(productContractAddress, productABI, signer);
};

const AddProductPage = () => {
  const [form, setForm] = useState({ name: '', price: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const navigate = useNavigate();

  const showMessage = (message, type = 'success') => {
    setFeedback({ message, type });
    setTimeout(() => setFeedback({ message: '', type: '' }), 4000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    if (!form.name || !form.price) {
      showMessage("Please fill in all fields", "error");
      return;
    }

    try {
      if (!window.ethereum) return showMessage("Please install MetaMask", "error");

      const contract = getProductContract();
      const tx = await contract.addProduct(form.name, parseInt(form.price));
      setIsLoading(true);
      await tx.wait();
      setIsLoading(false);

      showMessage("✅ Product added successfully!", "success");
      setForm({ name: '', price: '' });

      setTimeout(() => navigate('/'), 3000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      showMessage("❌ Failed to add product", "error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-800 to-pink-800 p-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6">🛠 Add Product</h2>

        {feedback.message && (
          <div className={`mb-4 text-center py-2 px-4 rounded ${feedback.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
            {feedback.message}
          </div>
        )}

        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Product Name"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-white text-black placeholder-gray-600"
        />
        <input
          type="number"
          name="price"
          value={form.price}
          placeholder="Price in ₹"
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded bg-white text-black placeholder-gray-600"
        />

        <button
          onClick={addProduct}
          disabled={isLoading}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded"
        >
          {isLoading ? "Adding..." : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProductPage;
