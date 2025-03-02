/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../hooks";
import * as S from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { SideDrawer } from "../../navigator/SideDrawer";
import { NAVBAR_CONFIG } from "./config";

export interface INavbar {}

export const Navbar = ({}: INavbar) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [menu, setMenu] = useState<boolean>(false);
  const [userMenu, setUserMenu] = useState<boolean>(false);

  const userOptions = ["View Profile", "Switch Role", "LogOut"];

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const toggleClick = () => {
    setUserMenu((userMenu) => !userMenu);
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

  const _userContainer = () => {
    return (
      <div>
        {!isMobile ? (
          <S.UserContainer onClick={() => toggleClick()}>
            <S.UserName $bgColor={theme.colors.primary}>
              Hii , Aravinth !!
            </S.UserName>
            <S.ImageBackGround>
              <S.UserImage src={theme.images.user}></S.UserImage>
            </S.ImageBackGround>
          </S.UserContainer>
        ) : (
          <S.UserContainer onClick={() => toggleClick()}>
            <S.ImageBackGround>
              <S.UserImage src={theme.images.user}></S.UserImage>
            </S.ImageBackGround>
          </S.UserContainer>
        )}
      </div>
    );
  };

  const _userOption = () => {
    return (
      <S.UserMenu $bgColor={theme.colors.secondaryBackGround}>
        {userOptions.map((option, key) => {
          const value = option.replace(/\s+/g, "").toLowerCase();
          return (
            <div>
              <S.UserOption>
                <S.UserIcon src={theme.images[value]}></S.UserIcon>
                <S.Title>{option}</S.Title>
              </S.UserOption>
              <S.Divider />
            </div>
          );
        })}
      </S.UserMenu>
    );
  };

  return (
    <div>
      <S.NavbarContainer $bgColor={theme.colors.secondaryOptional}>
        {_titleContainer()}
        {_userContainer()}
      </S.NavbarContainer>
      <SideDrawer menu={menu} toggleMenu={toggleMenu} />
      {userMenu && _userOption()}
    </div>
  );
};
