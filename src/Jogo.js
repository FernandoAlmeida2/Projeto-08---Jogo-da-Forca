export default function Jogo(props){
    const {iniciaJogo, inicioDoJogo, CarregaImagem, CarregaPalavra} = props;
    return(
        <section className="jogo">
          <CarregaImagem />

          <button data-identifier="choose-word" onClick={iniciaJogo}>
            Escolher Palavra
          </button>
          {inicioDoJogo === false ? <CarregaPalavra /> : <ul></ul>}
        </section>
    )
}