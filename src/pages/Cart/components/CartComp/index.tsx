/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { CARTS_CONFIG } from "../../config";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import {
  getItemInLocalStorage,
  setItemInLocalStorage,
} from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { useSwalComp } from "../../../../components";

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
    getItemInLocalStorage("cartProducts") || [],
  );

  const navigate = useNavigate();

  useEffect(() => {
    const syncCart = () => {
      const localCart = getItemInLocalStorage("cartProducts") || [];
      let totalPrice = 0;

      for (let product of localCart) {
        totalPrice += product.price;
      }

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

  const showSwal = useSwalComp();
  const _deleteItem = (productId: string) => {
    showSwal({
      title: CARTS_CONFIG.swal.title,
      subtitle: CARTS_CONFIG.swal.text,
      type: "warning",
      confirmButtonText: CARTS_CONFIG.swal.confirmButtonText,
      cancelButtonText: "Cancel",
      onConfirmedPress: () => {
        const updatedCart = cartProducts.filter(
          (item) => item.id !== productId,
        );
        setItemInLocalStorage("cartProducts", updatedCart);
        setProductIDs(updatedCart.map((item) => item.id));
        window.dispatchEvent(new Event("cartUpdated"));

        toast.success("Item Removed From Cart");
      },
    });
  };

  const _updateProduct = (
    isDecrement: boolean,
    item: any,
    productInCart: any,
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
      if (currentQty >= maxQty - CARTS_CONFIG.threshold)
        return showToast("Quantity exceeds limit");
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

      case "total":
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>
            ₹{Number(orderQuantity * item?.price).toFixed(2)}
          </S.TitleComp>
        );

      case "price":
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>
            ₹{Number(value).toFixed(2)}
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
      _renderItemField(key, value, item),
    );

  const _renderCartsData = () => {
    return (
      <>
        {cartProductsDetails.map((item, index) => {
          const productId = item?.productId || index;
          return (
            <div key={index}>
              <S.ItemBox isOddIndex={index % 2 != 0}>
                {_renderItemFields(item)}
                <S.CancelComp
                  $bgColor={theme.colors.primary}
                  onClick={() => _deleteItem(productId)}
                />
              </S.ItemBox>
            </div>
          );
        })}
      </>
    );
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
