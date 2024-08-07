import { OrderDTO } from "../models/order";
import { ProductDTO } from "../models/product";

import * as cartRepository from "../localStorage/cart-repository";

export function saveCart(cart: OrderDTO) {
  cartRepository.save(cart);
}

export function getCart(): OrderDTO {}

export function clearCart() {}

export function addProduct(product: ProductDTO) {}

export function increaseItem(productId: number) {}

export function decreaseItem(productId: number) {}
