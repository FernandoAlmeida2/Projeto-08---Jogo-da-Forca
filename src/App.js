import palavras from "./palavras"
import { useState} from "react";
import imgInicial from "./assets/forca0.png"
import img1 from "./assets/forca1.png"
import img2 from "./assets/forca2.png"
import img3 from "./assets/forca3.png"
import img4 from "./assets/forca4.png"
import img5 from "./assets/forca5.png"
import img6 from "./assets/forca6.png"

const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let arrayPalavra = [];
let arrayEstadoJogo = [];
let inicioDoJogo = true;
let numErros = 0;
//const estadoTecla = alfabeto.map((elemento) => ({letra: elemento, estado: "desabilitado"}));
// função que gera números aleatórios no intervalo [-0.5,0.5]
function comparador() { 
	return Math.random() - 0.5; 
}

function sorteiaPalavra(){
  const palavra = palavras.sort(comparador);
  return palavra[0].split("");
}

function verificaResultado() {
  if(arrayEstadoJogo.filter((letra) => letra === "_").length === 0)
    return true;
  return false;
}

export default function App(){
    const [habilitaInput, mudaHabilitaInput] = useState(true);
    const [resultado, mostraResultado] = useState("");
    const [valorChutado, escreveChute] = useState("");
    const [teclasClicadas, incluiTecla] = useState([]);

    function addTecla(letra){
      incluiTecla([letra,...teclasClicadas])
    }
   
    function RenderizaTeclas(props) {
        const letra = props.letra.toLowerCase();
        function verificaTecla(tecla){
            if(!teclasClicadas.includes(tecla)){
                if(!arrayPalavra.join("").normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(tecla))
                  numErros++
                addTecla(tecla);   
            }
        }
        return (
          <li
            key={letra}
            className={
              teclasClicadas.includes(letra) ||
              inicioDoJogo === true
                ? "desabilitado"
                : "habilitado"
            }
            onClick={() => {
              verificaTecla(letra);
            }}
          >
            {letra}
          </li>
        );
      }
    
    function iniciaJogo(){
      inicioDoJogo = false;
      numErros = 0
      arrayEstadoJogo = [];
      incluiTecla([]);
      arrayPalavra = sorteiaPalavra()
      arrayPalavra.forEach(() => arrayEstadoJogo.push("_"));
      mudaHabilitaInput(false);
      escreveChute("")
      mostraResultado("")
    }

    function CarregaImagem(){
      switch(numErros){
        case 0:
          return <img src={imgInicial} alt="Layout inicial jogo da forca"/>
        case 1:
          return <img src={img1} alt="Cometeu 1 erro!"/>
        case 2:
          return <img src={img2} alt="Cometeu 2 erros!"/>
        case 3:
          return <img src={img3} alt="Cometeu 3 erros!"/>
        case 4:
          return <img src={img4} alt="Cometeu 4 erros!"/>
        case 5:
          return <img src={img5} alt="Cometeu 5 erros!"/>
        default:
          return <img src={img6} alt="Cometeu 6 erros! Você perdeu!"/>
      }
    }

    function CarregaPalavra(){
      let rows = [];
      for (let i = 0; i < arrayPalavra.length; i++) {
        const letraLimpa = arrayPalavra[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        if (teclasClicadas.includes(letraLimpa)) {
          arrayEstadoJogo[i] = arrayPalavra[i];
        }

        rows.push(<li key={i}>{ resultado === "" ? arrayEstadoJogo[i] : arrayPalavra[i]}</li>);
      }
      if(verificaResultado() === true)
          mostraResultado("ganhou")
      if(numErros > 5){
          mostraResultado("perdeu")
      }
      return <ul className={resultado}>{rows}</ul>
    }


    function verificaChute(){
      if(arrayPalavra.join("") === valorChutado)
        mostraResultado("ganhou")
        else
          mostraResultado("perdeu")
    }

    return (
      <main>
        <section className="jogo">
          <CarregaImagem/>

          <button onClick={iniciaJogo}>
            Escolher Palavra
          </button>
          {inicioDoJogo === false ? <CarregaPalavra/> : <ul></ul>}
        </section>
        <section className="teclas">
          <ul>
            {alfabeto.map((letra) => (<RenderizaTeclas letra={letra} />))} 
          </ul>
        </section>
        <section className="chute">
          Já sei a palavra!
          <input type="text" value={valorChutado} onChange={(e) => escreveChute(e.target.value)} disabled={habilitaInput}></input>
          <button onClick={verificaChute}>Chutar</button>
        </section>
      </main>
    );
}