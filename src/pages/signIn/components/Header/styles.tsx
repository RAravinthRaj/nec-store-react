/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const Frame = styled.div`
  padding: 30px;

  @media (max-width: 575px) {
    padding: 0px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 0px;
  }
`;

export const HFrame = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  width: 50%;
  border-radius: 10px;
  padding: 20px 20px 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;

  @media (max-width: 575px) {
    width: 100%;
    height: 50%;
    padding-bottom: 0px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    height: 50%;
    padding-bottom: 0px;
  }
`;

export const Logo = styled.img`
  height: 12%;
  width: 12%;
`;

export const SignInImage = styled.img`
  height: 65%;
  width: 65%;
  align-self: center;
  }
`;

// @media (min-width: 768px) and (max-width: 991px) {
//   width: 70%;
//   padding: 20px;
// }
