import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { useState } from "react";
import { toast } from "react-toastify";
import { PRODUCTS_CONFIG } from "../../config";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AddProductInput } from "../../services/graphql";
import { convertFileToBase64 } from "../../../../utils";

export interface IAddItem {
  modalShow: boolean;
  onClose: () => void;
  categories: any[];
  addProduct(args: AddProductInput): Promise<boolean>;
}

export const AddItemModal = ({
  modalShow,
  onClose,
  categories,
  addProduct,
}: IAddItem) => {
  const theme = useTheme();

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0.0);
  const [productImage, setProductImage] = useState("");

  const _handleCategoryChange = (event: SelectChangeEvent<unknown>) => {
    setCategoryId(event.target.value as string);

    if (!modalShow) {
      setCategoryId("");
    }
  };

  const _addProduct = async () => {
    if (
      title.trim() !== "" &&
      categoryId.trim() !== "" &&
      quantity !== 0 &&
      price !== 0.0
    ) {
      const productData: AddProductInput = {
        title: title.trim(),
        categoryId: categoryId.trim(),
        quantity,
        price,
        productImage,
      };

      const success = await addProduct(productData);
      if (success) {
        onClose();
      }
    } else {
      toast.info(PRODUCTS_CONFIG.requiredData);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validImageTypes = PRODUCTS_CONFIG.validImageTypes;

    if (!validImageTypes.includes(file.type)) {
      toast.error("Invalid ProfilePicture");
      return;
    }

    try {
      const base64 = await convertFileToBase64(file, 150, 150, 0.7);
      setProductImage(base64);
    } catch (err) {
      console.error(err);
      toast.error("Invalid ProfilePicture");
    }
  };

  const _renderMenu = () => {
    return (
      <S.StyledFormControl fullWidth>
        <Select
          value={categoryId}
          onChange={_handleCategoryChange}
          displayEmpty
          inputProps={{ "aria-label": "Category" }}
          renderValue={(selected) => {
            const selectedCat = categories.find((cat) => cat.id === selected);
            return selectedCat?.name || "Category";
          }}
          style={{ color: theme.colors.textSecondary }}
        >
          {categories?.map((cat, index) => {
            return (
              <MenuItem key={cat?.id} value={cat?.id}>
                {cat?.name}
                {index != categories.length && <S.Divider />}
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
          {PRODUCTS_CONFIG.addItemTitle}
        </S.Title>
      </S.Header>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <S.Label>
              <S.SubTitle>{PRODUCTS_CONFIG.title}</S.SubTitle>
              <S.Required>*</S.Required>
            </S.Label>
            <S.InputWrapper>
              <S.Input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <S.Label>
              <S.SubTitle>{PRODUCTS_CONFIG.category}</S.SubTitle>
              <S.Required>*</S.Required>
            </S.Label>
            {_renderMenu()}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <S.Label>
              <S.SubTitle>{PRODUCTS_CONFIG.quantity}</S.SubTitle>
              <S.Required>*</S.Required>
            </S.Label>
            <S.InputWrapper>
              <S.Input
                type="number"
                min="0"
                placeholder="Quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <S.Label>
              <S.SubTitle>{PRODUCTS_CONFIG.mrp}</S.SubTitle>
              <S.Required>*</S.Required>
            </S.Label>
            <S.InputWrapper>
              <S.Input
                type="number"
                min="0"
                placeholder="MRP(in Rupees)"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <S.Label>
              <S.SubTitle>{PRODUCTS_CONFIG.image}</S.SubTitle>
            </S.Label>
            <S.ProductImageContainer>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
              {productImage && (
                <S.PreviewProductImage src={productImage} alt="Preview" />
              )}
            </S.ProductImageContainer>
          </Form.Group>
        </Form>
      </Modal.Body>
    );
  };

  const _renderModalFooter = () => {
    return (
      <S.Footer>
        <S.Button $bgColor={theme.colors.primary} onClick={() => _addProduct()}>
          {PRODUCTS_CONFIG.submitButton}
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
