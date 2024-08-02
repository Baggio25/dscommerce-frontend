import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";

import { ProductDTO } from "../../../models/Product";

import "./styles.css";

const product: ProductDTO = {
  id: 123,
  name: "Fone De Ouvido Headphone Bt 950² Sem Fio Rádio Cartão Sd",
  description: "Apresentamos o Fone de Ouvido 950², uma combinação perfeita de sofisticação e desempenho para sua experiência auditiva. Este incrível fone de ouvido sem fio oferece a liberdade da conectividade Bluetooth 5.0, além de recursos adicionais que tornam uma escolha de recursos excepcionais.",
  price: 109.81,
  imgUrl: "https://http2.mlstatic.com/D_NQ_NP_654221-MLB76329366061_052024-O.webp",
  categories: [
    {
      id: 2,
      name: "Fones e Kits Viva Voz"
    },
    {
      id: 3,
      name: "Acessórios para celulares"
    },
    {
      id: 1,
      name: "Importados"
    }
  ]
}

export default function Catalog() {
  return (
    <main>
      <section className="dsc-container dsc-catalog-section">
        <SearchBar />

        <div className="dsc-mb-20 dsc-mt-20 dsc-catalog-cards">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
