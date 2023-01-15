import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import "./App.css";
import Feed from "../pages/Feed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
