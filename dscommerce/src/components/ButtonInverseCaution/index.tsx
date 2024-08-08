
import './styles.css';

type Props = {
  text: string;
}

export default function ButtonInverseCaution({text}: Props) {
  return (
    <>
      <div className="dsc-btn dsc-btn-red">{text}</div>
    </>
  )
}