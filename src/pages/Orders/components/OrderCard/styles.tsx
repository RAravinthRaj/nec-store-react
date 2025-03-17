/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { LiaCartArrowDownSolid } from "react-icons/lia";

export const CardContainer = styled.div`
  display:flex:
  flex-direction : column;
  align-items : center;
  justify-content:center;
  box-shadow : 0px 2px 4px rgba(0,0,0,0.2);
  margin:30px 20px;
  border-radius:10px;
  transition : transform ease-in-out 0.2s;
  width:300px;

  &:hover{
    transform : scale(1.10);
  }

  @media (max-width: 768px) {
    padding : 20px 10px;
    margin:30px 15px;
  }

  @media (max-width: 576px) {
    padding : 15px 13px;
    margin : 20px 0;
    justify-self:center;
    align-self:center;
  }
`;

export const BodyContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const TitleContainer = styled.div<{ $bgColor: string }>`
  text-align: center;
  background-color: ${(props) => props?.$bgColor};
  color: white;
  padding: 5px 5px;
  border-radius: 10px 10px 0 0;

  @media (max-width: 576px) {
    font-size: 25px;
  }
`;

export const Title = styled.div`
  text-align: center;
  color: white;
  margin: 12px;
  font-size: 16px;
  border-radius: 10px 10px 0 0;

  @media (max-width: 576px) {
    font-size: 25px;
  }
`;

export const OrderNameContainer = styled.h3`
  text-align: center;
  font-size: 16px;
  margin: 13px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const DateContainer = styled.h3`
  text-align: center;
  font-size: 16px;
  margin: 13px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const RupeeContainer = styled.h5`
  text-align: center;
  font-size: 16px;
  margin: 13px;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Button = styled.button<{ $bgColor: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 8px 0;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  gap: 12px;
  color: white;
  margin-top: 10px;

  @media (max-width: 576px) {
    padding: 5px 0;
    gap: 10px;
    font-size: 14px;
  }
`;

export const EditIcon = styled(FaPencilAlt)`
  color: white;
  font-size: 16px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const DeleteIcon = styled(ImBin)`
  color: white;
  font-size: 18px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const CartIcon = styled(LiaCartArrowDownSolid)`
  color: white;
  font-size: 23px;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;
