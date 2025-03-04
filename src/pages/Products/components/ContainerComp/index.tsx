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
import { useState } from "react";
import { AddItemModal } from "../AddItem";
import { AddCategoryModal } from "../AddCategory";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:768px)");

  const [openItem, setOpenItem] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openSortedOptions, setOpenSortedOptions] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [selectedSortedOptions, setSelectedSortedOptions] = useState("");

  const sortedOptions = ["Sort By Title Asc", "Sort BY Title Desc"];

  const setAddModalShow = ($prop: boolean) => {
    setOpenItem($prop);
  };

  const setCategoryModalShow = ($prop: boolean) => {
    setOpenCategory($prop);
  };

  const openSortedOption = () => {
    setOpenSortedOptions(!openSortedOptions);
  };

  const handleClick = ($prop: string) => {
    setSelectedSortedOptions($prop);
    setOpenSortedOptions(!openSortedOptions);
  };

  const handleFabClick = () => {
    setShowMobile(!showMobile);
  };

  const category = ["All", "Stationary", "dshf", "dsfhdgs"];

  const [selectedCategory, setSelectedCategory] = useState("All");

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
        {!isMobile && (
          <S.ButtonContainer>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                setAddModalShow(true);
              }}
            >
              <S.AddIcon></S.AddIcon>Add Item
            </S.Button>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                setCategoryModalShow(true);
              }}
            >
              <S.AddIcon></S.AddIcon>Add Category
            </S.Button>
          </S.ButtonContainer>
        )}
      </S.ActionContainer>
    );
  };

  const _showMobileButton = () => {
    if (showMobile) {
      return (
        <S.FabButton $bgColor={theme.colors.primary}>
          <S.Button
            $bgColor={theme.colors.primary}
            onClick={() => {
              setAddModalShow(true);
            }}
          >
            <S.AddIcon></S.AddIcon>Add Item
          </S.Button>
          <S.FabDivider />
          <S.Button
            $bgColor={theme.colors.primary}
            onClick={() => {
              setCategoryModalShow(true);
            }}
          >
            <S.AddIcon></S.AddIcon>Add Category
          </S.Button>
        </S.FabButton>
      );
    }
    return null;
  };

  const _mobileActionItems = () => {
    return (
      <S.PlusButtonContainer
        $bgColor={theme.colors.primary}
        onClick={() => handleFabClick()}
      ></S.PlusButtonContainer>
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

  const _mainContainerItems = () => {
    return (
      <div>
        {_actionitems()}
        <AddItemModal
          modalshow={openItem}
          onClose={() => setAddModalShow(false)}
        ></AddItemModal>
        <AddCategoryModal
          modalshow={openCategory}
          onClose={() => setCategoryModalShow(false)}
        ></AddCategoryModal>
        {openSortedOptions && _sortedOptions()}
        {isMobile && _mobileActionItems()}
        {isMobile && _showMobileButton()}
      </div>
    );
  };

  return (
    <S.ProductContainer>
      <S.NavbarContainer>
        <Navbar />
      </S.NavbarContainer>
      <S.MainContainer>{_mainContainerItems()}</S.MainContainer>
    </S.ProductContainer>
  );
};
