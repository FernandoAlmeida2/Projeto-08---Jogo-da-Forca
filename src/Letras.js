const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

export default function Letras(props){
    const RenderizaTeclas = props.RenderizaTeclas;
    return(
        <section className="teclas">
          <ul>
            {alfabeto.map((letra, index) => (
              <RenderizaTeclas letra={letra} indice={index} />
            ))}
          </ul>
        </section>
    )
}