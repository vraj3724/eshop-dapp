import { useWallet } from "../components/WalletContext";

const WelcomePage = () => {
  const { walletAddress, connectWallet, error } = useWallet();

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-purple-700 to-indigo-900 flex-col">
      <h1 className="text-4xl font-bold mb-4">Welcome to eShop DApp</h1>

      {!walletAddress ? (
        <>
          <p className="mb-2">Please connect your MetaMask wallet to continue</p>
          <button onClick={connectWallet} className="px-4 py-2 bg-yellow-400 text-black rounded">
            Connect Wallet
          </button>
        </>
      ) : (
        <div className="bg-white/10 p-4 rounded-xl text-center">
          <p className="text-green-300 mb-2">✅ Connected</p>
          <p className="text-sm break-all">{walletAddress}</p>
        </div>
      )}

      {error && <p className="text-red-400 mt-4">{error}</p>}
    </div>
  );
};

export default WelcomePage;