import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed";
import Home from "../pages/Home";
import UserContext from "../store/UserContext";
import "./App.css";
import ProtectedRoute from "../route-protector/ProtectedRoute";

function App() {
  const [token, setToken] = useState(null);
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/feed"
          element={
            <ProtectedRoute token={token} redirectPath="/">
              <Feed />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
