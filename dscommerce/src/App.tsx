import HeaderClient from "./components/HeaderClient";
import computerImg from "./assets/images/computer.png";

import "./App.css";

function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container dsc-product-details-section">
          <div className="dsc-card dsc-mb-20">
            <div className="dsc-product-details-top dsc-line-bottom">
              <img src={computerImg} alt="product" />
            </div>
            <div className="dsc-product-details-bottom">
              <h3>R$ 5.000,00</h3>
              <h4>Notebook DELL 15,5" 4K 512SSD 8GB</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                vel aspernatur vitae quod nobis cumque placeat id, excepturi
                corporis sit maxime libero nemo atque! Ad, ratione eos.
                Consequatur porro distinctio debitis facere ex molestias
                quibusdam quos eveniet ratione, totam perspiciatis aliquam culpa
                asperiores tempora soluta aperiam quia commodi magni velit harum
                fugit eius nemo assumenda? Sed reiciendis blanditiis velit atque
                eius eveniet illo hic ipsum reprehenderit magnam earum eos
                dolorem cupiditate, eaque voluptate doloremque tenetur pariatur
                veritatis illum qui commodi similique necessitatibus aliquam!
                Facilis rerum beatae a voluptas adipisci nemo non voluptatibus
                cum.
              </p>

              <div className="dsc-category-container">
                <div className="dsc-category">Eletônicos</div>
                <div className="dsc-category">Computadores</div>
              </div>
            </div>
          </div>
          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue">Comprar</div>
            <div className="dsc-btn dsc-btn-white">Início</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
