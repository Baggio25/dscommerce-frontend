import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import { ProductDTO } from "../../../models/product";


import "./styles.css";

export default function ProductDetails() {

  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${params.productId}`)
      .then(response => {
        console.log(response.data)
        setProduct(response.data);
      });
  }, []);


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
