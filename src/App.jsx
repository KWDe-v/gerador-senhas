import { useState } from 'react'
import ResultadoSenha from './components/ResultadoSenha.jsx'
import OpcoesSenha from './components/OpcoesSenha.jsx'
import { gerarSenha } from './utils/gerarSenha.js'
import './App.css'

// Guarda as opções escolhidas e a senha gerada.
function App() {
  const [tamanho, setTamanho] = useState(12)
  const [usarNumeros, setUsarNumeros] = useState(true)
  const [usarSimbolos, setUsarSimbolos] = useState(true)
  const [senha, setSenha] = useState('')

  function handleGerar() {
    const nova = gerarSenha({ tamanho, usarNumeros, usarSimbolos })
    setSenha(nova)
  }

  return (
    <main className="app">
      <section className="painel">
        <h1 className="painel__titulo">🔐 Gerador de Senhas</h1>

        <ResultadoSenha senha={senha} />

        <OpcoesSenha
          tamanho={tamanho}
          usarNumeros={usarNumeros}
          usarSimbolos={usarSimbolos}
          aoMudarTamanho={setTamanho}
          aoMudarNumeros={setUsarNumeros}
          aoMudarSimbolos={setUsarSimbolos}
        />

        <button className="painel__gerar" onClick={handleGerar}>
          Gerar senha
        </button>
      </section>
    </main>
  )
}

export default App
