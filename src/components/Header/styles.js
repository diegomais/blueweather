import styled from 'styled-components';

export const Container = styled.header`
  padding: 0 12px;
  background: #0067af;
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
`;

export const Content = styled.nav`
  max-width: 1215px;
  margin: 12px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 191px;
    height: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  label {
    width: 450px;
    background-color: #fff;
    border-radius: 22px;
    margin: 0 12px;
    padding: 6px 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px) {
      width: 100%;
      margin: 6px 0;
    }

    input {
      height: 32px;
      width: 100%;
      border: 0;
      font-size: 16px;
      color: #666;
      ::placeholder {
        color: #999;
      }
    }

    img {
      margin-left: 6px;
      width: 16px;
      height: 16px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: 0;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }

  img {
    margin-right: 2px;
    width: 14px;
    height: 14px;
  }
`;
