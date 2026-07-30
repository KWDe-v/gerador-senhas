# 🔐 Gerador de Senhas

## 📖 Descrição

Um gerador de senhas aleatórias feito em **React**. O usuário escolhe o tamanho da senha e se quer incluir números e símbolos. A senha gerada pode ser copiada com um clique. Bom projeto para praticar **estado**, **formulários** e **manipulação de dados**.

## ✨ Funcionalidades

- Escolher o tamanho da senha (6 a 30 caracteres)
- Incluir ou não números
- Incluir ou não símbolos
- Gerar senha aleatória
- Copiar a senha para a área de transferência

## 🛠️ Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS puro

## ▶️ Como executar localmente

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## 📁 Estrutura básica do projeto

```
react-gerador-senhas/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── index.css
    ├── utils/
    │   └── gerarSenha.js
    └── components/
        ├── ResultadoSenha.jsx
        ├── ResultadoSenha.css
        ├── OpcoesSenha.jsx
        └── OpcoesSenha.css
```

## 🚀 Melhorias futuras

- Mostrar a força da senha (fraca / média / forte)
- Opção de incluir/excluir letras maiúsculas
- Guardar as últimas senhas geradas no LocalStorage

## 👤 Autor

**Desenvolvido por KWDev**
