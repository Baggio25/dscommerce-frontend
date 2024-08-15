import { useContext } from "react";
import cartIcon from "../../assets/images/cart.svg";

import { ContextCartCount } from "../../utils/context-cart";

import "./styles.css";

export default function CartIcon() {
  const { contextCartCount } = useContext(ContextCartCount);

  return (
    <div className="dsc-cart-icon">
      <img src={cartIcon} alt="carrinho" />
      
      {contextCartCount > 0 && (
        <div className="dsc-cart-count">{contextCartCount}</div>
      )}
    </div>
  );
}
