import React from 'react';
import {FiLogIn, FiMail, FiLock, FiUser, FiChevronLeft} from 'react-icons/fi';

import logoImg from '../../assets/logo.jpeg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, Background } from './styles';

const SignUp:React.FC = () => (
  <Container>
    <Background/>
    <Content>
      <img src={logoImg} alt="Empire Babers"/>
      <form >
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome"/>
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiMail} type="password" placeholder="Senha"/>

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="createAccount">
        <FiChevronLeft/>
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
