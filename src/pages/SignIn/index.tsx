import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logo from 'assets/logo.svg';
import { Container, Background, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form action="">
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="E-mail" name="" id="" />

          <input type="password" placeholder="Senha" name="" id="" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
