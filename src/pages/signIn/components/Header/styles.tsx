/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const Frame = styled.div``;

export const HFrame = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 20px 20px 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
`;

export const Logo = styled.img`
  height: 12%;
  width: 12%;
`;

export const SignInImage = styled.img`
  height: 55%;
  width: 55%;
  align-self: center;
`;
