import React, { useState, useContext, createContext } from 'react';
import { Alert } from 'react-native';
import { AuthContextData } from '../interfaces/AuthContextData.interface';
import { LoginResponse } from '../interfaces/LoginResponse.interface';
import { LoginDto } from '../interfaces/LoginDto.interface';
import { UserDto } from '../interfaces/UserDto.interface';

import api from '../services/api';

/**
 * @Autor: Matheus Henrique Fernandes Justino
 */

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<LoginResponse | null>(null);

  const signIn = async (foundUser: LoginDto): Promise<void> => {
    try {
      const { data } = await api.post<LoginResponse>('/auth/login', foundUser);

      if (!data) {
        throw Error('Ops... Erro desconhecido');
      }

      if (data.response && data.response.error) {
        throw Error(data.message);
      }

      Alert.alert('Bem-vindo(a)', data.user.name, [{ text: 'Ok' }]);

      setUser(data);
    } catch (error) {
      Alert.alert(error.message, '', [{ text: 'Ok' }]);
    }
  };

  const signUp = async (foundUser: UserDto): Promise<void> => {
    try {
      const { data } = await api.post('/users', foundUser);

      Alert.alert('Usuário cadastrado', '', [{ text: 'Ok' }]);

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = (): void => {
    setUser(null);
  };

  const authContext = {
    signed: !!user,
    user,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
