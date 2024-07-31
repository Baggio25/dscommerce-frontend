import HeaderClient from "../../components/HeaderClient";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonInverse from "../../components/ButtonInverse";
import ProductDetailsCard from "../../components/ProductDetailsCard";

import "./styles.css";

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container dsc-product-details-section">
          <ProductDetailsCard />

          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
