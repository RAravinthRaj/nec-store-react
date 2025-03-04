import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as S from "./styles";
import { useTheme } from "../../hooks";
import { useState } from "react";
import { SIDEDRAW_CONFIG } from "./config";

export interface ISideDrawer {
  menu: boolean;
  toggleMenu: () => void;
}

export const SideDrawer = ({ menu, toggleMenu }: ISideDrawer) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTab = useMediaQuery("(min-width: 559px)");
  const theme = useTheme();
  console.log(open);

  const retailerActions = ["Products", "Orders", "Sales"];

  const [activeAction, setActiveAction] = useState<string | null>("Products");

  const handleClick = (role: string) => {
    setActiveAction((prev) => (prev === role ? null : role));
  };

  const _navigationlist = () => {
    return (
      <S.CustomList>
        {isMobile && (
          <div>
            <S.Item>
              <S.Logo src={theme.images.logo}></S.Logo>
              <S.Title>{SIDEDRAW_CONFIG.title}</S.Title>
            </S.Item>
            <S.Divider />
          </div>
        )}
        {retailerActions.map((text, key) => {
          const currRole: any = text.toLowerCase();
          const isActive = activeAction === text;

          return (
            <div>
              <S.ItemContainer
                $hoverbgColor={theme.colors.primary}
                $isActive={isActive}
                key={text}
                disablePadding
                onClick={() => handleClick(text)}
              >
                <S.Item>
                  <S.Icon
                    src={theme.images[text.toLowerCase()]}
                    $bgColor={theme.colors.primary}
                  ></S.Icon>
                  <S.ItemText primary={text} />
                </S.Item>
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
        width: isTab ? 250 : 180,
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
