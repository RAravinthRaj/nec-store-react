/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useState } from "react";
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { ViewItemModal } from "../ViewItem";
import { HISTORY_CONFIG } from "../../config";

export interface IOrderCard {
  individualOrder: any;
}

export const OrderCard = ({ individualOrder }: IOrderCard) => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);

  const _renderTitle = () => {
    return (
      <S.TitleContainer $bgColor={theme.colors.primary}>
        <S.Title>
          {HISTORY_CONFIG.orderNumber}
          {individualOrder?.orderID}
        </S.Title>
      </S.TitleContainer>
    );
  };

  const _renderButton = () => {
    return (
      <S.ButtonContainer>
        <S.Button
          $bgColor={theme.colors.primary}
          onClick={() => setModal(true)}
        >
          <S.ViewIcon />
          {HISTORY_CONFIG.viewButton}
        </S.Button>
      </S.ButtonContainer>
    );
  };

  const _renderBody = () => {
    return (
      <S.BodyContainer>
        <S.OrderNameContainer>
          {HISTORY_CONFIG.orderBy}
          {individualOrder?.orderBy}
        </S.OrderNameContainer>
        <S.DateContainer>
          {HISTORY_CONFIG.date}
          {individualOrder?.date}
        </S.DateContainer>
        <S.RupeeContainer>
          {HISTORY_CONFIG.prMrp} {individualOrder?.totalAmount}
        </S.RupeeContainer>
        {_renderButton()}
      </S.BodyContainer>
    );
  };

  return (
    <div>
      <S.CardContainer>
        {_renderTitle()}
        {_renderBody()}
      </S.CardContainer>
      <ViewItemModal
        modalShow={modal}
        onClose={() => setModal(false)}
        products={individualOrder?.products}
        totalPrice={individualOrder?.totalAmount}
        paidStatus={individualOrder?.paidStatus}
        deliveryStatus={individualOrder?.deliveryStatus}
      />
    </div>
  );
};
