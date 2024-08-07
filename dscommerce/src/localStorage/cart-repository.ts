import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
  const str = "com.devsuperior.dscommerce/Cart";
  localStorage.setItem(str, JSON.stringify(cart));
}

export function get(): OrderDTO {}

export function clear() {}
