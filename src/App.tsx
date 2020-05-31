import React from 'react';

import { GlobalStyle } from 'styles';
import { SignIn, SignUp } from 'pages';
import { AuthProvider } from 'hooks/auth';

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
