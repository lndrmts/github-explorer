import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: Boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #a3a3a3;
    border: 1px solid #ffffff;
    ${(props) =>
      props.hasError &&
      css`
        border: 1px solid #c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  margin-top: 8px;
  display: block;
  color: #c53030;
`;
export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin-left: 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
