import React, {createContext, useCallback, useState} from 'react';

import api from '../services/api';

interface AuthState{
  token: string,
  user: Object;
}

interface SignInCredentials {
  email: string;
  password: string
}

interface AuthContextData {
  user: Object;
  signIn(credentials: SignInCredentials): Promise<void>
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@EmpireBarbers:token');
    const user = localStorage.getItem('@EmpireBarbers:token');

    if(token && user) {
      return {token, user: JSON.parse(user)}
    }

    return {} as AuthState;

  });

  const signIn = useCallback(async ({email, password}) => {
    const response = await api.post('/sessions', {
      email,
      password
    });

    const {token, user} = response.data;

    localStorage.setItem('@EmpireBarbers:token', token);
    localStorage.setItem('@EmpireBarbers:token', JSON.stringify(user));

    setData({token, user})

  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

