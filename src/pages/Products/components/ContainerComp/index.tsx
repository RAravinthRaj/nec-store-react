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
import IconButton from "@mui/material/IconButton";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();
  const isTab = useMediaQuery("(max-width:768px)");

  const [openItem, setOpenItem] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searchProductTitle, setSearchProductTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(PRODUCTS_CONFIG.All);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isRetailer = true;

  const category = ["All", "Stationary", "cosmetics", "household"];

  const _renderCategoryDropDownTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.IconText $bgColor={theme.colors.textSecondary}>
          {selectedCategory.substring(0, 3) + ".."}
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

  const _renderTopButton = () => {
    if (!isTab) {
      if (isRetailer) {
        return (
          <S.ButtonContainer>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                setOpenItem(true);
              }}
            >
              <S.AddIcon />
              {PRODUCTS_CONFIG.AddItemTitle}
            </S.Button>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                setOpenCategory(true);
              }}
            >
              <S.AddIcon /> {PRODUCTS_CONFIG.AddCategoryTitle}
            </S.Button>
          </S.ButtonContainer>
        );
      }

      return (
        <>
          <S.CartContainer $bgColor={theme.colors.backGround} to="/carts">
            <S.CartIcon />
          </S.CartContainer>
          <S.CartItemsCount $bgColor={theme.colors.primary} $isMobile={false}>
            <S.Count $bgColor={theme.colors.white}>20</S.Count>
          </S.CartItemsCount>
        </>
      );
    }
  };

  const _renderSearchBar = () => {
    return (
      <S.ActionItem>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          {_showDropDown()}
          <S.Input type="input" placeholder="Search" />
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

  const _renderFabButton = () => {
    if (isTab) {
      if (isRetailer) {
        return (
          <div>
            <Box sx={{ position: "fixed", bottom: 20, right: 20 }}>
              <IconButton
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                <S.PlusButtonContainer $bgColor={theme.colors.primary} />
              </IconButton>
            </Box>

            <S.FixedMenu
              open={open}
              onClose={() => {
                setAnchorEl(null);
              }}
              onClick={() => {
                setAnchorEl(null);
              }}
              $bgColor={theme.colors.white}
              disableScrollLock={true}
            >
              <S.StyledMenuItem
                onClick={() => {
                  setOpenItem(true);
                }}
              >
                <S.FabAddIcon />
                {PRODUCTS_CONFIG.AddItemTitle}
              </S.StyledMenuItem>
              <S.FabDivider />
              <S.StyledMenuItem
                onClick={() => {
                  setOpenCategory(true);
                }}
              >
                <S.FabAddIcon />
                {PRODUCTS_CONFIG.AddCategoryTitle}
              </S.StyledMenuItem>
            </S.FixedMenu>
          </div>
        );
      }

      return (
        <Box sx={{ position: "fixed", bottom: 15, right: 30 }}>
          <S.CartContainer $bgColor={theme.colors.backGround} to="/carts">
            <S.CartIcon />
          </S.CartContainer>
          <S.CartItemsCount $bgColor={theme.colors.primary} $isMobile={true}>
            <S.Count $bgColor={theme.colors.white}>20</S.Count>
          </S.CartItemsCount>
        </Box>
      );
    }
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
        {PRODUCTS_CONFIG.sortedOptions.map((dept, id) => (
          <div key={id}>
            <S.SortedDropdownItem $bgColor={theme.colors.primary}>
              <S.SortedIconText>{dept}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== PRODUCTS_CONFIG.sortedOptions.length - 1 && <S.Divider />}
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

  const _products = () => {
    return (
      <S.ProductContainer>
        {PRODUCTS_CONFIG.products.map((product, id) => (
          <ProductCard key={id} individualProduct={product} />
        ))}
      </S.ProductContainer>
    );
  };

  const _renderModals = () => {
    return (
      <div>
        <AddItemModal
          modalShow={openItem}
          onClose={() => {
            setOpenItem(false);
          }}
        />
        <AddCategoryModal
          modalShow={openCategory}
          onClose={() => {
            setOpenCategory(false);
          }}
        />
      </div>
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

  return (
    <S.MainContainer>
      <Navbar menu={menu} onToggleMenu={() => setMenu(!menu)} />
      <SideDrawer menu={menu} toggleMenu={() => setMenu(!menu)} />
      <S.StyledPageBox>{_mainContainerItems()}</S.StyledPageBox>
    </S.MainContainer>
  );
};
