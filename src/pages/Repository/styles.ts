import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    &:hover {
      color: #777;
    }
  }
  svg {
    margin-right: 4px;
  }
`;
export const RepositoriesInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    @media (max-width: 799px) {
      flex-direction: column;
    }
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        margin-top: 4px;
        margin-top: 4px;
      }
    }
  }
`;
export const Issues = styled.div`
  margin-top: 80px;
  a {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;
    @media (max-width: 799px) {
      flex-direction: column;
    }
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
