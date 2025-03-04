/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

export const ModalContainer = styled(Modal)`
  width: 35%;
  display: flex;
  align-items: center;
  padding: 20px;
  postion: absolute;
  left: 32%;
`;

export const Title = styled(Modal.Title)`
  margin: 0 auto;
`;

export const Header = styled(Modal.Header)``;

export const CloseButton = styled(RxCross2)`
  position: absolute;
  right: -3%;
  transform: translateY(-160%);
  background: none;
  border: none;
  font-size: 38px;
  cursor: pointer;
  color: white;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  border-radius: 7px;
  padding: 10px 20px;
  display: flex;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  align-items: center;

  @media (max-width: 576px) {
    width: 100%;
    height: 45px;
  }

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  flex: 1;
`;

export const Icon = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover {
    background: none;
  }
`;

export const InputRounder = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 13px;
  flex: 1;
  gap: 10%;
`;

export const Button = styled.button<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  color: white;
  border: none;
  width: 60%;
  height: 45px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  letter-spacing: 0.6px;
  text-align: center;
  font-weight: 600;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 45px;
  }
`;

export const Footer = styled(Modal.Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
