"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { WineConsultPopup } from "./WineConsultPopup";

interface WinePopupContextValue {
  openPopup: () => void;
  closePopup: () => void;
}

const WinePopupContext = createContext<WinePopupContextValue>({
  openPopup: () => {},
  closePopup: () => {},
});

export function useWinePopup() {
  return useContext(WinePopupContext);
}

export function WinePopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = useCallback(() => setIsOpen(true), []);
  const closePopup = useCallback(() => setIsOpen(false), []);

  return (
    <WinePopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <WineConsultPopup isOpen={isOpen} onClose={closePopup} />
    </WinePopupContext.Provider>
  );
}
