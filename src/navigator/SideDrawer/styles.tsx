/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Box from "@mui/material/Box";
import styled from "styled-components";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

export const DrawerBox = styled(Box)<{ $bgColor: string }>`
  height: 100%;
  background-color: ${(props) => props?.$bgColor};
`;

export const Icon = styled.img<{ $bgColor: string }>`
  height: 16%;
  width: 16%;
`;

export const Divider = styled.div`
  border: solid 0.5px black;
  width: 85%;
  margin: 0 15px;
`;

export const Item = styled(ListItemButton)`
  padding: 20px;
  gap: 10px;
`;

export const CustomList = styled(List)`
  margin-top: 2%;
`;

export const ItemText = styled(ListItemText)`
  .MuiTypography-root {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const ItemContainer = styled(ListItem)<{
  $hoverbgColor: string;
  $isActive: boolean;
}>`
  &:hover {
    ${Icon} {
      filter: invert(20%) sepia(94%) saturate(1500%) hue-rotate(220deg)
        brightness(80%) contrast(150%);
    }

    ${ItemText} {
      color: ${($props) => $props?.$hoverbgColor};
    }
  }

  ${({ $isActive, $hoverbgColor }) =>
    $isActive &&
    `
      ${Icon} {
        filter: invert(20%) sepia(94%) saturate(1500%) hue-rotate(220deg)
          brightness(80%) contrast(150%);
      }
  
      ${ItemText} {
        color: ${$hoverbgColor};
      }
      `};
`;
