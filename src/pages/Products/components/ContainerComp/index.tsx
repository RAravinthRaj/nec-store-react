/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { SideDrawer } from "../../../../navigator/SideDrawer";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();

  return (
    <S.MainContainer>
      <S.Logo src={theme.images.logo} />
      <SideDrawer />
    </S.MainContainer>
  );
};
