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
import { ORDERS_CONFIG } from "../../config";
import { toast } from "react-toastify";

export interface IOrderCard {
  individualOrder: {
    OrderNumber: string;
    OrderBy: string;
    Date: string;
    Total: number;
  };
}

export const OrderCard = ({ individualOrder }: IOrderCard) => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);

  const deleteItem = () => {
    toast.success(ORDERS_CONFIG.orderDeleted);
  };

  const _renderTitle = () => {
    return (
      <S.TitleContainer $bgColor={theme.colors.primary}>
        <S.Title>
          {ORDERS_CONFIG.OrderNumber}
          {individualOrder.OrderNumber}
        </S.Title>
      </S.TitleContainer>
    );
  };

  const _renderBody = () => {
    return (
      <S.BodyContainer>
        <S.OrderNameContainer>
          {ORDERS_CONFIG.OrderBy}
          {individualOrder.OrderBy}
        </S.OrderNameContainer>

        <S.DateContainer>
          {ORDERS_CONFIG.Date}
          {individualOrder.Date}
        </S.DateContainer>
        <S.RupeeContainer>
          {ORDERS_CONFIG.PrMRP} {individualOrder.Total}
        </S.RupeeContainer>
        <S.ButtonContainer>
          <S.Button
            $bgColor={theme.colors.primary}
            onClick={() => setModal(true)}
          >
            <S.ViewIcon></S.ViewIcon>
            {ORDERS_CONFIG.viewButton}
          </S.Button>
          <S.Button $bgColor={theme.colors.primary} onClick={deleteItem}>
            <S.DeleteIcon></S.DeleteIcon>
            {ORDERS_CONFIG.DeleteButton}
          </S.Button>
        </S.ButtonContainer>
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
      ></ViewItemModal>
    </div>
  );
};
