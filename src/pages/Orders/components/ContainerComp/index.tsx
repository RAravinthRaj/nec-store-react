/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { Navbar } from "../../../../components";
import Dropdown from "react-bootstrap/Dropdown";
import { ChangeEvent, useState } from "react";
import { OrderCard } from "../OrderCard";
import { ORDERS_CONFIG } from "../../config";
import { SideDrawer } from "../../../../navigator/SideDrawer";
export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();

  const [menu, setMenu] = useState(false);
  const [searchProductTitle, setSearchProductTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(ORDERS_CONFIG.All);

  const category = ["All", "Stationary", "cosmetics", "household"];

  const _setSearchData = (e: ChangeEvent<HTMLInputElement>) => {
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
              _setSearchData(e);
            }}
          />
        </S.InputWrapper>
        <S.SortContainer>{_renderSortedOptions()}</S.SortContainer>
      </S.ActionItem>
    );
  };

  const _renderActionItems = () => {
    return <S.ActionContainer>{_renderSearchBar()}</S.ActionContainer>;
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
        {ORDERS_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem $bgColor={theme.colors.primary}>
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== ORDERS_CONFIG.sortedOptions.length - 1 && <S.Divider />}
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

  const _orders = () => {
    return (
      <S.OrderContainer>
        {ORDERS_CONFIG.orders.map((order, id) => (
          <OrderCard key={id} individualOrder={order} />
        ))}
      </S.OrderContainer>
    );
  };

  const _mainContainerItems = () => {
    return (
      <div>
        {_renderActionItems()}
        {_orders()}
      </div>
    );
  };

  return (
    <S.MainContainer>
      <Navbar menu={menu} onToggleMenu={() => setMenu(!menu)} />
      <SideDrawer menu={menu} toggleMenu={() => setMenu(!menu)} />
      <S.StyledPageBox>{_mainContainerItems()}</S.StyledPageBox>
    </S.MainContainer>
  );
};
