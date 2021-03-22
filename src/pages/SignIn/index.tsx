import React from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import logoImg from '../../assets/logo.jpeg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, Background } from './styles';

const SignIn:React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Empire Babers"/>
      <form >
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esquece minha Senha</a>
      </form>

      <a href="createAccount">
        <FiLogIn/>
        Criar conta
      </a>
    </Content>
    <Background/>
  </Container>
);

export default SignIn;