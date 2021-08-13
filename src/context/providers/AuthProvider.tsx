import * as React from 'react';
import Firebase from '../../firebase';

// Context
type AuthStateContext = {
  user: Firebase.auth.UserCredential | null;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  signOut: () => void;
  error: string;
};

const INITIAL_CONTEXT_VALUE: AuthStateContext = {
  user: null,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
  error: '',
};

export const AuthContext = React.createContext<AuthStateContext>(
  INITIAL_CONTEXT_VALUE
);

// Provider

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = React.useState<Firebase.auth.UserCredential | null>(
    null
  );
  const [error, setError] = React.useState('');

  const signIn = async (email: string, password: string) => {
    try {
      const response: Firebase.auth.UserCredential =
        await Firebase.auth().signInWithEmailAndPassword(email, password);
      setUser(response);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp: () => {},
        signOut: () => {},
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
