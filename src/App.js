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
    const [iniciouJogo, mudaIniciouJogo] = useState(true);
    function IniciaJogo(){
        const palavra = palavras.sort(comparador);
        arrayPalavra = palavra[0].split("");
        console.log(arrayPalavra)
        return (
            <ul>
                {arrayPalavra.map((letra) => <li>{letra}</li>)}
            </ul>
            )
    }
    return(
        <main>
            <section className="jogo">
                <img src="./assets/forca0.png"/>
                <button onClick={mudaIniciouJogo(true)}>Escolher Palavra</button>
                {iniciouJogo ? IniciaJogo : <ul></ul>}
            </section>
            <section className="teclas">
                <ul>
                    {alfabeto.map((letra) => <li>{letra}</li>)}
                </ul>
            </section>
            <section className="chute">
                Já sei a palavra!
                <input></input>
                <button>Chutar</button>
            </section>
        </main>
    )
}