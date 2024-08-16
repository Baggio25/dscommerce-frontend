
import { ProductDTO } from "../../models/product";
import { formatPrice } from "../../utils/formatters";
import ProductCategory from "../ProductCategory";

import './styles.css';

type Props = {
  product: ProductDTO;
}

export default function ProductDetailsCard({ product }: Props) {
  return (
    <>
      <div className="dsc-card dsc-mb-20">
        <div className="dsc-product-details-top dsc-line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="dsc-product-details-bottom">
          <h3>R$ {formatPrice(product.price)}</h3>
          <h4>{product.name}</h4>
          <p>{product.description}</p>

          <div className="dsc-category-container">
            {
              product.categories.map(item => (
                <ProductCategory name={item.name} key={item.id} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
