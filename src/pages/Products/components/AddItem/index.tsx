import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { useState } from "react";
import { toast } from "react-toastify";
import { PRODUCTS_CONFIG } from "../../config";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export interface IAddItem {
  modalShow: boolean;
  onClose: () => void;
}

export const AddItemModal = ({ modalShow, onClose }: IAddItem) => {
  const theme = useTheme();

  const [selectedCategory, setSelectedCategory] = useState("");

  const _handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedCategory(event.target.value as string);
    if (!modalShow) {
      setSelectedCategory("");
    }
  };

  const _productAdded = () => {
    toast.success(PRODUCTS_CONFIG.AddItemToastSuccess);
    setSelectedCategory("");
    onClose();
  };

  const category = ["Stationary", "cosmetics", "soap"];

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
          {category?.map((cat, id) => {
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
        <S.CloseButton onClick={onClose} />
        <S.Title id="contained-modal-title-vcenter">
          {PRODUCTS_CONFIG.AddItemTitle}
        </S.Title>
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
              <S.Input type="text" placeholder="Title" />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Category}</Form.Label>
            {_renderMenu()}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.Quantity}</Form.Label>
            <S.InputWrapper>
              <S.Input type="number" min="0" placeholder="Quantity" />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{PRODUCTS_CONFIG.MRP}</Form.Label>
            <S.InputWrapper>
              <S.Input type="number" min="0" placeholder="MRP(in Rupees)" />
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
          onClick={() => _productAdded()}
        >
          {PRODUCTS_CONFIG.SubmitButton}
        </S.Button>
      </S.Footer>
    );
  };

  return (
    <S.ModalContainer
      centered
      show={modalShow}
      onHide={onClose}
      backdrop="static"
    >
      {_renderModalHeader()}
      {_renderModalBody()}
      {_renderModalFooter()}
    </S.ModalContainer>
  );
};
