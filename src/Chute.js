import styled from "styled-components";

export default function Chute(props) {
  const { valorChutado, escreveChute, desabilitaInput, verificaChute } = props;
  return (
    <SectionChute>
      Já sei a palavra!
      <input
        data-identifier="type-guess"
        type="text"
        value={valorChutado}
        onChange={(e) => escreveChute(e.target.value)}
        disabled={desabilitaInput}
      ></input>
      <button data-identifier="guess-button" onClick={verificaChute}>
        Chutar
      </button>
    </SectionChute>
  );
}

// Estilização

const SectionChute = styled.section`
  margin-top: 2vw;
  font-size: 1.1vw;
  margin-right: 2vw;

  input{
    height: 1.8vw;
    width: 20vw;
    margin: 0 1vw 0 1vw;
    border-radius: 0.4vw;
  }

  button{
    height: 2.7vw;
    width: 5vw;
    font-weight: bold;
    font-size: 1vw;
    background-color: #E1ECF4;
    color: #2F679A;
    border: 0.1vw solid #5c99d3;
    border-radius: 0.4vw;
  }

`;
