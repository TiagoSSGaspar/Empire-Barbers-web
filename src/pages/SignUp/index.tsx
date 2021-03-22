import React, {useCallback} from 'react';
import {FiMail, FiLock, FiUser, FiChevronLeft} from 'react-icons/fi';

import * as Yup from 'yup';

import {Form} from '@unform/web'

import logoImg from '../../assets/logo.jpeg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, Background } from './styles';

const SignUp:React.FC = () => {
  const handleSubmit = useCallback(async (data: Object) => {
    try {
      const shema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'mínimo de 6 digitos')
      });

      await shema.validate(data,{
        abortEarly: false,
      });
    } catch (error) {

    }
  }, []);

  return (
    <Container>
    <Background/>
    <Content>
      <img src={logoImg} alt="Empire Babers"/>
      <Form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome"/>
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Cadastrar</Button>
      </Form>

      <a href="createAccount">
        <FiChevronLeft/>
        Voltar para logon
      </a>
    </Content>
  </Container>
  );
};

export default SignUp;
