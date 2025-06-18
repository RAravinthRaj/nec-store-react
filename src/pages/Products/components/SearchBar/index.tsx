/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { useMediaQuery } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";
import { ChangeEvent, useState } from "react";
import { AddItemModal } from "../AddItem";
import { AddCategoryModal } from "../AddCategory";
import { PRODUCTS_CONFIG } from "../../config";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { IoIosSearch } from "react-icons/io";
import { getUserDetails } from "../../../../utils";
import { ROLES } from "../../../../config";

export interface ISearchBarComp {
  categories: any[];
}

export const SearchBar = ({ categories }: ISearchBarComp) => {
  const theme = useTheme();
  const isTab = useMediaQuery("(max-width:768px)");
  const [openItem, setOpenItem] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [searchProductTitle, setSearchProductTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(PRODUCTS_CONFIG.all);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isRetailer = getUserDetails()?.role === ROLES.retailer;

  const categoriesWithAll = [{ id: "all", name: "All" }, ...categories];

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
        {categoriesWithAll?.map((cat, id) => {
          return (
            <div key={id}>
              <Dropdown.Item key={cat?.id} eventKey={cat?.name}>
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
              {PRODUCTS_CONFIG.addItemTitle}
            </S.Button>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                setOpenCategory(true);
              }}
            >
              <S.AddIcon /> {PRODUCTS_CONFIG.addCategoryTitle}
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
          <S.Input
            type="input"
            placeholder="Search"
            onChange={(e) => {
              _setSearchData(e);
            }}
          />
          <S.SearchButton title="press">
            <IoIosSearch size={25} />
          </S.SearchButton>
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
            <Box sx={{ position: "fixed", bottom: 25, right: 20 }}>
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
                {PRODUCTS_CONFIG.addItemTitle}
              </S.StyledMenuItem>
              <S.FabDivider />
              <S.StyledMenuItem
                onClick={() => {
                  setOpenCategory(true);
                }}
              >
                <S.FabAddIcon />
                {PRODUCTS_CONFIG.addCategoryTitle}
              </S.StyledMenuItem>
            </S.FixedMenu>
          </div>
        );
      }

      return (
        <Box sx={{ position: "fixed", bottom: 25, right: 20 }}>
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

  return (
    <>
      {_renderActionItems()}
      {_renderModals()}
      {_renderFabButton()}
    </>
  );
};
