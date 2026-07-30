import { useState } from 'react'
import './ResultadoSenha.css'

// Mostra a senha gerada e um botão para copiar.
function ResultadoSenha({ senha }) {
  const [copiado, setCopiado] = useState(false)

  function copiar() {
    if (!senha) return
    navigator.clipboard.writeText(senha)
    setCopiado(true)
    // Volta o texto do botão ao normal depois de 1,5s
    setTimeout(() => setCopiado(false), 1500)
  }

  return (
    <div className="resultado">
      <span className="resultado__texto">
        {senha || 'Sua senha aparecerá aqui'}
      </span>
      <button
        className="resultado__copiar"
        onClick={copiar}
        disabled={!senha}
      >
        {copiado ? '✓ Copiado' : 'Copiar'}
      </button>
    </div>
  )
}

export default ResultadoSenha
