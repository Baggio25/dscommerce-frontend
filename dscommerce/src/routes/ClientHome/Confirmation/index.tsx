import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { OrderDTO } from "../../../models/order";
import { formatPrice } from "../../../utils/formatters";

import * as orderService from "../../../services/order-service";

import "./styles.css";

export default function Confirmation() {
  const params = useParams();
  const [order, setOrder] = useState<OrderDTO>();

  useEffect(() => {
    orderService.findByIdRequest(Number(params.orderId))
      .then((response) => {
        setOrder(response.data);
      });
  }, []);

  return (
    <main>
      <section className="dsc-container dsc-confirmation-container-section">
        <div className="dsc-mb-20 dsc-confirmation-message">
          <span>Pedido Nº {order?.id} finalizado!</span>
        </div>

        <div className="dsc-card dsc-mb-20">
          {order?.items.map((item) => (
            <div
              className="dsc-cart-item-container dsc-line-bottom"
              key={item.productId}
            >
              <div className="dsc-cart-item-left">
                <img src={item.imgUrl} alt={item.name} />
                <div className="dsc-cart-item-description">
                  <h3>{item.name}</h3>
                  <div className="dsc-cart-item-quantity-container">
                    <p>{item.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="dsc-cart-item-right">
                <span>R$ {formatPrice(item.subTotal)}</span>
              </div>
            </div>
          ))}

          <div className="dsc-cart-total-container">
            <h3>R$ {formatPrice(order?.total || 0)}</h3>
          </div>
        </div>

      <Link to="/">
          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-white">Início</div>
          </div>
        </Link>
      </section>
    </main>
  );
}
