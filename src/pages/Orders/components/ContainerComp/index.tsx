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
import { useState } from "react";
import { ViewItemModal } from "../ViewItem";
import { OrderCard } from "../OrderCard";
import { ORDERS_CONFIG } from "../../config";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();

  const [openItem, setOpenItem] = useState(false);
  const [openSortedOptions, setOpenSortedOptions] = useState(false);
  const [selectedSortedOptions, setSelectedSortedOptions] = useState("");

  const sortedOptions = ORDERS_CONFIG.sortedOptions;

  const setAddModalShow = ($prop: boolean) => {
    setOpenItem($prop);
  };

  const openSortedOption = () => {
    setOpenSortedOptions(!openSortedOptions);
  };

  const handleClick = ($prop: string) => {
    setSelectedSortedOptions($prop);
    setOpenSortedOptions(!openSortedOptions);
  };

  const category = ["All", "OrderNumber", "OrderBy"];

  const [selectedCategory, setSelectedCategory] = useState(ORDERS_CONFIG.All);

  const handleSelect = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedCategory(eventKey);
    }
  };

  const _showDropDown = () => {
    return (
      <S.CustomDropdown onSelect={handleSelect}>
        <S.CustomToggle $bgColor={theme.colors.backGround}>
          <S.IconText $bgColor={theme.colors.textSecondary}>
            {selectedCategory.substring(0, 4)}
          </S.IconText>
          <S.DropDownIcon $bgColor={theme.colors.backGround}></S.DropDownIcon>
        </S.CustomToggle>
        <S.DropDownMenu>
          {category.map((cat, index) => {
            return (
              <div>
                <Dropdown.Item key={cat} eventKey={cat}>
                  {cat}
                </Dropdown.Item>
              </div>
            );
          })}
        </S.DropDownMenu>
      </S.CustomDropdown>
    );
  };

  const _actionitems = () => {
    function selectProducts(): void {
      throw new Error("Function not implemented.");
    }

    return (
      <S.ActionContainer>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          {_showDropDown()}
          <S.Input type="input" placeholder="Search" />
          <S.SearchIcon
            $bgColor={theme.colors.backGround}
            onClick={() => selectProducts()}
          ></S.SearchIcon>
        </S.InputWrapper>
        <S.SortIcon
          $bgColor={theme.colors.backGround}
          onClick={() => openSortedOption()}
        ></S.SortIcon>
      </S.ActionContainer>
    );
  };

  const _sortedOptions = () => {
    return (
      <S.SortedNavigation $bgColor={theme.colors.secondaryBackGround}>
        {sortedOptions.map((option, index) => {
          const isActive = selectedSortedOptions === option;

          return (
            <div>
              <S.SortedSingleOption
                $hoverbgColor={theme.colors.primary}
                $isActive={isActive}
                key={option}
                onClick={() => handleClick(option)}
              >
                <S.UserOption>
                  <S.Title>{option}</S.Title>
                </S.UserOption>
              </S.SortedSingleOption>

              {index < sortedOptions.length - 1 && <S.Divider />}
            </div>
          );
        })}
      </S.SortedNavigation>
    );
  };

  const orders = [
    { OrderNumber: "2014", OrderBy: "2312070", Date: "23.05.25", Total: 420 },
    { OrderNumber: "2014", OrderBy: "2312070", Date: "23.05.25", Total: 420 },
    { OrderNumber: "2014", OrderBy: "2312070", Date: "23.05.25", Total: 420 },
    { OrderNumber: "2014", OrderBy: "2312070", Date: "23.05.25", Total: 420 },
    { OrderNumber: "2014", OrderBy: "2312070", Date: "23.05.25", Total: 420 },
  ];

  const _order = () => {
    return (
      <S.ProductContainer>
        {orders.map((order) => (
          <OrderCard individualOrder={order} />
        ))}
      </S.ProductContainer>
    );
  };

  const _mainContainerItems = () => {
    return (
      <div>
        {_actionitems()}
        <ViewItemModal
          modalshow={openItem}
          onClose={() => setAddModalShow(false)}
        ></ViewItemModal>
        {openSortedOptions && _sortedOptions()}
        {_order()}
      </div>
    );
  };

  return (
    <S.MainContainer>
      <S.NavbarContainer>
        <Navbar
          menu={false}
          onToggleMenu={function (newMenuState: boolean): void {
            throw new Error("Function not implemented.");
          }}
        />
      </S.NavbarContainer>
      <S.PageContainer>{_mainContainerItems()}</S.PageContainer>
    </S.MainContainer>
  );
};
