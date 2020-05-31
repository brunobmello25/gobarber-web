import React from 'react';

import { GlobalStyle } from 'styles';
import { SignIn, SignUp } from 'pages';
import AppProvider from 'hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
