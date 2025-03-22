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

  const userOptions = ["View Profile", "Switch Role", "LogOut"];
  const navigationLinks = ["dashboard", "roles", ""];
  const toggleMenu = () => {
    const updatedMenuState = !menu;
    onToggleMenu(updatedMenuState);
  };

  const _titleContainer = () => {
    return (
      <S.TitleContainer>
        {!isMobile ? (
          <S.TitleContainer>
            <S.Logo src={theme.images.logo} />
            <S.TitleText>{NAVBAR_CONFIG.title}</S.TitleText>
          </S.TitleContainer>
        ) : (
          <S.Icon onClick={() => toggleMenu()}></S.Icon>
        )}
      </S.TitleContainer>
    );
  };

  const _userOptionsshowDropDown = () => {
    return (
      <S.UserContainer>
        <S.CustomDropdown>
          <S.CustomToggle $bgColor={theme.colors.backGround}>
            <S.ImageBackGround>
              <S.UserImage src={theme.images.user}></S.UserImage>
            </S.ImageBackGround>
          </S.CustomToggle>
          <S.DropdownMenu $bgColor={theme.colors.secondaryBackGround}>
            {isMobile && (
              <S.MobileNameContainer>
                <S.UserName $bgColor={theme.colors.primary}>
                  Hii Aravinth !!
                </S.UserName>
                <S.NameDivider></S.NameDivider>
              </S.MobileNameContainer>
            )}
            {userOptions.map((dept, index) => {
              const icon = dept.replace(/ /g, "").toLowerCase();
              const link = "/" + navigationLinks[index];
              return (
                <>
                  <S.DropdownItem
                    key={dept}
                    eventKey={dept}
                    $bgColor={theme.colors.primary}
                  >
                    <S.userNavigation to={link}>
                      <S.UserIcon src={theme.images[icon]}></S.UserIcon>
                      <S.IconText>{dept}</S.IconText>
                    </S.userNavigation>
                  </S.DropdownItem>
                  {index != userOptions.length - 1 && (
                    <S.NameDivider></S.NameDivider>
                  )}
                </>
              );
            })}
          </S.DropdownMenu>
        </S.CustomDropdown>
        {!isMobile && (
          <S.UserName $bgColor={theme.colors.primary}>
            Hii , Aravinth !!
          </S.UserName>
        )}
      </S.UserContainer>
    );
  };

  return (
    <div>
      <S.NavbarContainer $bgColor={theme.colors.secondaryOptional}>
        {_titleContainer()}
        {_userOptionsshowDropDown()}
      </S.NavbarContainer>
    </div>
  );
};
