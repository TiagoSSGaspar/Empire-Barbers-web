import React, { useCallback, useRef, useContext } from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import {AuthContext} from '../../context/AuthContext'

import * as Yup from 'yup';

import {FormHandles} from '@unform/core'
import {Form} from '@unform/web'

import logoImg from '../../assets/logo.jpeg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignFormData {
  email: string;
  password: string;
}

const SignIn:React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const {user, signIn} = useContext(AuthContext);

  console.log(user)

  const handleSubmit = useCallback(async (data: SignFormData) => {
    try {
      formRef.current?.setErrors({});
      const shema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória')
      });

      await shema.validate(data,{
        abortEarly: false,
      });
      signIn({
        email: data.email,
        password: data.password
      });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, [signIn]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Empire Babers"/>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esquece minha Senha</a>
        </Form>

        <a href="createAccount">
          <FiLogIn/>
          Criar conta
        </a>
      </Content>
      <Background/>
    </Container>
  )
};

export default SignIn;
