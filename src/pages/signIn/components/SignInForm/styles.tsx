import styled from "styled-components";
import { GoMail } from "react-icons/go";

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 20px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 40px;
  }
`;

export const Text = styled.h1<{ $textColor: string }>`
  color: ${(props) => props?.$textColor};
  font-family: ${(props) => props?.$textColor};
  font-weight: semi-bold;
  font-size: 58px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const SubText = styled.h6<{ $textColor: string }>`
  color: ${(props) => props?.$textColor};
  font-size: 20px;
  opacity: 50%;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const EForm = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 20px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 350px;
  }
`;

export const InputWrapper = styled.div<{ $bgColor: string; $edit: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px 15px;
  width: 100%;
  max-width: 400px;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  font-size: 15px;
  background-color: ${(props) => props?.$bgColor};
  pointer-events: ${(props) => (props?.$edit ? "none" : "auto")};
  opacity: ${(props) => (props?.$edit ? "70%" : "80%")};

  @media (max-width: 480px) {
    max-width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 350px;
  }
`;

export const MailIcon = styled(GoMail)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 20px;
  margin-right: 10px;
`;

export const Input = styled.input<{ $bgColor: string }>`
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  flex: 1;
`;

export const Button = styled.button<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  color: white;
  border: none;
  padding: 7px;
  outline: none;
  width: 100%;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 12px;
  }
`;

export const SignUpText = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;

  @media (max-width: 480px) {
    font-size: 16px;
    flex-direction: column;
    gap: 10px;
  }
`;

export const SignUpSubText = styled.h6<{ $textColor: string }>`
  color: ${(props) => props?.$textColor};
  opacity: 50%;

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SignUpBold = styled.h6<{ $textColor: string }>`
  color: ${(props) => props?.$textColor};
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding-bottom: 3px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px; /* Thickness of the underline */
    width: 0;
    background-color: ${(props) => props?.$textColor}; /* Same color as text */
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Resend = styled.div<{ $textColor: string }>`
  color: ${(props) => props?.$textColor};
  font-size: 16px;
  opacity: 70%;

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ResendFrame = styled.div`
  align-self: flex-end;

  @media (max-width: 480px) {
    align-self: center;
    margin-top: 10px;
  }
`;
