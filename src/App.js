import palavras from "./palavras"
import { useState } from "react";
import imgInicial from "./assets/forca0.png"

let arrayPalavra = [];
let arrayEstadoJogo = [];

// função que gera números aleatórios no intervalo [-0.5,0.5]
function comparador() { 
	return Math.random() - 0.5; 
}

function sorteiaPalavra(){
  const palavra = palavras.sort(comparador);
  return palavra[0].split("");
}

export default function App(){
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let contadorCliques = 0;
    const [faseDoJogo, mudaFaseDoJogo] = useState("");
    const [habilitaTeclas, mudaHabilitaTeclas] = useState(false);
    const [habilitaInput, mudaHabilitaInput] = useState(true);
    const [teclaClicada, mudaTeclaClicada] = useState("");

    function RenderizaTeclas(props) {
        const [teclasCor, mudaTeclasCor] = useState(props.estado);
        function verificaTecla(){
            if(teclasCor === "habilitado"){
                mudaTeclasCor("desabilitado");
                contadorCliques++;
                mudaTeclaClicada(props.letra.toLowerCase());
                mudaFaseDoJogo("andamento");
            }
        }

        return (
              <li key={props.index} className={teclasCor} onClick={verificaTecla}>{props.letra}</li>
        );
      }

    function AtualizaJogo(props) {
        if (faseDoJogo === "inicio") {      
            return (
              <ul>
                {arrayPalavra.map((letra,index) => (
                  <li key={index}>_</li>
                ))}
              </ul>
            );
        }
          else if (faseDoJogo === "andamento") { 
            console.log(props.letraTecla);  
            console.log(arrayPalavra); 
            return (
              <ul>
                {arrayPalavra.map((letra,index) => {
                    if(letra === props.letraTecla){
                      arrayEstadoJogo[index] = letra            
                    }
                    return(<li key={index}>{arrayEstadoJogo[index]}</li>)
                }                
                )}
              </ul>
            );
          }       
    }
    return (
      <main>
        <section className="jogo">
          <img src={imgInicial} />

          <button
            onClick={() => {
              arrayPalavra = sorteiaPalavra()
              mudaFaseDoJogo("inicio");
              arrayPalavra.forEach(() => arrayEstadoJogo.push("_"));
              console.log(arrayEstadoJogo);
              mudaHabilitaTeclas(true);
              mudaHabilitaInput(false);
            }}
          >
            Escolher Palavra
          </button>
          {(faseDoJogo !== "") ? <AtualizaJogo letraTecla={teclaClicada}/> : <ul></ul>}
        </section>
        <section className="teclas">
          <ul>
            {habilitaTeclas ?  
                alfabeto.map((letra,index) => (
              <RenderizaTeclas letra={letra} estado="habilitado" index={index} />
            )) : alfabeto.map((letra,index) => (
                <RenderizaTeclas letra={letra} estado="desabilitado" index={index} />
              ))
            }
            
          </ul>
        </section>
        <section className="chute">
          Já sei a palavra!
          <input type="text" disabled={habilitaInput}></input>
          <button>Chutar</button>
        </section>
      </main>
    );
}