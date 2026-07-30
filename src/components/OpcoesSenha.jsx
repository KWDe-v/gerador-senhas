import './OpcoesSenha.css'

// Mostra os controles: tamanho da senha e checkboxes de números/símbolos.
// Tudo é controlado pelo componente pai via props.
function OpcoesSenha({
  tamanho,
  usarNumeros,
  usarSimbolos,
  aoMudarTamanho,
  aoMudarNumeros,
  aoMudarSimbolos,
}) {
  return (
    <div className="opcoes">
      <div className="opcoes__linha">
        <label htmlFor="tamanho">Tamanho: {tamanho}</label>
        <input
          id="tamanho"
          type="range"
          min="6"
          max="30"
          value={tamanho}
          onChange={(e) => aoMudarTamanho(Number(e.target.value))}
        />
      </div>

      <label className="opcoes__check">
        <input
          type="checkbox"
          checked={usarNumeros}
          onChange={(e) => aoMudarNumeros(e.target.checked)}
        />
        Incluir números (0-9)
      </label>

      <label className="opcoes__check">
        <input
          type="checkbox"
          checked={usarSimbolos}
          onChange={(e) => aoMudarSimbolos(e.target.checked)}
        />
        Incluir símbolos (!@#$)
      </label>
    </div>
  )
}

export default OpcoesSenha
