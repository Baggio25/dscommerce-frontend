
import cartIcon from "../../assets/images/cart.svg";

import "./styles.css";

export default function CartIcon() {
  return (
    <>
      <img src={cartIcon} alt="carrinho" />
      <div className="dsc-cart-count">2</div>
    </>
  );
}
