import React from 'react';

import { GlobalStyle } from 'styles';
import { SignIn, SignUp } from 'pages';
import { AuthProvider } from 'contexts/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
