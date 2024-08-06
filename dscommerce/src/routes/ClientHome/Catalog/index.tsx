import { useEffect, useState } from "react";
import axios from "axios";
import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";

import { ProductDTO } from "../../../models/product";

import "./styles.css";

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products?size=12")
      .then(response => {
        setProducts(response.data.content);
      })
  }, []);

  return (
    <main>
      <section className="dsc-container dsc-catalog-section">
        <SearchBar />

        <div className="dsc-mb-20 dsc-mt-20 dsc-catalog-cards">
          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />
            )
          }
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
