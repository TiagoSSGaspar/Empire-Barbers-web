import React, { FC } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import {Container, Toast} from './styles'

const ToastContainer: FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20}/>
        <div>
          <strong>Aconteceu um erro</strong>
          <p>não foi poassível fazer login na aplicação</p>
        </div>
        <button type="button" value="">
          <FiXCircle size={18}/>
        </button>
      </Toast>
      <Toast type="success" hasDescription={false} >
        <FiAlertCircle size={20}/>
        <div>
          <strong>Aconteceu um erro</strong>
        </div>
        <button type="button" value="">
          <FiXCircle size={18}/>
        </button>
      </Toast>
      <Toast  type="error" hasDescription>
        <FiAlertCircle size={20}/>
        <div>
          <strong>Aconteceu um erro</strong>
          <p>não foi poassível fazer login na aplicação</p>
        </div>
        <button type="button" value="">
          <FiXCircle size={18}/>
        </button>
      </Toast>
    </Container>
  );
}

export default ToastContainer;
