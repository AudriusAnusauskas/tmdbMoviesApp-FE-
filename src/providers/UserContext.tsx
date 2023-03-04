import React, { createContext, useState } from 'react';
import { LoginFormValues, login } from 'api/login';

interface UserContextProps {
  isAuthorized: boolean;
  token: string | null;
  login: (values: LoginFormValues) => Promise<void>;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps>({
  isAuthorized: false,
  token: null,
  login: () => Promise.resolve(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = async (values: LoginFormValues): Promise<void> => {
    try {
      const responseToken = await login(values);
      setToken(responseToken);
      setIsAuthorized(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = (): void => {
    setIsAuthorized(false);
    setToken(null);
  };

  return <UserContext.Provider value={{ isAuthorized, token, login: handleLogin, logout: handleLogout }}>{children}</UserContext.Provider>;
};
