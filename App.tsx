import React from 'react';
import { AuthProvider } from './src/context/providers/AuthProvider';
import Navigation from './src/navigation';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
