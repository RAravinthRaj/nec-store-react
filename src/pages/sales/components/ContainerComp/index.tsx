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
import { SideDrawer } from "../../../../navigator/sideDrawer";
import { SALES_CONFIG } from "../../config";
import { CustomPagination } from "../../../../components/Pagination";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();
  const [menu, setMenu] = useState(false);
  const [searchProductTitle, setSearchProductTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(SALES_CONFIG.all);

  const category = ["All", "Stationary", "cosmetics", "household"];

  const _setSearchDate = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchProductTitle(e.target.value);
  };

  const _renderCategoryDropDownTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.IconText $bgColor={theme.colors.textSecondary}>
          {selectedCategory.substring(0, 4)}
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
          <S.DateTitle>{SALES_CONFIG.from}</S.DateTitle>
          <S.DateInput type="date"></S.DateInput>
        </S.DateContainer>
        <S.DateContainer>
          <S.DateTitle>{SALES_CONFIG.to}</S.DateTitle>
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

  const _renderSalesTab = () => {
    return (
      <S.SalesContainer>
        <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
          {SALES_CONFIG.title?.map((data, index) => (
            <S.TitleComp key={index}>{data}</S.TitleComp>
          ))}
        </S.TitleBox>
        <S.BodyComponent>
          {SALES_CONFIG.salesItems.map((d, index) => (
            <div>
              <S.ItemBox key={index}>
                {Object.entries(d)?.map(([key, value], id) => (
                  <S.TitleComp key={id}>{value}</S.TitleComp>
                ))}
              </S.ItemBox>
              <S.SalesDivider />
            </div>
          ))}
        </S.BodyComponent>
      </S.SalesContainer>
    );
  };

  const _renderSalesFooter = () => {
    return (
      <S.FooterBox $bgColor={theme.colors.secondaryBackGround}>
        <S.FooterContent>{SALES_CONFIG.itemsSold}45</S.FooterContent>
        <S.FooterContent>{SALES_CONFIG.prMRP}4500</S.FooterContent>
        <S.Button $bgColor={theme.colors.primary}>
          <S.DownloadIcon />
          {SALES_CONFIG.downloadButton}
        </S.Button>
      </S.FooterBox>
    );
  };

  const _mainContainerItems = () => {
    return (
      <div>
        {_renderActionItems()}
        {_renderSalesTab()}
        <S.PaginationContainer>
          <CustomPagination />
        </S.PaginationContainer>
        {_renderSalesFooter()}
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
