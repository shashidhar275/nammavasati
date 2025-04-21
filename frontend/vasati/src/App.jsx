import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Advertise from "./components/Advertise";
import AdDetails from "./components/AdDetails";
import SearchedPage from "./components/SearchedPage";
import AllAddetails from "./components/AllAddetails";
import Myads from "./components/Myads";
import Profile from "./components/Profile";
import Wishlist from "./components/Wishlist";
import Onmap from "./components/Onmap";
import Edit from "./components/Edit";
import ChatList from "./components/ChatList";
import ResetPasswordPage from "./components/ResetPasswordPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/AllAddetails" element={<AllAddetails />} />
        <Route path="/addetails/:adId" element={<AdDetails />} />
        <Route path="/searched/:search" element={<SearchedPage />} />
        <Route path="/myads" element={<Myads />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/onmap" element={<Onmap />} />
        <Route path="/edit-ad/:adId" element={<Edit />} />
        <Route path="/chatList" element={<ChatList />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
