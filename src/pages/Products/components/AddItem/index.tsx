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

export interface IAddItem {
  modalshow: boolean;
  onClose: () => void;
}

export const AddItemModal = ({ modalshow, onClose }: IAddItem) => {
  const theme = useTheme();

  const productAdded = () => {
    toast.success("Product Added Successfully");
    onClose();
  };

  const category = ["All", "Stationary", "dshf", "dsfhdgs"];

  const [selectedCategory, setSelectedCategory] = useState("Category");
  const handleSelect = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedCategory(eventKey);
    }
  };

  const _showDropDown = () => {
    return (
      <S.CustomDropdown onSelect={handleSelect}>
        <S.CustomToggle $bgColor={theme.colors.backGround}>
          <S.IconText $bgColor={theme.colors.textSecondary}>
            {selectedCategory}
          </S.IconText>
          <S.DropDownIcon $bgColor={theme.colors.backGround}></S.DropDownIcon>
        </S.CustomToggle>
        <S.DropDownMenu>
          {category.map((cat, index) => {
            return (
              <div>
                <Dropdown.Item key={cat} eventKey={cat}>
                  {cat}
                </Dropdown.Item>
              </div>
            );
          })}
        </S.DropDownMenu>
      </S.CustomDropdown>
    );
  };

  const _modalContainer = () => {
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
          <S.Title id="contained-modal-title-vcenter">Add Item</S.Title>
        </S.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <S.InputWrapper>
                <S.Input type="input" placeholder="Title" />
              </S.InputWrapper>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <S.InputWrapper>
                <S.Icon>{_showDropDown()}</S.Icon>
              </S.InputWrapper>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantity</Form.Label>
              <S.InputWrapper>
                <S.Input type="input" placeholder="Quantity" />
              </S.InputWrapper>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>MRP</Form.Label>
              <S.InputWrapper>
                <S.Input type="input" placeholder="MRP(in Rupees)" />
              </S.InputWrapper>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <div>
                <S.InputRounder type="file" placeholder="Full Name" />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <S.Footer>
          <S.Button
            $bgColor={theme.colors.primary}
            onClick={() => productAdded()}
          >
            Submit
          </S.Button>
        </S.Footer>
      </S.ModalContainer>
    );
  };

  return _modalContainer();
};
