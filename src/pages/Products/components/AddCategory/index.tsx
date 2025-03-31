/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { useState } from "react";
import { toast } from "react-toastify";
import { PRODUCTS_CONFIG } from "../../config";

export interface IAddCategory {
  modalShow: boolean;
  onClose: () => void;
}

export const AddCategoryModal = ({
  modalShow: modalShow,
  onClose,
}: IAddCategory) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryAdded = () => {
    setSelectedCategory(selectedCategory);
    toast.success(PRODUCTS_CONFIG.CategoryToastSuccess);
    onClose();
  };

  const _renderModalHeader = () => {
    return (
      <S.Header>
        <S.CloseButton onClick={onClose} />
        <S.Title id="contained-modal-title-vcenter">
          {PRODUCTS_CONFIG.AddCategoryTitle}
        </S.Title>
      </S.Header>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Category}</Form.Label>
            <S.InputWrapper>
              <S.Input type="Name" placeholder="Title" />
            </S.InputWrapper>
          </Form.Group>
        </Form>
      </Modal.Body>
    );
  };

  const _renderModalFooter = () => {
    return (
      <S.Footer>
        <S.Button
          $bgColor={theme.colors.primary}
          onClick={() => categoryAdded()}
        >
          {PRODUCTS_CONFIG.AddButton}
        </S.Button>
      </S.Footer>
    );
  };

  return (
    <S.ModalContainer
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={() => onClose()}
      disableScrollLock
    >
      {_renderModalHeader()}
      {_renderModalBody()}
      {_renderModalFooter()}
    </S.ModalContainer>
  );
};
