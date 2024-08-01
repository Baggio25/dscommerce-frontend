import HeaderClient from "../../components/HeaderClient";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonInverse from "../../components/ButtonInverse";
import ProductDetailsCard from "../../components/ProductDetailsCard";

import { ProductDTO } from "../../models/Product";

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

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container dsc-product-details-section">
          <ProductDetailsCard product={product} />

          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar"/>
            <ButtonInverse text="Início" />
          </div>
        </section>
      </main>
    </>
  );
}
