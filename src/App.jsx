import { useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return loading ? <Loader onFinish={() => setLoading(false)} /> : <Home />;
}
