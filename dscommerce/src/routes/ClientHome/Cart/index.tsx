import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonInverseCaution from "../../../components/ButtonInverseCaution";

import { OrderDTO } from "../../../models/order";
import { ContextCartCount } from "../../../utils/context-cart";
import { formatPrice } from "../../../utils/formatters";

import * as orderService from "../../../services/order-service";
import * as cartService from "../../../services/cart-service";

import "./styles.css";

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());
  const { setContextCartCount } = useContext(ContextCartCount);

  function handleClearClick() {
    cartService.clearCart();
    updateCart();
  }

  function handlePlaceOrderClick() {
    orderService.placeOrderRequest(cart)
      .then((response) => {
        cartService.clearCart();
        setContextCartCount(0);
        navigate(`/confirmation/${response.data.id}`);
      });
  }

  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handleDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    updateCart();
  }

  function updateCart() {
    const newCart = cartService.getCart();
    setCart(newCart);
    setContextCartCount(newCart.items.length);
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
                      <div
                        className="dsc-cart-item-quantity-btn"
                        onClick={() => handleDecreaseItem(item.productId)}
                      >
                        -
                      </div>
                      <p>{item.quantity}</p>
                      <div
                        className="dsc-cart-item-quantity-btn"
                        onClick={() => handleIncreaseItem(item.productId)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dsc-cart-item-right">
                  <span>R$ {formatPrice(item.subTotal)}</span>
                </div>
              </div>
            ))}

            <div className="dsc-cart-total-container">
              <h3>R$ {formatPrice(cart.total)}</h3>
            </div>
          </div>
        )}

        <div className="dsc-btn-page-container">
          <div onClick={handlePlaceOrderClick}>
            <ButtonPrimary text="Finalizar Pedido"></ButtonPrimary>
          </div>

          <Link to="/catalog">
            <ButtonInverse text="Continuar Comprando"></ButtonInverse>
          </Link>

          {cart.items.length > 0 && (
            <div onClick={handleClearClick}>
              <ButtonInverseCaution text="Limpar Carrinho"></ButtonInverseCaution>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
