import palavras from "./palavras"
import { useState } from "react";

// função que gera números aleatórios no intervalo [-0.5,0.5]
function comparador() { 
	return Math.random() - 0.5; 
}



export default function App(){
    const alfabeto = ["A","B","C","D","E","G","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let arrayPalavra = [];
    const [iniciouJogo, mudaIniciouJogo] = useState(false);
    const [habilitaTeclas, mudaHabilitaTeclas] = useState(false);

    function RenderizaTeclas(props) {
        const [teclasCor, mudaTeclasCor] = useState(props.estado);
        return (
              <li className={teclasCor} onClick={() => mudaTeclasCor("desabilitado")}>{props.letra}</li>
        );
      }

    function IniciaJogo() {
        const palavra = palavras.sort(comparador);
        arrayPalavra = palavra[0].split("");
        return (
        <ul>
            {arrayPalavra.map(() => (
            <li>_</li>
            ))}
        </ul>
        );
    }
    return (
      <main>
        <section className="jogo">
          <img src="./assets/forca0.png" />

          <button
            onClick={() => {
              mudaIniciouJogo(true);
              mudaHabilitaTeclas(true);
            }}
          >
            Escolher Palavra
          </button>
          {iniciouJogo ? IniciaJogo() : <ul></ul>}
        </section>
        <section className="teclas">
          <ul>
            {habilitaTeclas ?  
                alfabeto.map((letra) => (
              <RenderizaTeclas letra={letra} estado="habilitado" />
            )) : alfabeto.map((letra) => (
                <RenderizaTeclas letra={letra} estado="desabilitado" />
              ))
            }
            
          </ul>
        </section>
        <section className="chute">
          Já sei a palavra!
          <input></input>
          <button>Chutar</button>
        </section>
      </main>
    );
}