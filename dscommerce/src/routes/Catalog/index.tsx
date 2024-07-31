
import productImg from '../../assets/images/computer.png';
import HeaderClient from '../../components/HeaderClient';

import "./styles.css";

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container dsc-catalog-section">
          <form className="dsc-search-bar">
            <button type="submit">🔎︎</button>
            <input type="text" placeholder="Nome do produto" />
            <button type="reset">🗙</button>
          </form>

          <div className="dsc-mb-20 dsc-mt-20 dsc-catalog-cards">
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card ">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>
                  Computador Gamer XT com suporte e 16GB de memória e
                  processador turbo plus
                </h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>
                  Computador Gamer XT com suporte e 16GB de memória e
                  processador turbo plus
                </h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>
                  Computador Gamer XT com suporte e 16GB de memória e
                  processador turbo plus
                </h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>
                  Computador Gamer XT com suporte e 16GB de memória e
                  processador turbo plus
                </h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={productImg} alt="product" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>
                  Computador Gamer XT com suporte e 16GB de memória e
                  processador turbo plus
                </h4>
              </div>
            </div>
          </div>

          <div className="dsc-btn-next-page">
            <span>Carregar mais</span>
          </div>
        </section>
      </main>
    </>
  );
}
