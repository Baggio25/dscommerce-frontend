import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";
import * as cartService from "../../../services/cart-service";

import "./styles.css";

export default function ProductDetails() {

  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();
  const navigate = useNavigate();

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        console.log(response.data)
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);
  
  function handleBuyClick() {
    if (product) {
      cartService.addProduct(product);
      navigate("/cart");
    }
  }


  return (
    <main>
      <section className="dsc-container dsc-product-details-section">
        {
          product && <ProductDetailsCard product={product} /> 
        }

        <div className="dsc-btn-page-container">
          <div onClick={handleBuyClick}>
            <ButtonPrimary text="Comprar" />
          </div>

          <Link to="/">
            <ButtonInverse text="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
