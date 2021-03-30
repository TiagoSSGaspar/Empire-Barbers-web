import React, {useCallback, useRef} from 'react';
import {FiMail, FiLock, FiUser, FiChevronLeft} from 'react-icons/fi';

import getValidationErrors from '../../utils/getValidationErrors'

import * as Yup from 'yup';

import {FormHandles} from '@unform/core'
import {Form} from '@unform/web'

import logoImg from '../../assets/logo.jpeg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, Background } from './styles';
import { Link } from 'react-router-dom';
import { AnimationContainer } from '../SignIn/styles';

const SignUp:React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({});
      const shema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'mínimo de 6 digitos')
      });

      await shema.validate(data,{
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
    <Background/>
    <Content>
      <AnimationContainer>
        <img src={logoImg} alt="Empire Babers"/>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome"/>
          <Input name="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiChevronLeft/>
          Voltar para logon
        </Link>
      </AnimationContainer>
    </Content>
  </Container>
  );
};

export default SignUp;
