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
import Swal, { SweetAlertIcon } from "sweetalert2";
import { RxCross2 } from "react-icons/rx";
import ReactDOMServer from "react-dom/server";
import { VscCheck } from "react-icons/vsc";

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

  const _deleteItem = () => {
    Swal.fire({
      title: ORDERS_CONFIG.swal.title,
      text: ORDERS_CONFIG.swal.text,
      icon: ORDERS_CONFIG.swal.icon as SweetAlertIcon,
      confirmButtonColor: theme.colors.primary,
      cancelButtonColor: theme.colors.cancel,
      color: theme.colors.swalButton,
      confirmButtonText: `${ReactDOMServer.renderToString(
        <VscCheck size={20} style={{ marginTop: "-2px", marginRight: "5px" }} />
      )} ${ORDERS_CONFIG.swal.confirmButtonText} `,
      cancelButtonText: `${ReactDOMServer.renderToString(
        <RxCross2 size={19} style={{ marginTop: "-1px" }} />
      )} ${ORDERS_CONFIG.swal.cancelButtonText}`,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: ORDERS_CONFIG.swal.successTitle,
          text: ORDERS_CONFIG.swal.successText,
          icon: ORDERS_CONFIG.swal.successIcon as SweetAlertIcon,
          confirmButtonColor: theme.colors.primary,
          color: theme.colors.swalButton,
        });
      }
    });
  };

  const _renderTitle = () => {
    return (
      <S.TitleContainer $bgColor={theme.colors.primary}>
        <S.Title>
          {ORDERS_CONFIG.orderNumber}
          {individualOrder.OrderNumber}
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
        <S.Button $bgColor={theme.colors.primary} onClick={_deleteItem}>
          <S.DeleteIcon />
          {ORDERS_CONFIG.deleteButton}
        </S.Button>
      </S.ButtonContainer>
    );
  };

  const _renderBody = () => {
    return (
      <S.BodyContainer>
        <S.OrderNameContainer>
          {ORDERS_CONFIG.orderBy}
          {individualOrder.OrderBy}
        </S.OrderNameContainer>
        <S.DateContainer>
          {ORDERS_CONFIG.date}
          {individualOrder.Date}
        </S.DateContainer>
        <S.RupeeContainer>
          {ORDERS_CONFIG.prMrp} {individualOrder.Total}
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
      <ViewItemModal modalShow={modal} onClose={() => setModal(false)} />
    </div>
  );
};
