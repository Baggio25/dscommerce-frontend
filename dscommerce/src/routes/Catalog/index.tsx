import ButtonNextPage from '../../components/ButtonNextPage';
import CatalogCard from '../../components/CatalogCard';
import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';


import "./styles.css";

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container dsc-catalog-section">
          <SearchBar />

          <div className="dsc-mb-20 dsc-mt-20 dsc-catalog-cards">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
