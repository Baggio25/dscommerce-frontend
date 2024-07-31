import cartIcon from "../../assets/images/cart.svg";

import './styles.css';

export default function HeaderClient() {
  return (
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <h1>DSCommerce</h1>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              <div className="dsc-menu-item">
                <img src={cartIcon} alt="carrinho" />
              </div>

              <a href="#">Entrar</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
