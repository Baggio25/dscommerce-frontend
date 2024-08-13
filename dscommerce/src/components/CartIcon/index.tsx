
import { useState } from "react";
import cartIcon from "../../assets/images/cart.svg";

import * as cartService from "../../services/cart-service";

import "./styles.css";

export default function CartIcon() {

  const [cart, setCart] = useState(cartService.getCart());

  return (
    <>
      <img src={cartIcon} alt="carrinho" />
      <div className="dsc-cart-count">{cart.items.length}</div>
    </>
  );
}
