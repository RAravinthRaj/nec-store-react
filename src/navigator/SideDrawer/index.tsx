/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as S from "./styles";
import { useTheme } from "../../hooks";
import { useState } from "react";

export const SideDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const theme = useTheme();

  const retailerActions = ["Products", "Orders", "Sales"];

  const [activeAction, setActiveAction] = useState<string | null>("Products");

  const handleClick = (role: string) => {
    setActiveAction((prev) => (prev === role ? null : role));
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <S.DrawerBox
      $bgColor={theme.colors.secondaryBackGround}
      sx={{ width: isMobile ? 200 : 250 }}
      role="presentation"
      onClick={isMobile ? toggleDrawer(false) : undefined}
    >
      <S.CustomList>
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
    </S.DrawerBox>
  );

  return (
    <div>
      {!isMobile ? (
        <Drawer open={true} variant="permanent">
          {DrawerList}
        </Drawer>
      ) : (
        <>
          <Button onClick={toggleDrawer(true)}>
            <GiHamburgerMenu />
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </>
      )}
    </div>
  );
};
