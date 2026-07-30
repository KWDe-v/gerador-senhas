// Função "pura" que monta uma senha aleatória conforme as opções.
// Fica separada dos componentes para o código ficar mais organizado.
export function gerarSenha({ tamanho, usarNumeros, usarSimbolos }) {
  const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numeros = '0123456789'
  const simbolos = '!@#$%&*?-_+'

  let caracteres = letras
  if (usarNumeros) caracteres += numeros
  if (usarSimbolos) caracteres += simbolos

  let senha = ''
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[indice]
  }

  return senha
}
