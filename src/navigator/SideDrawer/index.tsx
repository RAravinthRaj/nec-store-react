import Drawer from "@mui/material/Drawer";
import * as S from "./styles";
import { useTheme } from "../../hooks";
import { useState } from "react";
import { SIDEDRAW_CONFIG } from "./config";
import { useEffect } from "react";

export interface ISideDrawer {
  menu: boolean;
  toggleMenu: () => void;
}

export const SideDrawer = ({ menu, toggleMenu }: ISideDrawer) => {
  const theme = useTheme();

  const useIsNotDesktop = () => {
    const [isNotDesktop, setIsNotDesktop] = useState(
      window.matchMedia("(max-width: 1024px)").matches
    );

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 1024px)");

      const handleChange = () => setIsNotDesktop(mediaQuery.matches);

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return isNotDesktop;
  };

  const isMobile = useIsNotDesktop();

  const retailerActions = ["Products", "Orders", "Sales"];

  const _navigationlist = () => {
    return (
      <S.CustomList>
        {isMobile && (
          <div>
            <S.Item>
              <S.Logo src={theme.images.logo} />
              <S.Title>{SIDEDRAW_CONFIG.title}</S.Title>
            </S.Item>
            <S.Divider />
          </div>
        )}
        {retailerActions.map((text) => {
          const link = "/" + text.toLowerCase();

          return (
            <div>
              <S.ItemContainer
                $hoverbgColor={theme.colors.primary}
                disablePadding
              >
                <S.SideDrawerLink
                  to={link}
                  style={({ isActive }) => ({
                    color: isActive ? theme.colors.primary : "inherit",
                    display: "block",
                    width: "100%",
                  })}
                >
                  <S.Item>
                    <S.Icon
                      $bgColor={theme.colors.primary}
                      src={theme.images[text.toLowerCase()]}
                    />
                    <S.ItemText primary={text} />
                  </S.Item>
                </S.SideDrawerLink>
              </S.ItemContainer>
              <S.Divider />
            </div>
          );
        })}
      </S.CustomList>
    );
  };

  const DrawerList = (
    <S.DrawerBox
      $bgColor={theme.colors.secondaryBackGround}
      sx={{
        width: isMobile ? "45%" : 280,
      }}
      role="presentation"
      onClick={isMobile ? toggleMenu : undefined}
    >
      {_navigationlist()}
    </S.DrawerBox>
  );

  return (
    <div>
      {!isMobile ? (
        <Drawer
          open={true}
          variant="permanent"
          PaperProps={{
            style: {
              zIndex: 100,
              marginTop: !isMobile ? "73px" : "0px",
            },
          }}
        >
          {DrawerList}
        </Drawer>
      ) : (
        <Drawer open={menu} onClose={toggleMenu}>
          {DrawerList}
        </Drawer>
      )}
    </div>
  );
};
