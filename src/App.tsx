import React from 'react';

import { GlobalStyle } from 'styles';
import { SignIn, SignUp } from 'pages';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
