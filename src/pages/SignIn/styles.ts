import styled from 'styled-components';

import signBackgroundImg from '../../assets/sign-in-background.png';

import {shade} from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;
  align-items: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      display: block;
      color: #f4ede8;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }

    }
  }

  > a {
    display: block;
    color: #ff9000;
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;
    display: flex;
    align-items: center;


    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${signBackgroundImg}) no-repeat center;
  background-size: cover;

`;
