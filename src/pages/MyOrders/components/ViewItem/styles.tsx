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
  justify-content: center;
  max-height: 92vh;
  margin-top: 35px !important;

  @media (max-width: 768px) {
    size: 180%;
  }

  @media (max-width: 576px) {
    max-height: 92vh;
    margin-top: 25px !important;
    .modal-dialog {
      padding: 13px !important;
      justify-content: center;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 10px 5px;
  max-height: 50vh;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    max-height: 55vh;
  }

  @media (max-width: 576px) {
    max-height: 50vh;
  }
`;

export const CloseButton = styled(RxCross2)`
  position: absolute;
  top: -8%;
  right: 0.5%;
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
  color: white;
  z-index: 2000;

  @media (max-width: 768px) {
    font-size: 32px;
    top: -7%;
  }

  @media (max-width: 576px) {
    font-size: 30px;
    top: -7%;
  }
`;

export const TitleBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props.$bgColor || "#fff"};
  padding: 18px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin: 0 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  min-width: 620px;
  position: sticky;
  top: 0;
  z-index: 1;
  isolation: isolate;

  @media (max-width: 576px) {
    min-width: 640px;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
  border-radius: 10px;
  margin: 5px 10px;
  min-width: 600px;
`;

export const TitleComp = styled.div`
  flex: 1;
  text-align: center;
  white-space: normal;
  min-width: 100px;
  padding: 0 5px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Button = styled.button<{ $bgColor: string }>`
  flex: 0.7;
  opacity: 0.5;
  background-color: ${(props) => props?.$bgColor};
  color: white;
  border: none;
  height: 45px;
  margin: 20px 30px;
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
  cursor: no-drop !important;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 85%;
    height: 45px;
    margin: 10px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Divider = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.2);
  transform: scaleY(0.1);
  min-width: 500px;
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 10px 20px;
    min-width: 560px;
  }

  @media (max-width: 576px) {
    margin: 7px 1px;
    min-width: 600px;
  }
`;

export const BodyComponent = styled.div`
  margin: 10px;
`;

export const Amount = styled.h4`
  text-align: center;
  margin-top: 20px;
`;
