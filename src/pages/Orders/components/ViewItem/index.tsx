/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { ORDERS_CONFIG } from "../../config";
import { toast } from "react-toastify";
import { useState } from "react";

export interface IAddItem {
  modalShow: boolean;
  onClose: () => void;
}

export const ViewItemModal = ({ modalShow: modalShow, onClose }: IAddItem) => {
  const theme = useTheme();

  const [activeDeliver, setActiveDeliver] = useState(false);

  const activeDeliverStatus = () => {
    if (activeDeliver === false) {
      toast.success(ORDERS_CONFIG.amountReceived);
    }
    setActiveDeliver(true);
  };

  const productDelivered = () => {
    if (activeDeliver === true) {
      toast.success(ORDERS_CONFIG.productDelivered);
    }
    setActiveDeliver(false);
  };

  const _renderBody = () => {
    return (
      <Modal.Body as={S.ModalBody}>
        <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
          <S.TitleComp>{ORDERS_CONFIG.Serial}</S.TitleComp>
          <S.TitleComp>{ORDERS_CONFIG.ProductName}</S.TitleComp>
          <S.TitleComp>{ORDERS_CONFIG.Quantity}</S.TitleComp>
          <S.TitleComp>{ORDERS_CONFIG.MRP}</S.TitleComp>
        </S.TitleBox>
        <S.BodyComponent>
          {ORDERS_CONFIG.orderItems.map((d, index) => (
            <div>
              <S.ItemBox key={index}>
                <S.TitleComp>{d.No}</S.TitleComp>
                <S.TitleComp>{d.Pname}</S.TitleComp>
                <S.TitleComp>{d.Quantity}</S.TitleComp>
                <S.TitleComp>{d.Price}</S.TitleComp>
              </S.ItemBox>
              <S.Divider />
            </div>
          ))}
        </S.BodyComponent>
      </Modal.Body>
    );
  };

  const _renderAmount = () => {
    return (
      <S.Amount>
        {ORDERS_CONFIG.PrMRP}
        {90}
      </S.Amount>
    );
  };

  const _renderFooter = () => {
    return (
      <S.Footer>
        <S.Button
          $bgColor={theme.colors.primary}
          $isActive={true}
          onClick={activeDeliverStatus}
        >
          {ORDERS_CONFIG.AmountReceived}
        </S.Button>
        <S.Button
          $bgColor={theme.colors.primary}
          $isActive={activeDeliver}
          onClick={productDelivered}
        >
          {ORDERS_CONFIG.Deliver}
        </S.Button>
      </S.Footer>
    );
  };

  return (
    <S.ModalContainer
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={() => onClose()}
    >
      <S.CloseButton onClick={onClose}></S.CloseButton>
      {_renderBody()}
      {_renderAmount()}
      {_renderFooter()}
    </S.ModalContainer>
  );
};
