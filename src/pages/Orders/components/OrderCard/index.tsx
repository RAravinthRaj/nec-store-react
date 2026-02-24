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
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSwalComp } from "../../../../components";

export interface IOrderCard {
  individualOrder: any;
  cancelOrder: (orderId: string) => void;
  updateOrder: (
    orderId: string,
    deliveryStatus?: string,
    paidStatus?: string,
  ) => void;
}

export const OrderCard = ({
  individualOrder,
  cancelOrder,
  updateOrder,
}: IOrderCard) => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);

  const showSwal = useSwalComp();
  const _cancelOrder = () => {
    showSwal({
      title: "Cancel Order",
      subtitle: "Are you sure you want to cancel this order?",
      type: "warning",
      confirmButtonText: "Yes, Cancel Order",
      cancelButtonText: "Cancel",
      onConfirmedPress: () => {
        cancelOrder(individualOrder?.orderId);
      },
    });
  };

  const _renderTitle = () => {
    return (
      <S.TitleContainer $bgColor={theme.colors.primary}>
        <S.Title>
          {ORDERS_CONFIG.orderNumber}
          {individualOrder?.orderNumber}
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
          {ORDERS_CONFIG.viewButton}
        </S.Button>
        <S.Button $bgColor={theme.colors.primary} onClick={_cancelOrder}>
          <RiDeleteBin5Line />
          {ORDERS_CONFIG.cancelButton}
        </S.Button>
      </S.ButtonContainer>
    );
  };

  const _renderBody = () => {
    return (
      <S.BodyContainer>
        <S.OrderNameContainer>
          {ORDERS_CONFIG.orderBy}
          {individualOrder?.orderBy}
        </S.OrderNameContainer>
        <S.DateContainer>
          {ORDERS_CONFIG.date}
          {individualOrder?.date}
        </S.DateContainer>
        <S.RupeeContainer>
          {ORDERS_CONFIG.prMrp}{" "}
          {Number(individualOrder?.totalAmount).toFixed(2)}
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
        individualOrder={individualOrder}
        updateOrder={updateOrder}
      />
    </div>
  );
};
