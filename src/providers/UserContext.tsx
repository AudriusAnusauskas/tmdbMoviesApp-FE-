// providers/UserContext.tsx

import React, { createContext, useState } from 'react';

interface UserContextProps {
  signedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps>({
  signedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);

  const login = (): void => setSignedIn(true);

  const logout = (): void => setSignedIn(false);

  return <UserContext.Provider value={{ signedIn, login, logout }}>{children}</UserContext.Provider>;
};
