/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { RxCrossCircled } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";
import { GrFormPreviousLink } from "react-icons/gr";

export const Button = styled.button<{ $bgColor: string }>`
  flex: 0.3;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  gap: 10px;
  color: white;

  @media (max-width: 576px) {
    padding: 12px;
    gap: 10px;
    font-size: 14px;
  }
`;

export const TitleBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props?.$bgColor};
  padding: 18px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  min-width: 620px;
  position: sticky;

  z-index: 1;

  @media (max-width: 768px) {
    min-width: 650px;
    font-size: 13px;
    padding: 18px 1px;
  }

  @media (max-width: 576px) {
    min-width: 650px;
    font-size: 13px;
    padding: 13px;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  border-radius: 10px;
  min-width: 620px;

  @media (max-width: 576px) {
    padding: 8px;
    min-width: 640px;
  }
`;

export const TitleComp = styled.div`
  flex: 1;
  text-align: center;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 8px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const CancelComp = styled(RxCrossCircled)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  cursor: pointer;
`;

export const QuantityContainer = styled.div<{ $bgColor: string }>`
  margin-left: -20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 140px;
  width: 100%;
  border-radius: 6px;
  gap: 4px;
  border: solid 1px ${(props) => props.$bgColor};

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

export const QuantityWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  min-width: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
    min-width: 40px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    min-width: 50px;
  }
`;

export const QuantityButton = styled.button<{ $bgColor: string }>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bgColor};
  font-size: 15px;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  border: solid 1px #000000;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 25px;
    height: 25px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    width: 25px;
    height: 25px;
  }
`;

export const Icon = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;

  &:hover {
    background: none;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CartContainer = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  max-height: 63vh;
  margin: 12px 0;

  @media (max-width: 768px) {
    max-height: 70vh;
  }

  @media (max-width: 576px) {
    max-height: 80vh;
  }
`;

export const CartDivider = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.2);
  transform: scaleY(0.9);
  min-width: 500px;
  margin: 5px;

  @media (max-width: 768px) {
    margin: 10px 20px;
    min-width: 560px;
  }

  @media (max-width: 576px) {
    margin: 7px 7px;
    min-width: 630px;
  }
`;

export const DownloadIcon = styled(GiShoppingCart)`
  color: white;
  font-size: 22px;
`;

export const PreviousPageLink = styled(GrFormPreviousLink)`
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid black;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  &:hover {
    background-color: #f0f0f0;
    border-color: #555;
    transform: scale(1.05);
  }

  &:active {
    background-color: #e0e0e0;
    transform: scale(0.95);
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    height: 32px;
    width: 32px;
  }

  @media (max-width: 576px) {
    height: 25px;
    width: 25px;
  }
`;

export const CartComp = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1300px) {
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const ImageWrap = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 8px;
`;
