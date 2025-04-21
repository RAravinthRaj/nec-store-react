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

export interface IEditItem {
  modalShow: boolean;
  onClose: () => void;
  individualProfile: {
    Name: string;
    Department: string;
    RollNumber: String;
    Email: String;
  };
}

export const EditProfileModal = ({
  modalShow,
  onClose,
  individualProfile,
}: IEditItem) => {
  const theme = useTheme();

  const [name, setName] = useState(individualProfile.Name);
  const [email, setEmail] = useState(individualProfile.Email);
  const [rollNumber, setRollNumber] = useState(individualProfile.RollNumber);
  const [department, setDepartment] = useState<string | null>(
    individualProfile.Department
  );

  const _productEdited = () => {
    toast.success("Profile Updated");
    onClose();
  };

  const _handleChange = (event: SelectChangeEvent<unknown>) => {
    setDepartment(event.target.value as string);
    if (!modalShow) {
      setDepartment("");
    }
  };

  const _renderMenu = () => {
    return (
      <S.StyledFormControl fullWidth>
        <Select
          onChange={(e) => _handleChange(e)}
          displayEmpty
          inputProps={{ "aria-label": "Category" }}
          renderValue={(selected: string | null) => selected ?? department}
        >
          {PROFILE_CONFIG.departments.map((cat, id) => {
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
        <S.Title id="contained-modal-title-vcenter">
          {PROFILE_CONFIG.edit}
        </S.Title>
      </S.Header>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PROFILE_CONFIG.name}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PROFILE_CONFIG.email}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="text"
                value={String(email)}
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PROFILE_CONFIG.rollNumber}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="text"
                value={String(rollNumber)}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PROFILE_CONFIG.department}</Form.Label>
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
          onClick={() => _productEdited()}
        >
          {PROFILE_CONFIG.submitButton}
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
      backdrop="static"
    >
      {_renderModalHeader()}
      {_renderModalBody()}
      {_renderModalFooter()}
    </S.ModalContainer>
  );
};
