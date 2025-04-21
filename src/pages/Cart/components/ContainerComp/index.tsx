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
import { CARTS_CONFIG } from "../../config";
import { RxCross2 } from "react-icons/rx";
import Swal, { SweetAlertIcon } from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import { VscCheck } from "react-icons/vsc";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CustomPagination } from "../../../../components/Pagination";

export interface IContainerComp {}

export const ContainerComp = ({}: IContainerComp) => {
  const theme = useTheme();
  const [menu, setMenu] = useState(false);
  const [searchProductTitle, setSearchProductTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(CARTS_CONFIG.all);

  const category = ["All", "Stationary", "cosmetics", "household"];

  const _setSearchDate = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchProductTitle(e.target.value);
  };

  const navigate = useNavigate();

  const _deleteItem = () => {
    Swal.fire({
      title: CARTS_CONFIG.swal.title,
      text: CARTS_CONFIG.swal.text,
      icon: CARTS_CONFIG.swal.icon as SweetAlertIcon,
      confirmButtonColor: theme.colors.primary,
      cancelButtonColor: theme.colors.cancel,
      color: theme.colors.swalButton,
      confirmButtonText: `${ReactDOMServer.renderToString(
        <VscCheck size={20} style={{ marginTop: "-2px", marginRight: "5px" }} />
      )} ${CARTS_CONFIG.swal.confirmButtonText} `,
      cancelButtonText: `${ReactDOMServer.renderToString(
        <RxCross2 size={19} style={{ marginTop: "-1px" }} />
      )} ${CARTS_CONFIG.swal.cancelButtonText}`,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: CARTS_CONFIG.swal.successTitle,
          text: CARTS_CONFIG.swal.successText,
          icon: CARTS_CONFIG.swal.successIcon as SweetAlertIcon,
          confirmButtonColor: theme.colors.primary,
          color: theme.colors.swalButton,
        });
      }
    });
  };

  const _orderPlaced = () => {
    toast.success(CARTS_CONFIG.orderPlaced);
    navigate("/products");
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
            placeholder={CARTS_CONFIG.search}
            onChange={(e) => {
              _setSearchDate(e);
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
        {CARTS_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem $bgColor={theme.colors.primary}>
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== CARTS_CONFIG.sortedOptions.length - 1 && <S.Divider />}
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
        {CARTS_CONFIG.salesItems.map((d, index) => (
          <div key={index}>
            <S.ItemBox key={index}>
              {Object.entries(d)?.map(([key, value], id) => {
                if (key === "Quantity") {
                  return (
                    <S.TitleComp key={id}>
                      <S.QuantityWrap
                        min="0"
                        defaultValue={value}
                        type="number"
                      />
                    </S.TitleComp>
                  );
                }
                return <S.TitleComp key={id}>{value}</S.TitleComp>;
              })}
              <S.CancelComp
                $bgColor={theme.colors.primary}
                onClick={_deleteItem}
              />
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
          {CARTS_CONFIG.title?.map((data, index) => (
            <S.TitleComp key={index}>{data}</S.TitleComp>
          ))}
        </S.TitleBox>
        <S.BodyComponent>{_renderSalesData()}</S.BodyComponent>
      </S.CartContainer>
    );
  };

  const _renderSalesFooter = () => {
    return (
      <S.FooterBox $bgColor={theme.colors.secondaryBackGround}>
        <S.FooterContent>{CARTS_CONFIG.prMRP}4500</S.FooterContent>
        <S.Button $bgColor={theme.colors.primary} onClick={_orderPlaced}>
          <S.DownloadIcon />
          {CARTS_CONFIG.placeButton}
        </S.Button>
      </S.FooterBox>
    );
  };

  const _mainContainerItems = () => {
    return (
      <div>
        {_renderActionItems()}
        {_renderSalesTab()}
        <CustomPagination />
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
