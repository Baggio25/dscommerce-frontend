import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";

import * as ProductService from "../../../services/product-service";

import "./styles.css";

export default function Catalog() {
  return (
    <main>
      <section className="dsc-container dsc-catalog-section">
        <SearchBar />

        <div className="dsc-mb-20 dsc-mt-20 dsc-catalog-cards">
          {
            ProductService.findAll().map(
              product => <CatalogCard key={product.id} product={product} />
            )
          }
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
