import { useState } from "react";
import { Link } from "react-router-dom";

import { OrderDTO } from "../../../models/order";
import * as cartService from "../../../services/cart-service";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonInverseCaution from "../../../components/ButtonInverseCaution";

import "./styles.css";

export default function Cart() {

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  function handleClearClick() {
    cartService.clearCart();
    setCart(cartService.getCart());
  }

  function handleIncreaseItem(productId : number) {
    cartService.increaseItem(productId);
    console.log("Acrescentou no localstorage: " + productId);
    
    setCart(cartService.getCart());
    console.log("Carrinho: " + cartService.getCart().items);
  }

  function handleDecreaseItem(productId : number) {
    cartService.decreaseItem(productId);
    console.log("Acrescentou no localstorage: " + productId);
    
    setCart(cartService.getCart());
    console.log("Carrinho: " + cartService.getCart().items);
  }

  return (
    <main>
      <section className="dsc-container dsc-cart-container-section">
        {cart.items.length === 0 ? (
          <div>
            <h2 className="dsc-section-title dsc-mb-20">
              Seu carrinho está vazio!
            </h2>
          </div>
        ) : (
          <div className="dsc-card dsc-mb-20">
            {cart.items.map((item) => (
              <div
                className="dsc-cart-item-container dsc-line-bottom"
                key={item.productId}
              >
                <div className="dsc-cart-item-left">
                  <img src={item.imgUrl} alt={item.name} />
                  <div className="dsc-cart-item-description">
                    <h3>{item.name}</h3>
                    <div className="dsc-cart-item-quantity-container">
                      <div className="dsc-cart-item-quantity-btn"
                            onClick={() => handleDecreaseItem(item.productId)}>-</div>
                      <p>{item.quantity}</p>
                      <div className="dsc-cart-item-quantity-btn" 
                           onClick={() => handleIncreaseItem(item.productId)}>+</div>
                    </div>
                  </div>
                </div>
                <div className="dsc-cart-item-right">
                  <span>R$ {item.subTotal.toFixed(2)}</span>
                </div>
              </div>
            ))}

            <div className="dsc-cart-total-container">
              <h3>R$ {cart.total.toFixed(2)}</h3>
            </div>
          </div>
        )}

        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Finalizar Pedido"></ButtonPrimary>

          <Link to="/catalog">
            <ButtonInverse text="Continuar Comprando"></ButtonInverse>
          </Link>

          { cart.items.length > 0 && (
            <div onClick={handleClearClick}>
              <ButtonInverseCaution text="Limpar Carrinho"></ButtonInverseCaution>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
