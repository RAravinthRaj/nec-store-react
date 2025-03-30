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
import { Dropdown } from "react-bootstrap";
import { PRODUCTS_CONFIG } from "../../config";

export interface IEditItem {
  modalShow: boolean;
  onClose: () => void;
  individualProduct: {
    Title: string;
    Category: string;
    Quantity: number;
    MRP: number;
  };
}

export const EditItemModal = ({
  modalShow,
  onClose,
  individualProduct,
}: IEditItem) => {
  const theme = useTheme();

  const productAdded = () => {
    toast.success("Product Edited Successfully");
    onClose();
  };

  const category = ["Stationary", "Cosmetics", "Soap"];
  const [title, setTitle] = useState(individualProduct.Title);
  const [Quantity, setQuantity] = useState(individualProduct.Quantity);
  const [MRP, setMRP] = useState(individualProduct.MRP);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    individualProduct.Category
  );

  const _renderDropDownToggle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.IconText>{selectedCategory}</S.IconText>
      </S.CustomToggle>
    );
  };

  const _renderDropDownMenu = () => {
    return (
      <S.DropDownMenu>
        {category.map((cat, id) => {
          return (
            <div key={id}>
              <Dropdown.Item key={cat} eventKey={cat}>
                {cat}
              </Dropdown.Item>
            </div>
          );
        })}
      </S.DropDownMenu>
    );
  };

  const _showDropDown = () => {
    return (
      <S.CustomDropdown
        onSelect={(eventKey) => {
          setSelectedCategory(eventKey);
        }}
      >
        {_renderDropDownToggle()}
        {_renderDropDownMenu()}
      </S.CustomDropdown>
    );
  };

  const _renderModalHeader = () => {
    return (
      <S.Header>
        <S.CloseButton onClick={onClose}></S.CloseButton>
        <S.Title id="contained-modal-title-vcenter">Edit Item</S.Title>
      </S.Header>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Title}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Category}</Form.Label>
            <S.InputWrapper>{_showDropDown()}</S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Quantity}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="input"
                value={Quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{PRODUCTS_CONFIG.MRP}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="input"
                value={MRP}
                onChange={(e) => setMRP(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Image}</Form.Label>
            <S.InputRounder type="file" />
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
          onClick={() => productAdded()}
        >
          {PRODUCTS_CONFIG.SubmitButton}
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
      onHide={onClose}
    >
      {_renderModalHeader()}
      {_renderModalBody()}
      {_renderModalFooter()}
    </S.ModalContainer>
  );
};
