import React, {createContext, useCallback, useContext, useState} from 'react';

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
  signOut(): void
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

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

  const signOut = useCallback(() => {
    localStorage.removeItem('@EmpireBarbers:token');
    localStorage.removeItem('@EmpireBarbers:token');

    setData({} as AuthState);
  },[]);

  return (
    <AuthContext.Provider value={{user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth():AuthContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an provider ')
  }

  return context;

}
