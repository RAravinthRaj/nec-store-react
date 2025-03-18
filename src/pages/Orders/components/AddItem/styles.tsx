/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  padding: 50px;
  postion: absolute;
  top: 3%;

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

export const Button = styled.button<{ $bgColor: string }>`
  flex: 0.7;
  background-color: ${(props) => props?.$bgColor};
  color: white;
  border: none;
  height: 45px;
  margin: 30px;
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

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TitleBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props?.$bgColor};
  padding: 15px;
  border-radius: 10px;
  margin: 0 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 576px) {
    overflow-y: auto;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
  border-radius: 10px;
  margin: 5px 10px;

  @media (max-width: 576px) {
    overflow-y: auto;
  }
`;

export const TitleComp = styled.div`
  flex: 1;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    overflow-y: auto;
  }
`;

export const Divider = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.2);
  transform: scaleY(0.1);
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 768px) {
    margin: 10px 15px;
  }

  @media (max-width: 576px) {
    margin: 7px 10px;
  }
`;

export const BodyComponent = styled.div`
  margin: 10px;

  @media (max-width: 576px) {
    overflow-y: auto;
  }
`;

export const Amount = styled.h4`
  text-align: center;
  margin-top: 40px;
`;
