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
  modalshow: boolean;
  onClose: () => void;
}

export const AddCategoryModal = ({ modalshow, onClose }: IAddCategory) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("");

  const setSelectCategory = () => {
    setSelectedCategory(selectedCategory);
  };

  const categoryAdded = () => {
    toast.success(PRODUCTS_CONFIG.CategoryToastSuccess);
    onClose();
  };

  return (
    <S.ModalContainer
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalshow}
      onHide={() => onClose()}
    >
      <S.Header>
        <S.CloseButton onClick={onClose}></S.CloseButton>
        <S.Title id="contained-modal-title-vcenter">
          {PRODUCTS_CONFIG.AddCategoryTitle}
        </S.Title>
      </S.Header>
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
      <S.Footer>
        <S.Button
          $bgColor={theme.colors.primary}
          onClick={() => categoryAdded()}
        >
          {PRODUCTS_CONFIG.AddButton}
        </S.Button>
      </S.Footer>
    </S.ModalContainer>
  );
};
