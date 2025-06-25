/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme, useIsNotDesktop } from "../../hooks";
import * as S from "./styles";
import { NAVBAR_CONFIG } from "./config";
import { Link, useNavigate } from "react-router-dom";
import { AppBar } from "@mui/material";
import { useEffect, useState } from "react";
import { getItemInLocalStorage, getUserDetails } from "../../utils";
import { Error } from "../Error";

export interface INavbar {
  menu: boolean;
  onToggleMenu: (newMenuState: boolean) => void;
  showHamburgerIcon: boolean;
}

export const Navbar = ({ menu, onToggleMenu, showHamburgerIcon }: INavbar) => {
  const theme = useTheme();
  const [userData, setUserData] = useState<any>({ name: "" });
  const isMobile = useIsNotDesktop();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUserData = getUserDetails();
    setUserData(currentUserData);
  }, []);

  const _toggleMenu = () => {
    const updatedMenuState = !menu;
    onToggleMenu(updatedMenuState);
  };

  const _onDropDownItemClick = (id: string, link: string) => {
    if (id === "switchRole") {
      const token = getItemInLocalStorage("token");
      navigate("/roles", {
        state: { token },
      });
      return;
    } else if (id === "logOut") {
      localStorage.removeItem("token");
    } else if (id === "profile") {
      navigate("/profile", {
        state: { id: userData?.id, prevPage: "navbar" },
      });
      return;
    }

    navigate(link);
  };

  const _renderTitle = () => {
    if (!isMobile) {
      return (
        <S.TitleContainer>
          <Link to="/">
            <S.Logo
              src={theme.images.logo}
              $isProfilePage={showHamburgerIcon}
            />
          </Link>
          <S.TitleText>{NAVBAR_CONFIG.title}</S.TitleText>
        </S.TitleContainer>
      );
    }

    if (!showHamburgerIcon) {
      return (
        <Link to="/">
          <S.Logo src={theme.images.logo} $isProfilePage={!showHamburgerIcon} />
        </Link>
      );
    }

    return <S.Icon onClick={_toggleMenu} $bgColor={theme.colors.primary} />;
  };

  const _renderUserName = () => {
    const firstName = userData?.name?.split(" ")[0] ?? "";
    if (!isMobile) {
      return (
        <S.UserName $bgColor={theme.colors.primary}>
          {`Hii, ${firstName} !!`}
        </S.UserName>
      );
    }

    return null;
  };

  const _renderUserNameSM = () => {
    const firstName = userData?.name?.split(" ")[0] ?? "";
    if (isMobile) {
      return (
        <S.MobileNameContainer>
          <S.UserName $bgColor={theme.colors.primary}>
            {`Hii, ${firstName} !!`}
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
        <S.UserImage
          src={userData?.profilePicture ?? theme.images.user}
        ></S.UserImage>
      </S.ImageBackGround>
    );
  };

  const _renderDropDownItem = () => {
    return NAVBAR_CONFIG.navBarOptions.map((item: any, index: number) => {
      return (
        <div key={item.id}>
          <S.DropdownItem
            onClick={() => _onDropDownItemClick(item.id, item.link)}
            $bgColor={theme.colors.primary}
          >
            <S.ItemIcon src={item.imageSrc} />
            <S.IconText>{item.title}</S.IconText>
          </S.DropdownItem>
          {index !== NAVBAR_CONFIG.navBarOptions.length - 1 && (
            <S.NameDivider />
          )}
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
