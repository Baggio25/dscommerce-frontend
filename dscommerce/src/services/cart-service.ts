import { OrderDTO, OrderItemDTO } from "../models/order";
import { ProductDTO } from "../models/product";

import * as cartRepository from "../localStorage/cart-repository";

export function saveCart(cart: OrderDTO) {
  cartRepository.save(cart);
}

export function getCart(): OrderDTO {
  return cartRepository.get();
}

export function addProduct(product: ProductDTO) {
  const cart = cartRepository.get();
  const item = cart.items.find((item) => item.productId === product.id); //procura se dentro carrinho ja existe um item igual ao que está sendo inserido

  if (!item) {
    const newItem = new OrderItemDTO(
      product.id,
      1,
      product.name,
      product.price,
      product.imgUrl
    );
    cart.items.push(newItem);

    cartRepository.save(cart);
  }
}

export function clearCart() {
  cartRepository.clear();
}

export function increaseItem(productId: number) {
  const cart = cartRepository.get();
  const item = cart.items.find((i) => i.productId === productId);

  if (item) {
    item.quantity++;
    cartRepository.save(cart);
  }
}

export function decreaseItem(productId: number) {
  const cart = cartRepository.get();
  const item = cart.items.find((i) => i.productId === productId);

  if (item) {
    item.quantity--;

    if(item.quantity < 1) {
      cart.items = cart.items.filter(i => i.productId !== productId);
    }

    cartRepository.save(cart);
  }
}
