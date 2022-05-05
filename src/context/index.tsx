import { createContext, ReactNode, useContext } from "react";
import { ContextProps } from "interfaces";

const Global = createContext({} as ContextProps);

export const useGlobalContext = () => useContext(Global);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return <Global.Provider value={{}}>{children}</Global.Provider>;
};
export default GlobalProvider;
