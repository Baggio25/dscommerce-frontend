
import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import * as ProductService from "../../../services/product-service";

import "./styles.css";
import { Link } from "react-router-dom";

export default function ProductDetails() {

  const params = useParams();
  const product = ProductService.findById(Number(params.productId));

  return (
    <main>
      <section className="dsc-container dsc-product-details-section">
        {
          product && <ProductDetailsCard product={product} />
        }

        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />

          <Link to="/">
            <ButtonInverse text="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
