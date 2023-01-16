import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed";
import Home from "../pages/Home";
import UserContext from "../store/UserContext";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
