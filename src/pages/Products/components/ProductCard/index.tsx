/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useState } from "react";
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { EditItemModal } from "../EditItem";
import { AddStockModel } from "../AddStock";
import { toast } from "react-toastify";
import { PRODUCTS_CONFIG } from "../../config";
import {
  AddRecentInput,
  AddStockInput,
  UpdateProductInput,
} from "../../services/graphql";
import {
  getItemInLocalStorage,
  getUserDetails,
  setItemInLocalStorage,
} from "../../../../utils";
export interface IProductCard {
  product: any;
  categories: any[];
  updateProduct(args: UpdateProductInput): Promise<boolean>;
  addRecent(args: AddRecentInput): Promise<boolean>;
  addStock(args: AddStockInput): Promise<boolean>;
  isRetailer: boolean;
}

export const ProductCard = ({
  product,
  categories,
  updateProduct,
  addStock,
  isRetailer,
  addRecent,
}: IProductCard) => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [userId, setUserId] = useState<string>(getUserDetails()?.id);

  const itemAdded = () => {
    try {
      const cartProducts = getItemInLocalStorage("cartProducts") || [];

      const existingProduct = cartProducts.find(
        (item: { id: any }) => item.id === product?.id
      );

      if (!existingProduct) {
        const newProduct = {
          id: product?.id,
          quantity: 1,
          price: Number(product?.price),
        };
        cartProducts.push(newProduct);

        if (product?.id) {
          addRecent({ userId, productId: product.id });
        }

        setItemInLocalStorage("cartProducts", cartProducts);

        toast.success(PRODUCTS_CONFIG.addItem);
        window.dispatchEvent(new Event("cartUpdated"));
      } else {
        toast.info(PRODUCTS_CONFIG.itemAlreadyInCart);
      }
    } catch (error) {
      toast.error(PRODUCTS_CONFIG.cartErrorMessage);
    }
  };

  const _renderCardInitialDetails = () => {
    return (
      <S.ProductDetailContainer>
        <S.ImageContainer>
          <S.Image
            src={product.productImage ?? theme.images.defaultProductImage}
          />
        </S.ImageContainer>
        <div>
          <S.TitleContainer>{product?.title}</S.TitleContainer>
          <S.CategoryContainer $bgColor={theme.colors.primary}>
            {product?.category}
          </S.CategoryContainer>
          <S.ProductDes>
            <S.QuantityContainer>
              {PRODUCTS_CONFIG.prQuantity}
              {product?.quantity}
            </S.QuantityContainer>
            <S.RupeeContainer>
              {PRODUCTS_CONFIG.prMrp} {Number(product?.price ?? 0).toFixed(2)}
            </S.RupeeContainer>
          </S.ProductDes>
        </div>
      </S.ProductDetailContainer>
    );
  };

  const _renderButton = () => {
    if (isRetailer) {
      return (
        <S.ButtonContainer>
          <S.Button
            $bgColor={theme.colors.primary}
            $canAdd={true}
            onClick={() => setModal(true)}
          >
            <S.EditIcon />
            {PRODUCTS_CONFIG.editButton}
          </S.Button>
          <S.Button
            $bgColor={theme.colors.primary}
            $canAdd={true}
            onClick={() => setAddModal(true)}
          >
            <S.AddIcon />
            {PRODUCTS_CONFIG.addStockButton}
          </S.Button>
        </S.ButtonContainer>
      );
    }

    return (
      <S.ButtonContainer>
        <S.Button
          $bgColor={theme.colors.primary}
          onClick={() => {
            itemAdded();
          }}
          $canAdd={product?.quantity > 0}
        >
          <S.CartIcon />
          {product?.quantity > 0
            ? PRODUCTS_CONFIG.addToCartButton
            : PRODUCTS_CONFIG.outOfStock}
          {}
        </S.Button>
      </S.ButtonContainer>
    );
  };

  return (
    <div>
      <S.CardContainer>
        {_renderCardInitialDetails()}
        {_renderButton()}
      </S.CardContainer>
      <EditItemModal
        modalShow={modal}
        onClose={() => setModal(false)}
        product={product}
        categories={categories}
        updateProduct={updateProduct}
      />
      <AddStockModel
        modalShow={addModal}
        onClose={() => setAddModal(false)}
        product={product}
        addStock={addStock}
      />
    </div>
  );
};
