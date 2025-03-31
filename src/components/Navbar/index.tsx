/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme, useIsNotDesktop } from "../../hooks";
import * as S from "./styles";
import { NAVBAR_CONFIG } from "./config";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";

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
          <Link to="/products">
            <S.Logo src={theme.images.logo} />
          </Link>
          <S.TitleText>{NAVBAR_CONFIG.title}</S.TitleText>
        </S.TitleContainer>
      );
    }

    return <S.Icon onClick={_toggleMenu} $bgColor={theme.colors.primary} />;
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
            Hii , Aravinth !!
          </S.UserName>
          <S.UserNameDivider />
        </S.MobileNameContainer>
      );
    }

    return null;
  };

  const _renderUserImage = () => {
    return (
      <S.ImageBackGround>
        <S.UserImage src={theme.images.user}></S.UserImage>
      </S.ImageBackGround>
    );
  };

  const _renderDropDownItem = () => {
    return NAVBAR_CONFIG.navBarOptions.map((item, id) => {
      return (
        <div key={id}>
          <S.DropdownItem
            as={Link}
            to={item.link}
            $bgColor={theme.colors.primary}
          >
            <S.ItemIcon src={item?.imageSrc}></S.ItemIcon>
            <S.IconText>{item?.title}</S.IconText>
          </S.DropdownItem>
          {id != NAVBAR_CONFIG.navBarOptions.length - 1 && <S.NameDivider />}
        </div>
      );
    });
  };

  const _renderDropDownMenu = () => {
    return (
      <S.DropdownMenu $bgColor={theme.colors.white}>
        {_renderUserNameSM()}
        {_renderDropDownItem()}
      </S.DropdownMenu>
    );
  };

  const _renderDropDown = () => {
    return (
      <S.CustomDropdown
        title={_renderUserImage()}
        className="custom-nav-dropdown"
      >
        {_renderDropDownMenu()}
      </S.CustomDropdown>
    );
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 30 }}>
      <S.NavbarContainer $bgColor={theme.colors.secondaryOptional}>
        <S.TitleContainer>{_renderTitle()}</S.TitleContainer>
        <S.UserContainer>
          {_renderDropDown()}
          {_renderUserName()}
        </S.UserContainer>
      </S.NavbarContainer>
    </AppBar>
  );
};
