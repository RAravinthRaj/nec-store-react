/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

//   --primary-color: ${theme.primaryColor};
//   --secondary-color: ${theme.secondaryColor};
//   --tertiary-color: ${theme.tertiaryColor};
//   --font-family: ${theme.fontFamily};

import { styled } from "styled-components";

export const LoaderWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);

  .back {
    stroke: var(--tertiary-color);
  }

  .front {
    stroke: var(--primary-color);
  }

  .text {
    color: var(--secondary-color);
  }
`;