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
import { ProductCard } from "../ProductCard";
import { PRODUCTS_CONFIG } from "../../config";
import { SideDrawer } from "../../../../navigator/SideDrawer";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:768px)");

  const [openItem, setOpenItem] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const sortedOptions = PRODUCTS_CONFIG.sortedOptions;

  const setAddModalShow = ($prop: boolean) => {
    setOpenItem($prop);
  };

  const setCategoryModalShow = ($prop: boolean) => {
    setOpenCategory($prop);
  };

  const handleFabClick = () => {
    setShowMobile(!showMobile);
  };

  const [menu, setMenu] = useState(false);

  const handleMenuToggle = (newMenuState: boolean) => {
    setMenu(newMenuState);
    console.log("Updated Menu State:", menu);
  };

  const category = ["All", "Stationary", "dshf", "dsfhdgs"];

  const [selectedCategory, setSelectedCategory] = useState(PRODUCTS_CONFIG.All);

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
        <S.ActionItem>
          <S.InputWrapper $bgColor={theme.colors.backGround}>
            {_showDropDown()}
            <S.Input type="input" placeholder="Search" />
            <S.SearchIcon
              $bgColor={theme.colors.backGround}
              onClick={() => selectProducts()}
            ></S.SearchIcon>
          </S.InputWrapper>
          <S.SortContainer>{_sortedOptions()}</S.SortContainer>
        </S.ActionItem>

        {!isMobile && (
          <S.ButtonContainer>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                setAddModalShow(true);
              }}
            >
              <S.AddIcon></S.AddIcon>
              {PRODUCTS_CONFIG.AddItemTitle}
            </S.Button>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                setCategoryModalShow(true);
              }}
            >
              <S.AddIcon></S.AddIcon> {PRODUCTS_CONFIG.AddCategoryTitle}
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
            <S.AddIcon></S.AddIcon>
            {PRODUCTS_CONFIG.AddItemTitle}
          </S.Button>
          <S.FabDivider />
          <S.Button
            $bgColor={theme.colors.primary}
            onClick={() => {
              setCategoryModalShow(true);
            }}
          >
            <S.AddIcon></S.AddIcon>
            {PRODUCTS_CONFIG.AddCategoryTitle}
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
      <S.UserContainer>
        <S.CustomDropdown>
          <S.CustomToggle $bgColor={theme.colors.backGround}>
            <S.SortIcon $bgColor={theme.colors.backGround}></S.SortIcon>
          </S.CustomToggle>
          <S.SortedDropdownMenu $bgColor={theme.colors.secondaryBackGround}>
            {sortedOptions.map((dept, index) => (
              <>
                <S.SortedDropdownItem
                  key={dept}
                  eventKey={dept}
                  $bgColor={theme.colors.primary}
                >
                  <S.SortedIconText>{dept}</S.SortedIconText>
                </S.SortedDropdownItem>
                {index !== sortedOptions.length - 1 && (
                  <S.NameDivider></S.NameDivider>
                )}
              </>
            ))}
          </S.SortedDropdownMenu>
        </S.CustomDropdown>
      </S.UserContainer>
    );
  };

  const products = [
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
    { Title: "Tag File", Category: "Stationary", Quantity: 10, MRP: 20 },
  ];
  const _products = () => {
    return (
      <S.ProductContainer>
        {products.map((product) => (
          <ProductCard individualProduct={product} />
        ))}
      </S.ProductContainer>
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
        {isMobile && _mobileActionItems()}
        {isMobile && _showMobileButton()}
        {_products()}
      </div>
    );
  };

  return (
    <div>
      <Navbar menu={menu} onToggleMenu={handleMenuToggle} />
      <S.BodyConatiner>
        <SideDrawer menu={menu} toggleMenu={() => handleMenuToggle(!menu)} />
        <S.PageContainer>{_mainContainerItems()}</S.PageContainer>
      </S.BodyConatiner>
    </div>
  );
};
