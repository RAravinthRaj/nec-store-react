/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { SALES_CONFIG } from "../../config";

export interface ISalesComp {
  SalesDetails: any;
}

export const SalesComp = ({ SalesDetails }: ISalesComp) => {
  const theme = useTheme();

  const _renderItemField = (key: string, value: any, item: any) => {
    switch (key) {
      case "productImage":
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>
            <S.ImageWrap src={value ?? theme.images.defaultProductImage} />
          </S.TitleComp>
        );

      default:
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>{value}</S.TitleComp>
        );
    }
  };

  const _renderItemFields = (item: any) => {
    return (
      <>
        {Object.entries(item).map(([key, value]) =>
          _renderItemField(key, value, item)
        )}
      </>
    );
  };

  const _renderSalesData = () => {
    return (
      <>
        {SalesDetails.map((item: any, index: any) => {
          return (
            <div key={index}>
              <S.ItemBox>{_renderItemFields(item)}</S.ItemBox>
              <S.SalesDivider />
            </div>
          );
        })}
      </>
    );
  };

  const _renderSalesTab = () => {
    return (
      <S.SalesContainer>
        <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
          {SALES_CONFIG.title?.map((data, index) => (
            <S.TitleComp key={index}>{data}</S.TitleComp>
          ))}
        </S.TitleBox>
        {_renderSalesData()}
      </S.SalesContainer>
    );
  };

  return _renderSalesTab();
};
