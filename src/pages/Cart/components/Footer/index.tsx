/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import * as S from "./styles";
import { CARTS_CONFIG } from "../../config";
import { useTheme } from "../../../../hooks/useTheme.hook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const _orderPlaced = () => {
    toast.success(CARTS_CONFIG.orderPlaced);
    navigate("/products");
  };

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
