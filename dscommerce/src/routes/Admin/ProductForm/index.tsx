
import "./styles.css";

export default function ProductForm() {
  return(
    <main>
    <section className="dsc-container dsc-product-form-section">
      <div className="dsc-product-form-container">
        <form className="dsc-card dsc-form ">
          <h2>Dados do Produto</h2>

          <div className="dsc-form-controls-container">
            <div>
              <input className="dsc-form-control" type="text" placeholder="Nome" autoFocus required />
            </div>
            
            <div>
              <input className="dsc-form-control" type="text" placeholder="Preço"required />
            </div>
            
            <div>
              <input className="dsc-form-control" type="text" placeholder="Imagem" required />
            </div>

            <div> 
              <select className="dsc-form-control dsc-select" required>
                <option value="" disabled selected>Categorias</option>
                <option value="1">Valor 1</option>
                <option value="2">Valor 2</option>
              </select>
            </div>
            
            <div>
              <textarea className="dsc-form-control dsc-textarea" placeholder="Descrição"></textarea>
            </div>
            
          </div>
          
          <div className="dsc-product-form-buttons">
            <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
            <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
          </div>
        </form>
      </div>
    </section>
  </main>
  )
}