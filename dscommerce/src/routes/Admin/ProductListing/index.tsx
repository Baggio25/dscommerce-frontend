import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ProductDTO } from "../../../models/product";
import { formatPrice } from "../../../utils/formatters";

import ButtonNextPage from "../../../components/ButtonNextPage";
import SearchBar from "../../../components/SearchBar";
import ButtonInverse from "../../../components/ButtonInverse";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";

import * as productService from "../../../services/product-service";

import editImg from "../../../assets/images/edit.svg";
import deleteImg from "../../../assets/images/delete.svg";

import "./styles.css";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação concluída com sucesso!",
  });
 
  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    message: "Deseja realmente excluir o registro?",
  });

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleDialogInfoClose() {
    setDialogInfoData({
      ...dialogInfoData,
      visible: false
    })
  }
  
  function handleDeleteClick() {
    setDialogConfirmationData({
      ...dialogConfirmationData,
      visible: true
    })
  }

  function handleDialogConfirmationAnswer(answer: boolean) {
    console.log("Resposta: " + answer);
    setDialogConfirmationData({
      ...dialogConfirmationData,
      visible: false
    })
  }

  return (
    <main>
      <section className="dsc-container dsc-product-listing-section">
        <h2 className="dsc-section-title dsc-mb-20">Cadastro de Produtos</h2>

        <div className="dsc-btn-page-container dsc-mb-20">
          <Link to="/admin">
            <ButtonInverse text="Início" />
          </Link>
        </div>

        <SearchBar onSearch={handleSearch} />

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
            {products.map((product) => (
              <tr key={product.id}>
                <td className="dsc-tb576">{product.id}</td>
                <td>
                  <img
                    className="dsc-product-listing-image"
                    src={product.imgUrl}
                    alt="pc"
                  />
                </td>
                <td className="dsc-tb768">
                  <span>R$ {formatPrice(product.price)}</span>
                </td>
                <td className="dsc-txt-left">
                  <span>{product.name}</span>
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
                    onClick={handleDeleteClick}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isLastPage && (
          <div onClick={handleNextPageClick}>
            <ButtonNextPage />
          </div>
        )}
      </section>

      {dialogInfoData.visible && (
        <DialogInfo
          message={dialogInfoData.message}
          onDialogClose={handleDialogInfoClose}
        />
      )}
      
      {dialogConfirmationData.visible && (
        <DialogConfirmation
          message={dialogConfirmationData.message}
          onDialogAnswer={handleDialogConfirmationAnswer}
        />
      )}
    </main>
  );
}
