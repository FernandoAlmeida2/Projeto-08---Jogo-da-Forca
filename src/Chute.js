

export default function Chute(props){
    const {valorChutado, escreveChute, desabilitaInput,verificaChute} = props;
    return(
        <section className="chute">
          Já sei a palavra!
          <input
            data-identifier="type-guess"
            type="text"
            value={valorChutado}
            onChange={(e) => escreveChute(e.target.value)}
            disabled={desabilitaInput}
          ></input>
          <button data-identifier="guess-button" onClick={verificaChute}>Chutar</button>
        </section>
    )
}