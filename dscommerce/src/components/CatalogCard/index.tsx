
import productImg from '../../assets/images/computer.png';

import "./styles.css";

export default function CatalogCard() {
  return (
    <>
      <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={productImg} alt="product" />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>R$ 5.000,00</h3>
          <h4>Computador Gamer XT</h4>
        </div>
      </div>
    </>
  );
}
