import HeaderClient from "./components/HeaderClient";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonInverse from "./components/ButtonInverse";

import "./App.css";
import ProductDetailsCard from "./components/ProductDetailsCard";

function App() {
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

export default App;
