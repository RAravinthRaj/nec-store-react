/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledPageBox = styled(Box)<{ $isProfilePage: boolean }>`
  margin-top: ${({ $isProfilePage }) => (!$isProfilePage ? "25px" : "70px")};
  width: 100vw;
  padding: ${({ $isProfilePage }) => (!$isProfilePage ? "0px" : "10px")};
  padding-bottom: 0;

  @media (max-width: 768px) {
    margin-top: ${({ $isProfilePage }) => (!$isProfilePage ? "40px" : "80px")};
  }

  @media (max-width: 576px) {
    padding: 8px;
    margin-top: ${({ $isProfilePage }) => (!$isProfilePage ? "20px" : "50px")};
  }
`;

export const MainContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  padding-bottom: 0;

  @media (max-width: 768px) {
    padding: 12px;
    padding-top: 0px;
  }

  @media (max-width: 576px) {
    padding: 0;
    margin-top: 15px;
    justify-content: center;
  }
`;
