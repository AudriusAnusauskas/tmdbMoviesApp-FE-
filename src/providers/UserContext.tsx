import React, { createContext, useState } from 'react';

interface UserContextProps {
  signedIn: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps>({
  signedIn: false,
  token: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const login = (token: string): void => {
    setSignedIn(true);
    setToken(token);
  };

  const logout = (): void => {
    setSignedIn(false);
    setToken(null);
  };

  return <UserContext.Provider value={{ signedIn, token, login, logout }}>{children}</UserContext.Provider>;
};
