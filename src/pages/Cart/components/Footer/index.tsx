/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import * as S from "./styles";
import { CARTS_CONFIG } from "../../config";
import { useTheme } from "../../../../hooks/useTheme.hook";
import { useEffect, useState } from "react";
import { getItemInLocalStorage } from "../../../../utils";
import { useSwalComp } from "../../../../components";

export interface IFooter {
  createOrder(): void;
}

export const Footer = ({ createOrder }: IFooter) => {
  const theme = useTheme();
  const [totalAmount, setTotalAmount] = useState<number>(
    getItemInLocalStorage("totalPrice") || 0
  );

  useEffect(() => {
    const handleCartUpdate = () => {
      const total = getItemInLocalStorage("totalPrice") || 0;
      setTotalAmount(total);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    handleCartUpdate();

    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const showSwal = useSwalComp();
  const _handlePlaceOrder = () => {
    showSwal({
      title: "Place Order",
      subtitle: "Are you sure you want to place order with these items?",
      type: "warning",
      confirmButtonText: "Yes, Place Order",
      cancelButtonText: "Cancel",
      onConfirmedPress: () => {
        createOrder();
      },
    });
  };

  return (
    <S.FooterBox $bgColor={theme.colors.secondaryBackGround}>
      <S.FooterContent>
        {CARTS_CONFIG.prMRP} {totalAmount}
      </S.FooterContent>
      <S.Button $bgColor={theme.colors.primary} onClick={_handlePlaceOrder}>
        <S.CartIcon />
        {CARTS_CONFIG.placeButton}
      </S.Button>
    </S.FooterBox>
  );
};
