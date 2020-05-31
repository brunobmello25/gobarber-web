import React from 'react';

import { GlobalStyle } from 'styles';
import { SignIn, SignUp } from 'pages';
import { AuthProvider } from 'hooks/auth';
import { ToastsContainer } from 'components';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastsContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
