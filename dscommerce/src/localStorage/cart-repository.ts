import { OrderDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart: OrderDTO) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function get(): OrderDTO {
  const str = localStorage.getItem(CART_KEY) || '{"items": []}';
  return JSON.parse(str);
}

export function clear() {}
