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
https://pokeapi.co

API pública e gratuita amplamente utilizada para projetos educacionais.


# 🏗️ Arquitetura da Aplicação

Fluxo básico da aplicação:

```

UI (Componentes)
↓
Service / Fetch API
↓
PokéAPI (REST)
↓
Tratamento de dados
↓
Renderização na tela

```


# 📂 Estrutura de Diretórios

```

pokedex/
├── src/
│   ├── components/            # Componentes da interface
│   │   ├── PokemonCard.js     # Card de exibição do Pokémon
│   │   ├── PokemonList.js     # Lista de Pokémon
│   │   └── SearchBar.js       # Campo de busca
│   │
│   ├── services/              # Comunicação com a API
│   │   └── pokeApiService.js
│   │
│   ├── styles/                # Estilos da aplicação
│   │   └── main.css
│   │
│   ├── App.js                 # Componente raiz
│   └── index.js               # Entry point
│
├── public/                    # Arquivos públicos
│
├── package.json               # Dependências e scripts
└── README.md                  # Documentação

````

> Estrutura organizada para facilitar manutenção e expansão.


# ⚙️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Fetch API / Axios**
- (Opcional) **React**


# 🚀 Como Executar o Projeto

## Pré-requisitos
- Node.js **16+**
- npm ou yarn

## Instalação
```bash
npm install
# ou
yarn install
````

## Executar em desenvolvimento

```bash
npm start
# ou
yarn start
```

A aplicação ficará disponível em:

```
http://localhost:3000
```


# 🚀 Possíveis Evoluções

* ⭐ Favoritar Pokémon
* 📊 Paginação
* 🧪 Comparação de status
* 🌙 Dark mode
* 📱 Melhorias de responsividade
* 🧠 Cache de requisições
