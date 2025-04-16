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
import { USERS_CONFIG } from "../../config";
import { useNavigate } from "react-router-dom";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();
  const [menu, setMenu] = useState(false);
  const [searchProductTitle, setSearchProductTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(USERS_CONFIG.all);

  const navigate = useNavigate();

  const _setSearchData = (e: ChangeEvent<HTMLInputElement>) => {
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
        {USERS_CONFIG.category?.map((cat, id) => {
          return (
            <div key={id}>
              <Dropdown.Item key={cat} eventKey={cat}>
                {cat}
              </Dropdown.Item>
              {id != USERS_CONFIG.category.length - 1 && <S.Divider />}
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
        {USERS_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem $bgColor={theme.colors.primary}>
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== USERS_CONFIG.sortedOptions.length - 1 && <S.Divider />}
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

  const _renderSalesData = () => {
    return (
      <>
        {USERS_CONFIG.salesItems.map((d, index) => (
          <div>
            <S.ItemBox key={index}>
              {Object.entries(d)?.map(([key, value], id) => {
                if (key === "roles") {
                  return (
                    <S.TitleComp key={id}>
                      <S.Circle
                        $bgColor={theme.colors.red}
                        $isNotFirst={false}
                      />
                      <S.Circle
                        $bgColor={theme.colors.orange}
                        $isNotFirst={true}
                      />
                      <S.Circle
                        $bgColor={theme.colors.green}
                        $isNotFirst={true}
                      />
                    </S.TitleComp>
                  );
                }
                return <S.TitleComp key={id}>{value}</S.TitleComp>;
              })}
              <S.TitleComp>
                <S.Button
                  $bgColor={theme.colors.primary}
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  View / Edit
                </S.Button>
              </S.TitleComp>
            </S.ItemBox>
            <S.CartDivider />
          </div>
        ))}
      </>
    );
  };

  const _renderSalesTab = () => {
    return (
      <S.CartContainer>
        <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
          {USERS_CONFIG.title?.map((data, index) => (
            <S.TitleComp key={index}>{data}</S.TitleComp>
          ))}
        </S.TitleBox>
        <S.BodyComponent>{_renderSalesData()}</S.BodyComponent>
      </S.CartContainer>
    );
  };

  const _mainContainerItems = () => {
    return (
      <div>
        {_renderActionItems()}
        {_renderSalesTab()}
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
