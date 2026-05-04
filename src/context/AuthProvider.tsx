"use client";

import type { ReactNode } from "react";
import { AuthProvider as AuthContextProvider, useAuth } from "./auth-context";
import AuthPopup from "@/components/auth/AuthPopup";

function AuthPopupConsumer({ children }: { children: ReactNode }) {
  const { authPopupOpen, authPopupDefaultMode, closeAuthPopup } = useAuth();
  return (
    <>
      {children}
      <AuthPopup
        open={authPopupOpen}
        defaultMode={authPopupDefaultMode}
        onClose={closeAuthPopup}
      />
    </>
  );
}

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContextProvider>
      <AuthPopupConsumer>{children}</AuthPopupConsumer>
    </AuthContextProvider>
  );
}
