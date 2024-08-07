
import { useEffect } from "react";

import * as cartService from "../../../services/cart-service";
import { OrderDTO, OrderItemDTO } from "../../../models/order";

import "./styles.css";


const item1 : OrderItemDTO = new OrderItemDTO(4, 1, "PC Gamer", 1200,
  "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg",
);

const item2 : OrderItemDTO = new OrderItemDTO(5, 2, "Rails for Dummies", 100.99,
  "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg",
);

const cart : OrderDTO = new OrderDTO(); 

export default function Cart() {
  
  useEffect(() => {
    cart.items.push(item1);
    cart.items.push(item2);

    cartService.saveCart(cart);
  }, []);

  return (
    <main>
      <section className="dsc-container dsc-cart-container-section">
        <div className="dsc-card dsc-mb-20">

          {cart.items.map((item) => (
            <div className="dsc-cart-item-container dsc-line-bottom" key={item.productId}>
              <div className="dsc-cart-item-left">
                <img src={item.imgUrl} alt={item.name} />
                <div className="dsc-cart-item-description">
                  <h3>{item.name}</h3>
                  <div className="dsc-cart-item-quantity-container">
                    <div className="dsc-cart-item-quantity-btn">-</div>
                    <p>{item.quantity}</p>
                    <div className="dsc-cart-item-quantity-btn">+</div>
                  </div>
                </div>
              </div>
              <div className="dsc-cart-item-right">
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}

          <div className="dsc-cart-total-container">
            <h3>R$ 10.000,00</h3>
          </div>
        </div>
        <div className="dsc-btn-page-container">
          <div className="dsc-btn dsc-btn-blue">Finalizar Pedido</div>
          <div className="dsc-btn dsc-btn-white">Continuar Comprando</div>
        </div>
      </section>
    </main>
  );
}
