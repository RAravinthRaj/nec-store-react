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
import { FaPlus, FaMinus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import {
  getItemInLocalStorage,
  setItemInLocalStorage,
} from "../../../../utils";
import { useNavigate } from "react-router-dom";

export interface IContainerComp {
  cartProductsDetails: any[];
  setProductIDs: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CartComp = ({
  cartProductsDetails,
  setProductIDs,
}: IContainerComp) => {
  const theme = useTheme();
  const lastToastTimeRef = useRef<number | null>(null);
  const [cartProducts, setCartProducts] = useState<any[]>(
    getItemInLocalStorage("cartProducts") || []
  );

  const navigate = useNavigate();

  useEffect(() => {
    const syncCart = () => {
      const localCart = getItemInLocalStorage("cartProducts") || [];
      let totalPrice = 0;

      for (let product of localCart) {
        totalPrice += product.price;
      }

      // console.log(totalPrice);
      setItemInLocalStorage("totalPrice", totalPrice);
      setCartProducts(localCart);
    };

    syncCart();

    window.addEventListener("cartUpdated", syncCart);
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener("cartUpdated", syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, [navigate]);

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
      )} ${CARTS_CONFIG.swal.confirmButtonText}`,
      cancelButtonText: `${ReactDOMServer.renderToString(
        <RxCross2 size={19} style={{ marginTop: "-1px" }} />
      )} ${CARTS_CONFIG.swal.cancelButtonText}`,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (!result.isConfirmed) return;

      const updatedCart = cartProducts.filter((item) => item.id !== productId);
      setItemInLocalStorage("cartProducts", updatedCart);
      setProductIDs(updatedCart.map((item) => item.id));
      window.dispatchEvent(new Event("cartUpdated"));

      Swal.fire({
        title: CARTS_CONFIG.swal.successTitle,
        text: CARTS_CONFIG.swal.successText,
        icon: CARTS_CONFIG.swal.successIcon as SweetAlertIcon,
        confirmButtonColor: theme.colors.primary,
        color: theme.colors.swalButton,
      });
    });
  };

  const _updateProduct = (
    isDecrement: boolean,
    item: any,
    productInCart: any
  ) => {
    const now = Date.now();
    const lastShown = lastToastTimeRef.current;
    const maxQty = item?.quantity;
    const currentQty = productInCart?.quantity || 1;

    const showToast = (message: string) => {
      if (!lastShown || now - lastShown > 5100) {
        toast.warn(message);
        lastToastTimeRef.current = now;
      }
    };

    const updatedCart = [...cartProducts];
    const index = updatedCart.findIndex((p) => p.id === productInCart.id);

    if (index === -1) return showToast("Product not found in cart");

    if (isDecrement) {
      if (currentQty <= 1) return showToast("Quantity must be at least 1");
      updatedCart[index].quantity = currentQty - 1;
      updatedCart[index].price = (currentQty - 1) * item?.price;
    } else {
      if (currentQty >= maxQty) return showToast("Quantity exceeds limit");
      updatedCart[index].quantity = currentQty + 1;
      updatedCart[index].price = (currentQty + 1) * item?.price;
    }

    setItemInLocalStorage("cartProducts", updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const _renderQuantityControls = (item: any, productInCart: any) => (
    <S.QuantityContainer $bgColor={theme.colors.secondaryBackGround}>
      <S.QuantityButton
        $bgColor={theme.colors.backGround}
        onClick={() => _updateProduct(true, item, productInCart)}
      >
        <FaMinus />
      </S.QuantityButton>

      <S.QuantityWrap>{productInCart?.quantity}</S.QuantityWrap>

      <S.QuantityButton
        $bgColor={theme.colors.backGround}
        onClick={() => _updateProduct(false, item, productInCart)}
      >
        <FaPlus />
      </S.QuantityButton>
    </S.QuantityContainer>
  );

  const _renderItemField = (key: string, value: any, item: any) => {
    const productInCart = cartProducts.find((p) => p.id === item.productId);
    const orderQuantity = productInCart?.quantity || 1;

    if (key === "productId") return null;

    switch (key) {
      case "quantity":
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>
            {_renderQuantityControls(item, productInCart)}
          </S.TitleComp>
        );

      case "productImage":
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>
            <S.ImageWrap src={value ?? theme.images.defaultProductImage} />
          </S.TitleComp>
        );

      case "price":
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>
            ₹{orderQuantity * item?.price}
          </S.TitleComp>
        );

      default:
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>{value}</S.TitleComp>
        );
    }
  };

  const _renderItemFields = (item: any) =>
    Object.entries(item).map(([key, value]) =>
      _renderItemField(key, value, item)
    );

  const _renderCartsData = () =>
    cartProductsDetails.map((item, index) => {
      const productId = item?.productId || index;
      return (
        <div key={index}>
          <S.ItemBox>
            {_renderItemFields(item)}
            <S.CancelComp
              $bgColor={theme.colors.primary}
              onClick={() => _deleteItem(productId)}
            />
          </S.ItemBox>
          <S.CartDivider />
        </div>
      );
    });

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
