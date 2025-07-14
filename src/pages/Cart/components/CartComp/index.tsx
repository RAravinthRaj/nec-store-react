/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { CARTS_CONFIG } from "../../config";
import { RxCross2 } from "react-icons/rx";
import Swal, { SweetAlertIcon } from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import { VscCheck } from "react-icons/vsc";
import {
  getItemInLocalStorage,
  setItemInLocalStorage,
} from "../../../../utils";
import { useEffect, useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { toast } from "react-toastify";

export interface IContainerComp {
  cartProducts: any[];
  setProductIDs: React.Dispatch<React.SetStateAction<string[]>>;
  setCartProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

export const CartComp = ({
  cartProducts,
  setProductIDs,
  setCartProducts,
}: IContainerComp) => {
  const theme = useTheme();

  const [updatedCartProducts, setUpdatedCartProducts] = useState(cartProducts);
  const lastToastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    setCartProducts(updatedCartProducts);
  }, [updatedCartProducts]);

  const _deleteItem = (productId: string) => {
    Swal.fire({
      title: CARTS_CONFIG.swal.title,
      text: CARTS_CONFIG.swal.text,
      icon: CARTS_CONFIG.swal.icon as SweetAlertIcon,
      confirmButtonColor: theme.colors.primary,
      cancelButtonColor: theme.colors.cancel,
      color: theme.colors.swalButton,
      confirmButtonText: `${ReactDOMServer.renderToString(
        <VscCheck size={20} style={{ marginTop: "-2px", marginRight: "5px" }} />
      )} ${CARTS_CONFIG.swal.confirmButtonText} `,
      cancelButtonText: `${ReactDOMServer.renderToString(
        <RxCross2 size={19} style={{ marginTop: "-1px" }} />
      )} ${CARTS_CONFIG.swal.cancelButtonText}`,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const cartProductsStr = getItemInLocalStorage("cartProducts");

        if (cartProductsStr && cartProductsStr !== undefined) {
          const updatedCartProductsId = [];
          for (let currentProductId of cartProductsStr) {
            if (currentProductId !== productId) {
              updatedCartProductsId.push(currentProductId);
            }
          }
          setProductIDs(updatedCartProductsId);
          setCartProducts(updatedCartProducts);
          setItemInLocalStorage("cartProducts", updatedCartProductsId);
        }

        Swal.fire({
          title: CARTS_CONFIG.swal.successTitle,
          text: CARTS_CONFIG.swal.successText,
          icon: CARTS_CONFIG.swal.successIcon as SweetAlertIcon,
          confirmButtonColor: theme.colors.primary,
          color: theme.colors.swalButton,
        });
      }
    });
  };

  const _updateProduct = (isDecrement: boolean, item: any, index: number) => {
    const now = Date.now();
    const lastShown = lastToastTimeRef.current;
    const maxQty = item?.quantity || 1;
    const currentQty = item?.orderQuantity || 1;

    const showToast = (message: string) => {
      if (!lastShown || now - lastShown > 5100) {
        toast.warn(message);
        lastToastTimeRef.current = now;
      }
    };

    const updatedCart = [...updatedCartProducts];

    if (isDecrement) {
      if (currentQty > 1) {
        updatedCart[index] = {
          ...updatedCart[index],
          orderQuantity: currentQty - 1,
        };
        setCartProducts(updatedCart);
        setUpdatedCartProducts(updatedCart);
      } else {
        showToast("Quantity must be at least 1");
      }
    } else {
      if (currentQty < maxQty) {
        updatedCart[index] = {
          ...updatedCart[index],
          orderQuantity: currentQty + 1,
        };
        setCartProducts(updatedCart);
        setUpdatedCartProducts(updatedCart);
      } else {
        showToast("Quantity exceeds limit");
      }
    }
  };

  const _renderQuantityControls = (
    item: any,
    index: number,
    quantity: number
  ) => {
    return (
      <S.QuantityContainer $bgColor={theme.colors.secondaryBackGround}>
        <S.QuantityButton
          $bgColor={theme.colors.backGround}
          onClick={() => _updateProduct(true, item, index)}
        >
          <FaMinus />
        </S.QuantityButton>

        <S.QuantityWrap>{quantity}</S.QuantityWrap>

        <S.QuantityButton
          $bgColor={theme.colors.backGround}
          onClick={() => _updateProduct(false, item, index)}
        >
          <FaPlus />
        </S.QuantityButton>
      </S.QuantityContainer>
    );
  };

  const _renderItemField = (
    key: string,
    value: any,
    item: any,
    index: number,
    id: number
  ) => {
    const quantity = item?.orderQuantity || 1;

    switch (key) {
      case "quantity":
        return (
          <S.TitleComp key={id}>
            {_renderQuantityControls(item, index, quantity)}
          </S.TitleComp>
        );

      case "productImage":
        return (
          <S.TitleComp key={id}>
            <S.ImageWrap src={value ?? theme.images.defaultProductImage} />
          </S.TitleComp>
        );

      case "price":
        return <S.TitleComp key={id}>₹{quantity * item?.price}</S.TitleComp>;

      default:
        return <S.TitleComp key={id}>{value}</S.TitleComp>;
    }
  };

  const _renderItemFields = (item: any, index: number) => {
    return Object.entries(item)
      .filter(([key]) => key !== "productId" && key !== "orderQuantity")
      .map(([key, value], id) => _renderItemField(key, value, item, index, id));
  };

  const _renderCartsData = () => {
    return updatedCartProducts.map((item, index) => {
      const productId = item?.productId || index;

      return (
        <div key={productId}>
          <S.ItemBox>
            {_renderItemFields(item, index)}
            <S.CancelComp
              $bgColor={theme.colors.primary}
              onClick={() => _deleteItem(productId)}
            />
          </S.ItemBox>
          <S.CartDivider />
        </div>
      );
    });
  };

  return (
    <S.CartContainer>
      <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
        {CARTS_CONFIG.title?.map((data, index) => (
          <S.TitleComp key={index}>{data}</S.TitleComp>
        ))}
      </S.TitleBox>
      {_renderCartsData()}
    </S.CartContainer>
  );
};
