import React, { useCallback, useRef, useContext } from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import {useAuth} from '../../hooks/Auth'

import * as Yup from 'yup';

import {FormHandles} from '@unform/core'
import {Form} from '@unform/web'

import logoImg from '../../assets/logo.jpeg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/Toast';

interface SignFormData {
  email: string;
  password: string;
}

const SignIn:React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const {signIn} = useAuth();
  const {addToast} = useToast();

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
      await signIn({
        email: data.email,
        password: data.password
      });
    } catch (error) {

      if(error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }

      addToast();

    }
  }, [signIn, addToast]);

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
