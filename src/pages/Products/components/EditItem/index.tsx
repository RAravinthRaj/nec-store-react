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
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

  const category = ["Stationary", "Cosmetics", "Soap"];
  const [title, setTitle] = useState(individualProduct.Title);
  const [Quantity, setQuantity] = useState(individualProduct.Quantity);
  const [MRP, setMRP] = useState(individualProduct.MRP);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    individualProduct.Category
  );

  const _productEdited = () => {
    toast.success("Product Edited Successfully");
    onClose();
  };

  const _handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedCategory(event.target.value as string);
    if (!modalShow) {
      setSelectedCategory("");
    }
  };

  const _renderMenu = () => {
    return (
      <S.StyledFormControl fullWidth>
        <Select
          value={selectedCategory}
          onChange={(e) => _handleChange(e)}
          displayEmpty
          inputProps={{ "aria-label": "Category" }}
          renderValue={(selected) => (selected ? selected : "Category")}
        >
          {category.map((cat, id) => {
            return (
              <MenuItem key={id} value={cat}>
                {cat}
                <S.Divider />
              </MenuItem>
            );
          })}
        </Select>
      </S.StyledFormControl>
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
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Category}</Form.Label>
            {_renderMenu()}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Quantity}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="number"
                min="0"
                value={Quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{PRODUCTS_CONFIG.MRP}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="number"
                min="0"
                value={MRP}
                onChange={(e) => setMRP(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Image}</Form.Label>
            <input type="file" className="form-control" />
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
          onClick={() => _productEdited()}
        >
          {PRODUCTS_CONFIG.SubmitButton}
        </S.Button>
      </S.Footer>
    );
  };

  return (
    <S.ModalContainer
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
