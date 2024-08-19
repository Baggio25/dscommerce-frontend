
import ButtonPrimary from "../ButtonPrimary";

import "./styles.css";

export default function DialogInfo() {
  return (
    <div className="dsc-dialog-background">
      <div className="dsc-dialog-box">
        <h4>Operação concluída com sucesso!</h4>
        <ButtonPrimary text="Ok!"/>
      </div>
    </div>
  )
}