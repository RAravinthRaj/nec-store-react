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
  flex-wrap:wrap;
  padding : 20px 20px;
  box-shadow : 0px 2px 4px rgba(0,0,0,0.2);
  margin:30px 20px;
  border-radius:10px;
  transition : transform ease-in-out 0.2s;
  gap:40px;
  overflow-y: hidden;
 
  &:hover{
    transform : scale(1.05);
    box-shadow : 0px 4px 6px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    padding : 20px 10px;
    margin : 30px 15px;
  }

  @media (max-width: 576px) {
    padding : 15px 12px;
    margin : 20px 0;
    justify-self:center;
    align-self:center;


     &:hover{
      transform : scale(1);
      box-shadow : 0px 4px 8px rgba(0,0,0,0.5);
     }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 55%;
`;

export const TitleContainer = styled.h3`
  text-align: center;
  font-size: 30px;
  margin: 13px;

  @media (max-width: 576px) {
    font-size: 25px;
  }
`;

export const CategoryContainer = styled.h5<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  text-align: center;
  font-size: 14px;
  margin: 13px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ProductDes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuantityContainer = styled.h5`
  text-align: center;
  font-size: 14px;
  margin: 13px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const RupeeContainer = styled.h5`
  text-align: center;
  font-size: 14px;
  margin: 13px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Button = styled.button<{ $bgColor: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: center;
  border: none;
  font-size: 14px;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  gap: 3px;
  color: white;
  margin-top: 10px;

  @media (max-width: 768px) {
    padding: 5px 0;
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 576px) {
    padding: 5px 0;
    gap: 10px;
    font-size: 14px;
  }
`;

export const EditIcon = styled(FaPencilAlt)`
  color: white;
  font-size: 14px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const DeleteIcon = styled(ImBin)`
  color: white;
  font-size: 14px;

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
