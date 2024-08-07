
import imgCart from "../../../assets/images/computer.png";

import "./styles.css";

export default function Cart() {
  return (
    <main>
      <section className="dsc-container dsc-cart-container-section">
        <div className="dsc-card dsc-mb-20">
          <div className="dsc-cart-item-container dsc-line-bottom">
            <div className="dsc-cart-item-left">
              <img src={imgCart} alt="product" />
              <div className="dsc-cart-item-description">
                <h3>Computador Gamer XT</h3>
                <div className="dsc-cart-item-quantity-container">
                  <div className="dsc-cart-item-quantity-btn">-</div>
                  <p>1</p>
                  <div className="dsc-cart-item-quantity-btn">+</div>
                </div>
              </div>
            </div>
            <div className="dsc-cart-item-right">
              <span>R$ 5.000,00</span>
            </div>
          </div>

          <div className="dsc-cart-item-container dsc-line-bottom">
            <div className="dsc-cart-item-left">
              <img src={imgCart} alt="product" />
              <div className="dsc-cart-item-description">
                <h3>Computador Gamer XT</h3>
                <div className="dsc-cart-item-quantity-container">
                  <div className="dsc-cart-item-quantity-btn">-</div>
                  <p>1</p>
                  <div className="dsc-cart-item-quantity-btn">+</div>
                </div>
              </div>
            </div>
            <div className="dsc-cart-item-right">
              <span>R$ 5.000,00</span>
            </div>
          </div>

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
