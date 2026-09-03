# 🌸 Jogo da Velha - Sakura Card Captor Edition

Aplicação desenvolvida para o projeto do curso técnico em **Desenvolvimento de Sistemas**. O projeto consiste na refatoração e evolução do tutorial clássico de *Tic-Tac-Toe* da documentação oficial do React, integrando um tema personalizado, boas práticas de arquitetura front-end, componentização e *Design System*.

---

## 📌 Visão Geral

A aplicação é uma versão personalizada do tradicional Jogo da Velha inspirada no anime **Sakura Card Captor**. 

Em substituição aos símbolos convencionais ("X" e "O"), utilizam-se elementos icônicos do universo do anime:
* **Jogador 1 (Sakura):** Representado por uma Flor de Cerejeira (🌸).
* **Jogador 2 (Cartas Clow / Shaoran):** Representado por um Arco/Símbolo Mágico (🏹).

### Diferenciais e Melhorias em Relação ao Projeto Original:
* **Tema Mágico Exclusivo:** Paleta de cores suave baseada em tons rosa pastel, lilás e detalhes em dourado, com bordas arredondadas e cartas interativas.
* **Placar de Sessão (ScoreBoard):** Exibição da contagem de vitórias de ambos os jogadores e da quantidade de empates.
* **Arquitetura Modular (CSS Modules + BEM):** Estilização totalmente encapsulada por componente, prevenindo vazamentos de escopo global.
* **Design System Centralizado:** Controle de tokens visuais (cores, fontes, espaçamentos) por meio de variáveis CSS (`:root`).
* **Layout Responsivo:** Integração com utilitários do Bootstrap para alinhamento e estrutura adaptável a dispositivos móveis.

---

## 📋 Regras de Negócio

* **RN01 — Início da Partida:**
  * O jogo é iniciado automaticamente ao carregar a página ou ao clicar no botão "Reiniciar Jogo".
  * O **Jogador 1 (Sakura 🌸)** sempre inicia a primeira jogada da partida.
* **RN02 — Turnos e Validação de Jogadas:**
  * A cada jogada válida, o sistema alterna automaticamente a vez para o jogador adversário.
  * Não é permitido selecionar ou sobrescrever posições do tabuleiro que já foram ocupadas.
* **RN03 — Condições de Término:**
  * **Vitória:** É declarada quando um jogador alinha 3 símbolos idênticos na sequência horizontal, vertical ou diagonal.
  * **Empate ("Velha"):** Ocorre quando todas as 9 posições do tabuleiro forem preenchidas sem que nenhum jogador atinja a condição de alinhamento triplo.
* **RN04 — Placar de Sessão:**
  * O sistema mantém o registro do número de vitórias de cada jogador e o número total de empates ao longo da sessão ativa.
* **RN05 — Histórico e Navegação:**
  * O sistema permite navegar por jogadas anteriores mantidas no histórico de partidas sem perder o estado geral.

---

## ⚙️ Requisitos Funcionais

| ID | Funcionalidade | Categoria |
| :--- | :--- | :--- |
| **RF01** | O sistema deve permitir iniciar uma nova partida ao carregar a página. | Obrigatório |
| **RF02** | O sistema deve alternar automaticamente a vez entre os jogadores a cada jogada. | Obrigatório |
| **RF03** | O sistema deve identificar automaticamente condições de vitória (linhas, colunas, diagonais) e empate. | Obrigatório |
| **RF04** | O sistema deve impedir jogadas em posições já ocupadas no tabuleiro. | Obrigatório |
| **RF05** | O sistema deve exibir visualmente o vencedor ou a indicação de empate ao término. | Obrigatório |
| **RF06** | O sistema deve permitir reiniciar o jogo a qualquer momento através de um botão. | Obrigatório |
| **RF07** | O sistema deve manter um placar com vitórias dos jogadores e quantidade de empates. | Obrigatório |
| **RF08** | O sistema deve aplicar efeitos visuais e estilos temáticos de magia ao realizar interações. | Obrigatório |

---

## 🎯 Objetivo Técnico

Refatorar o projeto Jogo da Velha desenvolvido no tutorial oficial do React (`https://pt-br.react.dev/learn/tutorial-tic-tac-toe`), aplicando os conceitos estudados em aula para criar uma versão personalizada da aplicação. 

