/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import Dropdown from "react-bootstrap/Dropdown";
import { ChangeEvent, useState } from "react";
import { SALES_CONFIG } from "../../config";
import { IoIosSearch } from "react-icons/io";

export interface ISearchBar {
  categories: any[];
  setPayload(payload: any): void;
  onSearchPress: () => void;
  onSortPress: (type: string) => void;
}

export const SearchBar = ({
  categories,
  setPayload,
  onSearchPress,
  onSortPress,
}: ISearchBar) => {
  const theme = useTheme();
  const [selectedCategoryName, setSelectedCategoryName] = useState(
    SALES_CONFIG.all
  );
  const categoriesWithAll = [{ id: "all", name: "All" }, ...categories];

  const _setSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev: any) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const _setFromDate = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev: any) => ({
      ...prev,
      from: e.target.value,
    }));
  };

  const _setToDate = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev: any) => ({
      ...prev,
      to: e.target.value,
    }));
  };
  const _setSearchCategory = (e: string | null) => {
    if (!e) return;

    const selectedCat = categoriesWithAll.find((cat) => cat.id === e);
    if (!selectedCat) {
      console.warn("Selected category not found:", e);
      return;
    }

    setSelectedCategoryName(selectedCat.name);

    setPayload((prev: any) => ({
      ...prev,
      categoryId: e === "all" ? "" : selectedCat.id,
    }));
  };

  const _renderCategoryDropDownTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.IconText $bgColor={theme.colors.textSecondary}>
          {selectedCategoryName.substring(0, 4)}
        </S.IconText>
        <S.DropDownIcon $bgColor={theme.colors.backGround} />
      </S.CustomToggle>
    );
  };

  const _renderCategoryDropDownMenu = () => {
    return (
      <S.CategoryDropDownMenu>
        {categoriesWithAll?.map((cat, id) => {
          return (
            <div key={id}>
              <Dropdown.Item key={cat?.id} eventKey={cat?.id}>
                {cat?.name}
              </Dropdown.Item>
              {id != categoriesWithAll.length - 1 && <S.Divider />}
            </div>
          );
        })}
      </S.CategoryDropDownMenu>
    );
  };

  const _showDropDown = () => {
    return (
      <S.CustomDropdown onSelect={_setSearchCategory}>
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
            placeholder={SALES_CONFIG.search}
            onChange={(e) => {
              _setSearchData(e);
            }}
          />
          <S.SearchButton title="press" onClick={onSearchPress}>
            <IoIosSearch size={25} />
          </S.SearchButton>
        </S.InputWrapper>
        <S.SortContainer>{_renderSortedOptions()}</S.SortContainer>
      </S.ActionItem>
    );
  };

  const _renderDate = () => {
    return (
      <S.Date>
        <S.FromDateContainer>
          <S.DateTitle>{SALES_CONFIG.from}</S.DateTitle>
          <S.DateInput
            type="date"
            onChange={(e) => {
              _setFromDate(e);
            }}
          />
        </S.FromDateContainer>
        <S.ToDateContainer>
          <S.DateTitle>{SALES_CONFIG.to}</S.DateTitle>
          <S.DateInput
            type="date"
            onChange={(e) => {
              _setToDate(e);
            }}
          />
        </S.ToDateContainer>
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
            <S.SortedDropdownItem
              $bgColor={theme.colors.primary}
              eventKey={item}
            >
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
      <S.CustomDropdown
        onSelect={(eventKey) => {
          if (eventKey !== null) {
            onSortPress(eventKey.includes("Asc") ? "ASC" : "DESC");
          }
        }}
      >
        {_renderSortedOptionsTitle()}
        {_renderSortedOptionsMenu()}
      </S.CustomDropdown>
    );
  };

  return _renderActionItems();
};
