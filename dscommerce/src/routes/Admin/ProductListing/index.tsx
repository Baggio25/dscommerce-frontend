import computerImg from "../../../assets/images/computer.png";
import editImg from "../../../assets/images/edit.svg";
import deleteImg from "../../../assets/images/delete.svg";

import "./styles.css";

export default function ProductListing() {
  return (
    <main>
      <section className="dsc-container dsc-product-listing-section">
        <h2 className="dsc-section-title dsc-mb-20">Cadastro de Produtos</h2>

        <div className="dsc-btn-page-container dsc-mb-20">
          <div className="dsc-btn dsc-btn-white">Início</div>
        </div>

        <form className="dsc-search-bar">
          <button type="submit">🔎︎</button>
          <input type="text" placeholder="Nome do produto" />
          <button type="reset">🗙</button>
        </form>

        <table className="dsc-table dsc-mb-20 dsc-mt-20">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerImg}
                  alt="pc"
                />
              </td>
              <td className="dsc-tb768">
                <span>R$ 5.000,00</span>
              </td>
              <td className="dsc-txt-left">
                <span>Computador Gamer XT Plus Ultra</span>
              </td>
              <td>
                <img
                  src={editImg}
                  alt="edit"
                  className="dsc-product-listing-btn"
                />
              </td>
              <td>
                <img
                  src={deleteImg}
                  alt="delete"
                  className="dsc-product-listing-btn"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="dsc-btn-next-page">
          <span>Carregar mais</span>
        </div>
      </section>
    </main>
  );
}
