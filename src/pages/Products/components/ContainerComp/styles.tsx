/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { Container } from "react-bootstrap";
import styled from "styled-components";

export const MainContainer = styled(Container)`
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const NavbarContainer = styled.div``;

export const SideDrawerContainer = styled.div``;
