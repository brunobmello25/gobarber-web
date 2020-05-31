import React from 'react';

import { GlobalStyle } from 'styles';
import { SignIn, SignUp } from 'pages';
import AppProvider from 'hooks';
import { ToastsContainer } from 'components';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <ToastsContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
