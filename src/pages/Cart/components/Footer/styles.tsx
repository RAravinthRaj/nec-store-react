/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { GiShoppingCart } from "react-icons/gi";
import styled from "styled-components";

export const FooterContent = styled.div`
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const FooterBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: #d9d9d9;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0;
  width: 96%;
  z-index: 100;
  margin: 0 15px 20px 0;

  @media (max-width: 576px) {
    position: relative;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    border-radius: 10px;
    box-shadow: none;
    padding: 15px;
  }
`;

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

export const CartIcon = styled(GiShoppingCart)`
  color: white;
  font-size: 22px;
`;
