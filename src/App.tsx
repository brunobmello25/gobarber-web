import React from 'react';

import { GlobalStyle } from 'styles';
import { SignIn, SignUp } from 'pages';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyle />
    </>
  );
};

export default App;
