/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { Navbar } from "../../../../components";
import { useMediaQuery } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";
import { ChangeEvent, useState } from "react";
import { SideDrawer } from "../../../../navigator/SideDrawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { SALES_CONFIG } from "../../config";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();

  const [openItem, setOpenItem] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searchProductTitle, setSearchProductTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(SALES_CONFIG.All);

  const category = ["All", "Stationary", "cosmetics", "household"];

  const _setSearchDate = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchProductTitle(e.target.value);
  };

  const _renderCategoryDropDownTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.IconText $bgColor={theme.colors.textSecondary}>
          {selectedCategory.substring(0, 3)}
        </S.IconText>
        <S.DropDownIcon $bgColor={theme.colors.backGround} />
      </S.CustomToggle>
    );
  };

  const _renderCategoryDropDownMenu = () => {
    return (
      <S.CategoryDropDownMenu>
        {category?.map((cat, id) => {
          return (
            <div key={id}>
              <Dropdown.Item key={cat} eventKey={cat}>
                {cat}
              </Dropdown.Item>
              {id != category.length - 1 && <S.Divider />}
            </div>
          );
        })}
      </S.CategoryDropDownMenu>
    );
  };

  const _showDropDown = () => {
    return (
      <S.CustomDropdown
        onSelect={(eventKey) => {
          if (eventKey !== null) setSelectedCategory(eventKey);
        }}
      >
        {_renderCategoryDropDownTitle()}
        {_renderCategoryDropDownMenu()}
      </S.CustomDropdown>
    );
  };

  const _renderSearchBar = () => {
    return (
      <S.ActionItem>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          {_showDropDown()}
          <S.Input
            type="input"
            placeholder="Search"
            onChange={(e) => {
              _setSearchDate(e);
            }}
          />
        </S.InputWrapper>
        <S.SortContainer>{_renderSortedOptions()}</S.SortContainer>
      </S.ActionItem>
    );
  };

  const _renderDate = () => {
    return (
      <S.Date>
        <S.DateContainer>
          <S.DateTitle>From</S.DateTitle>
          <S.DateInput type="date"></S.DateInput>
        </S.DateContainer>
        <S.DateContainer>
          <S.DateTitle>To</S.DateTitle>
          <S.DateInput type="date"></S.DateInput>
        </S.DateContainer>
      </S.Date>
    );
  };

  const _renderActionItems = () => {
    return (
      <S.ActionContainer>
        {_renderDate()}
        {_renderSearchBar()}
      </S.ActionContainer>
    );
  };

  const _renderSortedOptionsTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.SortIcon $bgColor={theme.colors.backGround} />
      </S.CustomToggle>
    );
  };

  const _renderSortedOptionsMenu = () => {
    return (
      <S.SortedDropdownMenu $bgColor={theme.colors.white}>
        {SALES_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem $bgColor={theme.colors.primary}>
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== SALES_CONFIG.sortedOptions.length - 1 && <S.Divider />}
          </div>
        ))}
      </S.SortedDropdownMenu>
    );
  };

  const _renderSortedOptions = () => {
    return (
      <S.CustomDropdown>
        {_renderSortedOptionsTitle()}
        {_renderSortedOptionsMenu()}
      </S.CustomDropdown>
    );
  };

  const _mainContainerItems = () => {
    return <div>{_renderActionItems()}</div>;
  };

  return (
    <S.MainContainer>
      <Navbar menu={menu} onToggleMenu={() => setMenu(!menu)} />
      <SideDrawer menu={menu} toggleMenu={() => setMenu(!menu)} />
      <S.StyledPageBox>{_mainContainerItems()}</S.StyledPageBox>
    </S.MainContainer>
  );
};
