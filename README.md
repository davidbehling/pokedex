# 📱 Pokédex

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![API](https://img.shields.io/badge/API-Pok%C3%A9API-red)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![License](https://img.shields.io/badge/license-MIT-green)

Aplicação **Pokédex** desenvolvida para listar, buscar e visualizar informações detalhadas de Pokémon, utilizando **dados reais da PokéAPI**.

Projeto criado com foco **educacional e de portfólio**, demonstrando:
- Consumo de APIs REST
- Manipulação de dados assíncronos
- Organização de código frontend
- Criação de interfaces interativas


# 📌 Visão Geral

Funcionalidades principais:

- 🔍 Buscar Pokémon por nome ou ID
- 📋 Listagem de Pokémon
- 🧬 Exibição de tipos, habilidades e status
- 🖼️ Renderização de sprites oficiais
- ⚡ Requisições assíncronas com `fetch` / `axios`
- 📱 Interface simples e intuitiva


# 🧠 Fonte de Dados

Os dados são obtidos diretamente da:

🔗 **PokéAPI**  
[https://pokeapi.co](https://pokeapi.co/api/v2/pokemon/)

API pública e gratuita amplamente utilizada para projetos educacionais.


# 🏗️ Arquitetura da Aplicação

Fluxo básico da aplicação:

```
PokéAPI (REST)
↓
Tratamento de dados
↓
Renderização na tela

```


# 📂 Estrutura de Diretórios

```

Pokedex/
├── css/ # Estilos da aplicação
│ └── style.css
│
├── js/ # Scripts JavaScript
│ └── script.js
│
├── images/ # Imagens e sprites
│ └── ...
│
├── index.html # Página principal
└── README.md # Documentação

````

> Estrutura organizada para facilitar manutenção e expansão.


# ⚙️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

# 🚀 Como Executar o Projeto

## Opção 1 — Abrir direto no navegador

Abra o arquivo index.html no navegador

## Opção 2 — Live Server (VSCode)

1. Instale a extensão **Live Server**
2. Clique com o botão direito em `index.html`
3. Selecione **Open with Live Server**


## 🚀 Possíveis Evoluções

* ⭐ Favoritar Pokémon
* 📊 Paginação
* 🧪 Comparação de status
* 🌙 Dark mode
* 📱 Melhorias de responsividade
* 🧠 Cache de requisições
