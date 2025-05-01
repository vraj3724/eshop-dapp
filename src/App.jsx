import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddProductPage from './pages/AddProductPage';
import Footer from './components/Footer';
import WelcomePage from './pages/WelcomePage';
import BuyProductPage from './pages/BuyProductPage';
import MyOrdersPage from './pages/MyOrdersPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/buy" element={<BuyProductPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
