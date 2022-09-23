import styled from "styled-components";

const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

export default function Letras(props){
    const RenderizaTeclas = props.RenderizaTeclas;
    return(
        <SectionTeclas>
          <ul>
            {alfabeto.map((letra, index) => (
              <RenderizaTeclas letra={letra} indice={index} />
            ))}
          </ul>
        </SectionTeclas>
    )
}

//Estilização

const SectionTeclas = styled.section`
  display: flex;
  justify-content: center;

  ul {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-right: 2vw;
  }
`;