O objetivo é aprimorar a estrutura, a organização e a qualidade do código através de:
1. **Componentização e Reutilização:** Divisão do código monolítico em componentes com responsabilidade única (`Game`, `Board`, `ScoreBoard`, `Square`).
2. **Gerenciamento de Estado e Imutabilidade:** Uso do hook `useState` e manipulação de cópias imutáveis de arrays/objetos.
3. **Design System com CSS Modules e BEM:** Organização de estilos isolados, evitando colisão de seletores globais.
4. **Clean Code e Padronização:** Nomenclatura clara de funções, variáveis e arquivos em português/inglês padronizados, com código devidamente comentado.
5. **Acessibilidade e Semântica:** Uso de elementos HTML adequados (`<button>`, `<main>`, `<section>`) e suporte a leitores de tela.

---

## 🛠️ Desenvolvimento e Decisões de Arquitetura

### 1. Separação de Responsabilidades entre Componentes
* **`Game` (Gerenciador Global):** Centraliza o estado do histórico (`history`), o movimento atual (`currentMove`), o placar de pontos (`scores`) e a verificação de alternância do turno.
* **`Board` (Grade Apresentacional):** Recebe o estado atual dos 9 quadrados, valida se a jogada é permitida e renderiza os componentes `Square`.
* **`ScoreBoard` (Painel de Placar):** Exibe visualmente as pontuações atualizadas de Sakura, Clow e empates.
* **`Square` (Elemento Interativo):** Renderiza o botão individual representando uma carta do jogo e notifica os cliques recebidos.
* **`calculateWinner` (Utilitário):** Função pura responsável por checar as combinações de vitória isolada da árvore de renderização do React.

### 2. Dificuldades Encontradas e Soluções
* **Problema com Importações e Tela em Branco:** Divergência nos caminhos de importação durante a divisão de um arquivo único em múltiplos módulos.
* **Solução:** Padronização da estrutura de diretórios e utilização de exportações padrão (*default exports*).

---

## 📂 Estrutura de Pastas e Arquivos

```text
JDV_Mariana/
├── public/                  # Arquivos estáticos e favicons
├── src/
│   ├── assets/              # Ícones e imagens temáticas
│   ├── components/          # Componentes encapsulados
│   │   ├── Board/
│   │   │   ├── Board.jsx            # Lógica e renderização da grade 3x3
│   │   │   └── Board.module.css     # Estilo do tabuleiro em BEM
│   │   ├── Game/
│   │   │   ├── Game.jsx             # Gerenciador global de estado e histórico
│   │   │   └── Game.module.css      # Estilos gerais da tela principal
│   │   ├── ScoreBoard/
│   │   │   ├── ScoreBoard.jsx       # Componente do placar de pontuação
│   │   │   └── ScoreBoard.module.css# Estilo do placar de pontuação
│   │   └── Square/
│   │       ├── Square.jsx           # Componente do quadrado/carta
│   │       └── Square.module.css    # Estilo individual da carta do tabuleiro
│   ├── styles/
│   │   ├── variables.css    # Tokens globais (Cores pastel, fontes, bordas)
│   │   └── global.css       # Estilos base e resets
│   ├── utils/
│   │   └── calculateWinner.js # Função pura de verificação de vitória
│   ├── App.jsx              # Renderizador do componente principal
│   ├── main.jsx             # Ponto de entrada da aplicação
│   └── index.html           # Arquivo HTML principal
├── package.json
├── vite.config.js
└── README.md
🎨 Guia de Design System e Protótipo
1. Visual do Protótipo
Tela Principal: Painel superior centralizando o Placar, tabuleiro central no formato 3x3 com 9 cartas e molduras douradas, painel lateral JOGADAS para histórico e botão de Reiniciar na parte inferior.

Durante a Partida: As cartas preenchidas revelam o símbolo de Sakura (🌸) com fundo rosa pastel ou o símbolo das Cartas Clow (🏹) com fundo lilás/roxo.

2. Tokens de Design (variables.css)
--color-bg-main: #B3A0D6 (Fundo Lilás Suave)

--color-card-bg: #FFFFFF (Fundo da Carta)

--color-border-gold: #E6C280 (Moldura Dourada)

--color-sakura-pink: #F4A6C0 (Tom do Jogador 1)

--color-clow-purple: #8C65C2 (Tom do Jogador 2)

💻 Tutorial: Como Executar o Projeto Localmente
Pré-requisitos
Para executar o projeto em sua máquina, você precisará ter instalado:

Node.js (Versão 18 ou superior)

Git

Passo a Passo
Clonar o Repositório:

Bash
git clone [https://github.com/seu-usuario/JDV_Mariana.git](https://github.com/seu-usuario/JDV_Mariana.git)
Acessar o diretório do projeto:

Bash
cd JDV_Mariana
Instalar as dependências do projeto:

Bash
npm install
Executar o servidor de desenvolvimento:

Bash
npm run dev
Acessar a aplicação:
Abra seu navegador de preferência e acesse a URL exibida no terminal (por padrão: http://localhost:5173).