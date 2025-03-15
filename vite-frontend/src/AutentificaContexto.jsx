import { createContext, useState, useEffect } from "react";

export const AutentificaContexto = createContext();

export function AutentificaProvedor({ children }) {
  const [isAuthenticated, isAutentificado] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    isAutentificado(!!localStorage.getItem("token"));
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    isAutentificado(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    isAutentificado(false);
  };

  return (
    <AutentificaContexto.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AutentificaContexto.Provider>
  );
}
