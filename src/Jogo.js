import styled from "styled-components";

export default function Jogo(props){
    const {iniciaJogo, jogoIniciou, CarregaImagem, CarregaPalavra} = props;
    return(
        <SectionJogo>
          <CarregaImagem />

          <button data-identifier="choose-word" onClick={iniciaJogo}>
            Escolher Palavra
          </button>
          {jogoIniciou === true ? <CarregaPalavra /> : <ul></ul>}
        </SectionJogo>
    )
}

// Estilização

const SectionJogo = styled.section`
  width: 50%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  margin: 4% 0 3% 0;

  button{
    width: 12vw;
    height: 7vh;
    border-radius: 0.5vw;
    border:none;
    background-color: #27AE60;
    margin: 4vh 5vw 0 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1vw;
  }

  ul{
    display:flex;
    position:absolute;
    right:30vw;
    bottom: 16vw;
}
`
