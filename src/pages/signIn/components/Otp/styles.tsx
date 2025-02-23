/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const OtpContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 20px 20px 0px 20px;

  @media (max-width: 768px) {
    gap: 8px;
    margin: 10px 10px 0px 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin: 10px 10px 0px 10px;
  }
`;

export const OtpInput = styled.input<{ $bgColor: string }>`
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  text-align: center;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 8px;
  outline: none;
  border: 0.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 8px;
  }
`;
