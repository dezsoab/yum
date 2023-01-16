import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserContext from "../store/UserContext";
import ProtectedRoute from "../route-protector/ProtectedRoute";

import Admin from "../pages/Admin";
import Feed from "../pages/Feed";
import Home from "../pages/Home";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/feed"
          element={
            <ProtectedRoute isAllowed={user} redirectPath="/">
              <Feed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAllowed={user && user.role === "ADMIN"}
              redirectPath="/"
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
