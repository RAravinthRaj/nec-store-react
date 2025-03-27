/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Drawer from "@mui/material/Drawer";
import * as S from "./styles";
import { useTheme, useIsNotDesktop } from "../../hooks";
import { SIDE_DRAWER_CONFIG } from "./config";
import { Box } from "@mui/material";

export interface ISideDrawer {
  menu: boolean;
  toggleMenu: () => void;
}

export const SideDrawer = ({ menu, toggleMenu }: ISideDrawer) => {
  const theme = useTheme();
  const isMobile = useIsNotDesktop();

  const _renderHeaderSM = () => {
    if (isMobile) {
      return (
        <div>
          <S.Item>
            <S.Logo src={theme.images.logo} />
            <S.Title>{SIDE_DRAWER_CONFIG.title}</S.Title>
          </S.Item>
          <S.Divider />
        </div>
      );
    }
  };

  const _renderNavigationList = () => {
    return (
      <S.CustomList>
        {_renderHeaderSM()}
        {SIDE_DRAWER_CONFIG.retailerActions.map((item) => {
          return (
            <div key={item?.id}>
              <S.ItemContainer
                $hoverBgColor={theme.colors.primary}
                disablePadding
              >
                <S.SideDrawerLink
                  to={item?.link}
                  style={({ isActive }) => ({
                    color: isActive ? theme.colors.primary : "inherit",
                    display: "block",
                    width: "100%",
                  })}
                >
                  <S.Item>
                    <S.Icon
                      $bgColor={theme.colors.primary}
                      src={item?.imageSrc}
                    />
                    <S.ItemText primary={item?.title} />
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

  const _renderDrawer = () => {
    return (
      <S.DrawerBox onClick={isMobile ? toggleMenu : () => {}}>
        {_renderNavigationList()}
      </S.DrawerBox>
    );
  };

  if (isMobile) {
    return (
      <Box>
        <Drawer
          open={menu}
          onClose={toggleMenu}
          slotProps={{
            paper: {
              style: {
                width: "65%",
                backgroundColor: theme.colors.secondaryBackGround,
              },
            },
          }}
        >
          {_renderDrawer()}
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      open={true}
      variant="permanent"
      slotProps={{
        paper: {
          style: {
            marginTop: "73px",
            zIndex: 0,
            backgroundColor: theme.colors.secondaryBackGround,
          },
        },
      }}
      sx={{
        width: 240,
        zIndex: 0,
      }}
    >
      <Box sx={{ overflow: "auto" }}>{_renderDrawer()}</Box>
    </Drawer>
  );
};
