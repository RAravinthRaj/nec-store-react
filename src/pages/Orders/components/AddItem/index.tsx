/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";

export interface IAddItem {
  modalshow: boolean;
  onClose: () => void;
}

export const ViewItemModal = ({ modalshow, onClose }: IAddItem) => {
  const theme = useTheme();

  const data = [
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
    { No: 1, Pname: "TagFile", Quantity: 20, Price: 20 },
  ];

  const _modalContainer = () => {
    return (
      <S.ModalContainer
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalshow}
        onHide={() => onClose()}
      >
        <S.CloseButton onClick={onClose}></S.CloseButton>

        <Modal.Body>
          <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
            <S.TitleComp>Sl.No</S.TitleComp>
            <S.TitleComp>Product Name</S.TitleComp>
            <S.TitleComp>Quantity</S.TitleComp>
            <S.TitleComp>MRP</S.TitleComp>
          </S.TitleBox>
          <S.BodyComponent>
            {data.map((d, index) => (
              <div>
                <S.ItemBox key={index}>
                  <S.TitleComp>{d.No}</S.TitleComp>
                  <S.TitleComp>{d.Pname}</S.TitleComp>
                  <S.TitleComp>{d.Quantity}</S.TitleComp>
                  <S.TitleComp>{d.Price}</S.TitleComp>
                </S.ItemBox>
                {index !== data.length - 1 && <S.Divider />}
              </div>
            ))}
          </S.BodyComponent>
        </Modal.Body>
        <S.Amount>Total : ₹ 90</S.Amount>
        <S.Footer>
          <S.Button $bgColor={theme.colors.primary}>Amount Received</S.Button>
          <S.Button $bgColor={theme.colors.primary}>Deliver</S.Button>
        </S.Footer>
      </S.ModalContainer>
    );
  };

  return _modalContainer();
};
