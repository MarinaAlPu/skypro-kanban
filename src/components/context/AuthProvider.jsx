import { useState } from "react";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }) => {
  // const [token, setToken] = useState(JSON.parse(localStorage.getItem("userInfo"))?.token);

  function checkLs() {
    try {
      return localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
    } catch {
      return null
    }
  }

  const [user, setUser] = useState(checkLs());

  const updateUserInfo = (userData) => {
    setUser(userData);

    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    };

    return (
      <AuthContext.Provider value={{ user, updateUserInfo }}>
        {children}
      </AuthContext.Provider>
    )
  }
}