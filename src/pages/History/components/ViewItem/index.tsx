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

export interface IAddItem {
  modalShow: boolean;
  onClose: () => void;
  products: any[];
  totalPrice: string;
}

export const ViewItemModal = ({
  modalShow: modalShow,
  onClose,
  products,
  totalPrice,
}: IAddItem) => {
  const theme = useTheme();

  const _renderBodyData = () => {
    return (
      <S.BodyComponent>
        {products.map((d, index) => (
          <div key={index}>
            <S.ItemBox>
              {Object.entries(d).map(([key, value], id) => {
                let displayValue = value;

                if (key === "productImage") {
                  return (
                    <S.TitleComp key={id}>
                      <S.productImage
                        src={value || theme.images.defaultProductImage}
                      />
                    </S.TitleComp>
                  );
                }

                if (key === "price") {
                  displayValue = (d.price ?? 0) * (d.quantity ?? 0);
                }

                return <S.TitleComp key={id}>{displayValue}</S.TitleComp>;
              })}
            </S.ItemBox>
            <S.Divider />
          </div>
        ))}
      </S.BodyComponent>
    );
  };

  const _renderBody = () => {
    return (
      <Modal.Body as={S.ModalBody}>
        <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
          {ORDERS_CONFIG.title?.map((d, index) => (
            <S.TitleComp key={index}>{d}</S.TitleComp>
          ))}
        </S.TitleBox>
        {_renderBodyData()}
      </Modal.Body>
    );
  };

  const _renderAmount = () => {
    return (
      <S.Amount>
        {ORDERS_CONFIG.prMrp}
        {totalPrice}
      </S.Amount>
    );
  };

  const _renderFooter = () => {
    return (
      <S.Footer>
        <S.Button $bgColor={theme.colors.primary}>
          {ORDERS_CONFIG.amountReceived}
        </S.Button>
        <S.Button $bgColor={theme.colors.primary}>
          {ORDERS_CONFIG.deliver}
        </S.Button>
      </S.Footer>
    );
  };

  return (
    <S.ModalContainer
      aria-labelledby="contained-modal-title-vcenter"
      size="xl"
      centered
      show={modalShow}
      backdrop="static"
      onHide={() => onClose()}
    >
      <S.CloseButton onClick={onClose}></S.CloseButton>
      {_renderBody()}
      {_renderAmount()}
      {_renderFooter()}
    </S.ModalContainer>
  );
};
