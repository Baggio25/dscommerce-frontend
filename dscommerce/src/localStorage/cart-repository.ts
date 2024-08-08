import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart: OrderDTO) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function get(): OrderDTO {
  const str = localStorage.getItem(CART_KEY) || '{"items": []}';
  const obj = JSON.parse(str) as OrderDTO;

  const cart = new OrderDTO();
  obj.items.forEach((item) => {
    cart.items.push(
      new OrderItemDTO(item.productId, 1, item.name, item.price, item.imgUrl)
    );
  });

  return cart;
}

export function clear() {}
