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
import { convertFileToBase64 } from "../../../../utils";

export interface IEditItem {
  modalShow: boolean;
  onClose: () => void;
  user: any;
  onEditProfile(
    name?: string,
    email?: string,
    rollNumber?: string,
    department?: string,
    profilePicture?: string | null
  ): void;
}

export const EditProfileModal = ({
  modalShow,
  onClose,
  user,
  onEditProfile,
}: IEditItem) => {
  const theme = useTheme();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [rollNumber, setRollNumber] = useState(user?.rollNumber);
  const [department, setDepartment] = useState<string>(user?.department);
  const [profilePicture, setProfilePicture] = useState<string | null>();

  const _profileEdited = () => {
    onEditProfile(name, email, rollNumber, department, profilePicture);
    onClose();
  };

  const _handleChange = (event: SelectChangeEvent<unknown>) => {
    setDepartment(event.target.value as string);
    if (!modalShow) {
      setDepartment("");
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validImageTypes = PROFILE_CONFIG.validImageTypes;

    if (!validImageTypes.includes(file.type)) {
      toast.error("Invalid ProfilePicture");
      return;
    }

    try {
      const base64 = await convertFileToBase64(file, 150, 150, 0.7);
      setProfilePicture(base64);
    } catch (err) {
      console.error(err);
      toast.error("Invalid ProfilePicture");
    }
  };

  const _renderMenu = () => {
    return (
      <S.StyledFormControl fullWidth>
        <Select
          value={department ?? ""}
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PROFILE_CONFIG.image}</Form.Label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
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
          onClick={() => _profileEdited()}
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
