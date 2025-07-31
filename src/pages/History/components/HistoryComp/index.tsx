/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useMemo } from "react";
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { ChangeEvent, useState } from "react";
import { OrderCard } from "../OrderCard";
import { ORDERS_CONFIG } from "../../config";
import { Box, useMediaQuery } from "@mui/material";
import { getItemInLocalStorage } from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

export interface Order {
  orderID: string;
  orderBy: string;
  date: string;
  totalAmount: number;
  products: any[];
}

export interface GroupedOrdersByDate {
  date: string;
  orders: Order[];
}

export interface IContainerComp {
  orders: any[];
  payload: any;
  setPayload(payload: any): void;
  onSearchPress(): void;
  onSortPress(type: string): void;
}

export const HistoryComp = ({
  orders,
  setPayload,
  onSearchPress,
  onSortPress,
  payload,
}: IContainerComp) => {
  const theme = useTheme();
  const isTab = useMediaQuery("(max-width:768px)");

  const navigate = useNavigate();

  const [cartItemsCount, setCartItemsCount] = useState(() => {
    const products = getItemInLocalStorage("cartProducts");
    return Array.isArray(products) ? products.length : 0;
  });

  useEffect(() => {
    const updateCartCount = () => {
      const products = getItemInLocalStorage("cartProducts");
      setCartItemsCount(Array.isArray(products) ? products.length : 0);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, [navigate]);

  const sortedGroupedOrders: GroupedOrdersByDate[] = useMemo(() => {
    if (!Array.isArray(orders) || orders.length === 0) return [];

    const grouped = orders.reduce((acc: Record<string, Order[]>, order) => {
      const date = order?.date ?? "Invalid Date";
      if (!acc[date]) acc[date] = [];
      acc[date].push(order);
      return acc;
    }, {});

    return Object.entries(grouped)
      .map(([date, orders]) => ({ date, orders }))
      .sort((a, b) => {
        const toDate = (d: string) => {
          const [day, month, year] = d.split(".");
          return new Date(`${year}-${month}-${day}`);
        };

        return toDate(b.date).getTime() - toDate(a.date).getTime();
      });
  }, [orders]);

  const _setSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((payload: any) => ({
      ...payload,
      title: e.target.value,
    }));
  };

  const _renderFabButton = () => {
    if (isTab) {
      return (
        <Box sx={{ position: "fixed", bottom: 8, right: 20 }}>
          <S.CartContainer $bgColor={theme.colors.backGround} to="/carts">
            <S.CartIcon />
          </S.CartContainer>
          <S.CartItemsCount $bgColor={theme.colors.primary} $isMobile={true}>
            <S.Count $bgColor={theme.colors.white}>{cartItemsCount}</S.Count>
          </S.CartItemsCount>
        </Box>
      );
    }

    return (
      <>
        <S.CartContainer $bgColor={theme.colors.backGround} to="/carts">
          <S.CartIcon />
        </S.CartContainer>
        <S.CartItemsCount $bgColor={theme.colors.primary} $isMobile={false}>
          <S.Count $bgColor={theme.colors.white}>{cartItemsCount}</S.Count>
        </S.CartItemsCount>
      </>
    );
  };

  const _renderSearchBar = () => {
    return (
      <S.ActionItem>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.Input
            type="text"
            placeholder="Search By Order Number"
            value={payload.orderId || ""}
            onChange={(e) =>
              setPayload((prev: any) => ({
                ...prev,
                orderId: e.target.value,
              }))
            }
          />

          <S.SearchButton title="press" onClick={onSearchPress}>
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
        {_renderFabButton()}
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
        {ORDERS_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem
              $bgColor={theme.colors.primary}
              eventKey={item}
            >
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== ORDERS_CONFIG.sortedOptions.length - 1 && <S.Divider />}
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

  const _orders = () => {
    return (
      <S.SeparateOrder>
        {sortedGroupedOrders.map(({ date, orders }) => (
          <div key={date}>
            <S.OrderTitle>
              <S.DateContainer>{date}</S.DateContainer>
              <S.Line />
            </S.OrderTitle>
            <S.OrderContainer>
              {orders.map((order: any, index: number) => (
                <OrderCard key={index} individualOrder={order} />
              ))}
            </S.OrderContainer>
          </div>
        ))}
      </S.SeparateOrder>
    );
  };

  return (
    <>
      {_renderActionItems()}
      {_orders()}
    </>
  );
};
