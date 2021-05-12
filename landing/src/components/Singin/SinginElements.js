import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #fff;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  text-decoration: none;
  color: #fff;
  height: 50px;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.4);
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background-color: rgba(10, 10, 10, 0.8);
  max-width: 400px;

  width: 100%;
  z-index: 1;
  display: grid;
  margin: 20px auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    margin-top: 80px;
    width: 80%;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 20px;
  color: #fff;

  @media screen and (max-width: 400px) {
    margin-bottom: 0;
    font-size: 16px;
  }
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  @media screen and (max-width: 400px) {
    padding: 8px 8px;
    margin-bottom: 24px;
  }
`;

export const FormButton = styled.button`
  background: #dbd6a9;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    padding: 6px 0;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
