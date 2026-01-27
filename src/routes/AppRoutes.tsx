import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShopByCategory from '../pages/ShopByCategory';
import MyOrders from '../pages/MyOrders';
import SubscriptionBox from '../pages/SubscriptionBox';
import SavedTreasures from '../pages/SavedTreasures';
import HeritageStory from '../pages/HeritageStory';
import Settings from '../pages/Settings';
import CustomerSupport from '../pages/CustomerSupport';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopByCategory />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/subscription" element={<SubscriptionBox />} />
        <Route path="/saved" element={<SavedTreasures />} />
        <Route path="/heritage" element={<HeritageStory />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<CustomerSupport />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
