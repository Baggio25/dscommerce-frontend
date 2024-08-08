import { OrderDTO } from "../models/order";

const strKey = "com.devsuperior.dscommerce/Cart";

export function save(cart: OrderDTO) {
  localStorage.setItem(strKey, JSON.stringify(cart));
}

export function get(): OrderDTO {
  const str = localStorage.getItem(strKey) || '{"items": []}';
  return JSON.parse(str);
}

export function clear() {}
