import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Loader from "./components/Loader";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";
import Portfolio from "./pages/Portfolio";
import AICoach from "./pages/AICoach";
import Discover from "./pages/Discover";
import Messages from "./pages/Messages";
import Wallet from "./pages/Wallet";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/ai-coach" element={<AICoach />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
