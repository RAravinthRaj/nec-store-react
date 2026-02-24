/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { SALES_CONFIG } from "../../config";

export interface IFooterComp {
  totalSold: string;
  totalAmount: number;
  getSalesReport: () => void;
}

export const Footer = ({
  totalAmount,
  totalSold,
  getSalesReport,
}: IFooterComp) => {
  const theme = useTheme();

  const _renderSalesFooter = () => {
    return (
      <S.FooterBox $bgColor={theme.colors.secondaryBackGround}>
        <S.FooterContent>
          {SALES_CONFIG.itemsSold}
          {totalSold}
        </S.FooterContent>
        <S.FooterContent>
          {SALES_CONFIG.prMRP}
          {Number(totalAmount).toFixed(2)}
        </S.FooterContent>
        <S.Button $bgColor={theme.colors.primary} onClick={getSalesReport}>
          <S.DownloadIcon />
          {SALES_CONFIG.downloadButton}
        </S.Button>
      </S.FooterBox>
    );
  };

  return _renderSalesFooter();
};
