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
import { PROFILE_CONFIG } from "../../config";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export interface IAddItem {
  modalShow: boolean;
  onClose: () => void;
  email: string;
}

export const AddRoleModal = ({ modalShow, onClose, email }: IAddItem) => {
  const theme = useTheme();

  const [selectedCategory, setSelectedCategory] = useState("");

  const _handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedCategory(event.target.value as string);
    if (!modalShow) {
      setSelectedCategory("");
    }
  };

  const _productAdded = () => {
    toast.success(PROFILE_CONFIG.addItemToastSuccess);
    setSelectedCategory("");
    onClose();
  };

  const _renderMenu = () => {
    return (
      <S.StyledFormControl fullWidth>
        <Select
          value={selectedCategory}
          onChange={(e) => _handleChange(e)}
          displayEmpty
          renderValue={(selected) => (selected ? selected : "Role")}
        >
          {PROFILE_CONFIG.roles?.map((cat, id) => {
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
          {PROFILE_CONFIG.addItemTitle}
        </S.Title>
      </S.Header>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PROFILE_CONFIG.email}</Form.Label>
            <S.InputWrapper>
              <S.Input type="text" value={email} />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PROFILE_CONFIG.role}</Form.Label>
            {_renderMenu()}
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
          {PROFILE_CONFIG.submitButton}
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
