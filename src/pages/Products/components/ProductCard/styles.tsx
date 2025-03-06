/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";

export const CardContainer = styled.div`
  display:flex:
  flex-direction : column;
  align-items : center;
  justify-content:center;
  padding : 20px 30px;
  box-shadow : 0px 2px 4px rgba(0,0,0,0.2);
  margin:30px 20px;
  border-radius:10px;
  width:80%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 45%;
`;

export const TitleContainer = styled.h3`
  text-align: center;
  font-size: 30px;
  margin: 13px;
`;

export const CategoryContainer = styled.h5<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  text-align: center;
  font-size: 14px;
  margin: 13px;
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
`;

export const RupeeContainer = styled.h5`
  text-align: center;
  font-size: 14px;
  margin: 13px;
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
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

  @media (max-width: 576px) {
    padding: 5px 0;
    gap: 10px;
  }
`;

export const EditIcon = styled(FaPencilAlt)`
  color: white;
  font-size: 16px;
`;

export const DeleteIcon = styled(ImBin)`
  color: white;
  font-size: 18px;
`;
