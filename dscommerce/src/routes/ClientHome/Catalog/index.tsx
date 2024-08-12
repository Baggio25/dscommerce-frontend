import { useEffect, useState } from "react";

import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";

import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

import "./styles.css";

type QueryParams = {
  page: number;
  name: string;
};

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        setProducts(response.data.content);
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setQueryParams({ ...queryParams, name: searchText });
  }

  return (
    <main>
      <section className="dsc-container dsc-catalog-section">
        <SearchBar onSearch={handleSearch} />

        <div className="dsc-mb-20 dsc-mt-20 dsc-catalog-cards">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
