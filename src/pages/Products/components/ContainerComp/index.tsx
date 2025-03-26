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
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:768px)");

  const [openItem, setOpenItem] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searchProductTitle, setSearchProductTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(PRODUCTS_CONFIG.All);

  const setAddModalShow = ($prop: boolean) => {
    setOpenItem($prop);
  };

  const setCategoryModalShow = ($prop: boolean) => {
    setOpenCategory($prop);
  };

  const handleMenuToggle = (newMenuState: boolean) => {
    setMenu(newMenuState);
  };

  const selectProductTitle = (e: any) => {
    setSearchProductTitle(e.target.value);
  };

  const category = ["All", "Stationary", "cosmetics", "household"];

  const handleSelect = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedCategory(eventKey);
    }
  };

  const _renderCategoryDropDownTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.IconText $bgColor={theme.colors.textSecondary}>
          {selectedCategory.substring(0, 4)}
        </S.IconText>
        <S.DropDownIcon $bgColor={theme.colors.backGround}></S.DropDownIcon>
      </S.CustomToggle>
    );
  };

  const _renderCategoryDropDownMenu = () => {
    return (
      <S.CategoryDropDownMenu>
        {category.map((cat, id) => {
          return (
            <div key={id}>
              <Dropdown.Item key={cat} eventKey={cat}>
                {cat}
              </Dropdown.Item>
            </div>
          );
        })}
      </S.CategoryDropDownMenu>
    );
  };

  const _showDropDown = () => {
    return (
      <S.CustomDropdown onSelect={handleSelect}>
        {_renderCategoryDropDownTitle()}
        {_renderCategoryDropDownMenu()}
      </S.CustomDropdown>
    );
  };

  const _renderTopButton = () => {
    if (!isMobile) {
      return (
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
      );
    }
  };

  const _renderSearchBar = () => {
    return (
      <S.ActionItem>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          {_showDropDown()}
          <S.Input type="input" placeholder="Search" />
          <S.SearchIcon
            $bgColor={theme.colors.backGround}
            onChange={(e) => selectProductTitle(e)}
          ></S.SearchIcon>
        </S.InputWrapper>
        <S.SortContainer>{_renderSortedOptions()}</S.SortContainer>
      </S.ActionItem>
    );
  };

  const _renderActionItems = () => {
    return (
      <S.ActionContainer>
        {_renderSearchBar()}
        {_renderTopButton()}
      </S.ActionContainer>
    );
  };

  const _renderFabButtonDropDownMenu = () => {
    return (
      <S.FabDropDownMenu>
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
      </S.FabDropDownMenu>
    );
  };

  const _renderFabButtonDropDown = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.PlusButtonContainer
          $bgColor={theme.colors.primary}
        ></S.PlusButtonContainer>
      </S.CustomToggle>
    );
  };

  const _renderFabButton = () => {
    if (isMobile) {
      return (
        <S.CustomDropdown onSelect={handleSelect}>
          {_renderFabButtonDropDown()}
          {_renderFabButtonDropDownMenu()}
        </S.CustomDropdown>
      );
    }
  };

  const _renderSortedOptionsTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.SortIcon $bgColor={theme.colors.backGround}></S.SortIcon>
      </S.CustomToggle>
    );
  };

  const _renderSortedOptionsMenu = () => {
    return (
      <S.SortedDropdownMenu $bgColor={theme.colors.secondaryBackGround}>
        {PRODUCTS_CONFIG.sortedOptions.map((dept, index) => (
          <>
            <S.SortedDropdownItem
              key={dept}
              eventKey={dept}
              $bgColor={theme.colors.primary}
            >
              <S.SortedIconText>{dept}</S.SortedIconText>
            </S.SortedDropdownItem>
            {index !== PRODUCTS_CONFIG.sortedOptions.length - 1 && (
              <S.NameDivider />
            )}
          </>
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

  const _products = () => {
    return (
      <S.ProductContainer>
        {PRODUCTS_CONFIG.products.map((product) => (
          <ProductCard individualProduct={product} />
        ))}
      </S.ProductContainer>
    );
  };

  const _renderModals = () => {
    return (
      <>
        <AddItemModal
          modalShow={openItem}
          onClose={() => setAddModalShow(false)}
        ></AddItemModal>
        <AddCategoryModal
          modalShow={openCategory}
          onClose={() => setCategoryModalShow(false)}
        ></AddCategoryModal>
      </>
    );
  };

  const _mainContainerItems = () => {
    return (
      <div>
        {_renderActionItems()}
        {_renderModals()}
        {_renderFabButton()}
        {_products()}
      </div>
    );
  };

  const _renderNavbar = () => {
    return (
      <AppBar position="fixed" sx={{ zIndex: 30 }}>
        <Navbar menu={menu} onToggleMenu={handleMenuToggle} />
      </AppBar>
    );
  };

  const _renderSideDrawer = () => {
    if (!isMobile) {
      return (
        <Drawer
          variant="permanent"
          sx={{
            width: PRODUCTS_CONFIG.drawerWidth,
            zIndex: 0,
          }}
        >
          <Box sx={{ overflow: "auto" }}>
            <SideDrawer
              menu={menu}
              toggleMenu={() => handleMenuToggle(!menu)}
            />
          </Box>
        </Drawer>
      );
    }

    return (
      <Drawer variant="persistent">
        <Box sx={{ overflow: "auto" }}>
          <SideDrawer menu={menu} toggleMenu={() => handleMenuToggle(!menu)} />
        </Box>
      </Drawer>
    );
  };

  const _renderPage = () => {
    if (!isMobile) {
      return (
        <Box sx={{ flexGrow: 1, mt: 8, p: 4, alignItems: "center" }}>
          {_mainContainerItems()}
        </Box>
      );
    }

    return (
      <Box sx={{ flexGrow: 1, mt: 10, p: 2, alignItems: "center" }}>
        {_mainContainerItems()}
      </Box>
    );
  };

  return (
    <div>
      <Box sx={{ display: "flex", p: 2, zIndex: 0 }}>
        {_renderNavbar()}
        {_renderSideDrawer()}
        {_renderPage()}
      </Box>
    </div>
  );
};
