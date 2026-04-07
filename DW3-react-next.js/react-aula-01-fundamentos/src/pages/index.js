import Contador from "@/components/Contador";
import Descricao from "@/components/Descricao";
import Dog from "@/components/Dogs";
import Form from "@/components/Form";
import MeuComponente from "@/components/MeuComponente";
import User from "@/components/User";


export default function Home() {
  return (
    <>
      <h1>Olá, mundo!</h1>
      <p>Bem-vindo ao meu primeiro site em React.</p>
      <br />
      <MeuComponente />
      <br />
      <User />
      <br />
      {/* Chamando o componente Descricao e passando dados externos para ele */}
      <Descricao cidade="Pariquera-Açu" idade={19} />

      {/* Desestruturação do props */}
      <Dog nome="Rex" raca="Pitbull" idade={4} />

      {/* hook useState */}
      < Contador />

      <Form />
    </>
  );
}
