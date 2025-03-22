/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme, useIsNotDesktop } from "../../hooks";
import * as S from "./styles";
import { NAVBAR_CONFIG } from "./config";

export interface INavbar {
  menu: boolean;
  onToggleMenu: (newMenuState: boolean) => void;
}

export const Navbar = ({ menu, onToggleMenu }: INavbar) => {
  const theme = useTheme();
  const isMobile = useIsNotDesktop();

  const _toggleMenu = () => {
    const updatedMenuState = !menu;
    onToggleMenu(updatedMenuState);
  };

  const _renderTitle = () => {
    if (!isMobile) {
      return (
        <S.TitleContainer>
          <S.Logo src={theme.images.logo} />
          <S.TitleText>{NAVBAR_CONFIG.title}</S.TitleText>
        </S.TitleContainer>
      );
    }

    return <S.Icon onClick={_toggleMenu}></S.Icon>;
  };

  const _renderUserName = () => {
    if (!isMobile) {
      return (
        <S.UserName $bgColor={theme.colors.primary}>
          Hii , Aravinth !!
        </S.UserName>
      );
    }

    return null;
  };

  const _renderUserNameSM = () => {
    if (isMobile) {
      return (
        <S.MobileNameContainer>
          <S.UserName $bgColor={theme.colors.primary}>
            Hii Aravinth !!
          </S.UserName>
          <S.NameDivider></S.NameDivider>
        </S.MobileNameContainer>
      );
    }

    return null;
  };

  const _renderDropDown = () => {
    return (
      <S.UserContainer>
        <S.CustomDropdown>
          <S.CustomToggle $bgColor={theme.colors.backGround}>
            <S.ImageBackGround>
              <S.UserImage src={theme.images.user}></S.UserImage>
            </S.ImageBackGround>
          </S.CustomToggle>
          <S.DropdownMenu $bgColor={theme.colors.secondaryBackGround}>
            {_renderUserNameSM()}
            {NAVBAR_CONFIG.navBarOptions.map((item, index) => {
              return (
                <>
                  <S.DropdownItem
                    key={item?.id}
                    eventKey={item?.id}
                    $bgColor={theme.colors.primary}
                  >
                    <S.userNavigation to={item?.link}>
                      <S.UserIcon src={item?.imageSrc}></S.UserIcon>
                      <S.IconText>{item?.title}</S.IconText>
                    </S.userNavigation>
                  </S.DropdownItem>
                  {index != NAVBAR_CONFIG.navBarOptions.length - 1 && (
                    <S.NameDivider />
                  )}
                </>
              );
            })}
          </S.DropdownMenu>
        </S.CustomDropdown>
        {_renderUserName()}
      </S.UserContainer>
    );
  };

  return (
    <S.NavbarContainer $bgColor={theme.colors.secondaryOptional}>
      <S.TitleContainer>{_renderTitle()}</S.TitleContainer>
      {_renderDropDown()}
    </S.NavbarContainer>
  );
};
