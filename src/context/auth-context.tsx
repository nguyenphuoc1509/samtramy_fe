"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type AuthUser = {
  name: string;
  email?: string;
};

type AuthContextType = {
  user: AuthUser | null;
  isLoggedIn: boolean;
  openAuthPopup: (defaultMode?: "login" | "register") => void;
  closeAuthPopup: () => void;
  authPopupOpen: boolean;
  authPopupDefaultMode: "login" | "register";
  logout: () => void;
  login: (user: AuthUser) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AUTH_KEY = "samtramy_auth_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [authPopupOpen, setAuthPopupOpen] = useState(false);
  const [authPopupDefaultMode, setAuthPopupDefaultMode] = useState<"login" | "register">("login");

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem(AUTH_KEY);
      }
    }
  }, []);

  const openAuthPopup = useCallback((defaultMode: "login" | "register" = "login") => {
    setAuthPopupDefaultMode(defaultMode);
    setAuthPopupOpen(true);
  }, []);

  const closeAuthPopup = useCallback(() => {
    setAuthPopupOpen(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
  }, []);

  const login = useCallback((userData: AuthUser) => {
    setUser(userData);
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        openAuthPopup,
        closeAuthPopup,
        authPopupOpen,
        authPopupDefaultMode,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
