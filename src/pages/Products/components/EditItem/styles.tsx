/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { Dropdown } from "react-bootstrap";

export const ModalContainer = styled(Modal)`
  width: 35%;
  display: flex;
  align-items: center;
  padding: 20px;
  postion: absolute;
  left: 32%;

  @media (max-width: 768px) {
    left: 15%;
    width: 70%;
  }

  @media (max-width: 576px) {
    left: 5%;
    width: 90%;
    height: 80%;
    top: 10%;
  }
`;

export const Title = styled(Modal.Title)`
  margin: 0 auto;

  media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Header = styled(Modal.Header)``;

export const CloseButton = styled(RxCross2)`
  position: absolute;
  right: 0.2%;
  transform: translateY(-160%);
  background: none;
  border: none;
  font-size: 38px;
  cursor: pointer;
  color: white;
  z-index: 2000;

  media (max-width: 768px) {
    transform: translateY(-170%);
  }

  @media (max-width: 576px) {
    transform: translateY(-190%);
    font-size: 25px;
    postion: fixed;
  }
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
    padding: 8px 15px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  flex: 1;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Icon = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover {
    background: none;
  }

  @media (max-width: 576px) {
    font-size: 14px;
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
    width: 85%;
    height: 45px;
  }
`;

export const Footer = styled(Modal.Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomToggle = styled(Dropdown.Toggle)<{ $bgColor: string }>`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 7px;

  padding: 0;
  margin: 0;
  --bs-btn-active-bg: none;
  --bs-btn-hover-bg: none;

  &::after {
    display: none;
  }
`;

export const CustomDropdown = styled(Dropdown)`
  margin-right: 17px;
`;

export const DropDownIcon = styled(SlArrowDown)<{
  $bgColor: string;
}>`
  color: rgba(0, 0, 0, 0.4);
  postion: fixed;
  font-size: 13px;
  margin-left: 500px;
`;

export const IconText = styled.div<{ $bgColor: string }>`
  color: ${(props) => props.$bgColor};

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const DropDownMenu = styled(Dropdown.Menu)`
  margin-left: 280px;
  margin-top: 10px;
  z-index: 1500;

  @media (max-width: 576px) {
    margin-left: 80px;
    width: 10%;
  }
`;
