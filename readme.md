# 🏎️ Mario_Kart-terminal

Projeto Mario Kart (Terminal) desenvolvido durante o **Bootcamp Mobile Developer** da [DIO](https://www.dio.me).

---

## 🎯 Objetivo

Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo.  
Nosso desafio é **criar a lógica de um jogo de corrida no terminal**, simulando uma competição entre dois personagens, com base em regras e mecânicas inspiradas na franquia.

---

## 🎮 Regras & Mecânicas

### 👤 Jogadores

- O computador recebe **dois personagens** definidos em objetos com os seguintes atributos:
  - `NOME`
  - `VELOCIDADE`
  - `MANOBRABILIDADE`
  - `PODER`
  - `PONTOS` (inicializado em 0)

---

### 🛣️ Pista

- A corrida é composta por **5 rodadas**.
- Em cada rodada, é sorteado **um tipo de bloco de pista aleatório**:
  - **RETA**
  - **CURVA**
  - **CONFRONTO**

---

### 📏 Regras por tipo de bloco

- **RETA**:
  - Cada jogador rola um dado de 6 lados.
  - Soma o valor com seu atributo **VELOCIDADE**.
  - Quem tiver o maior total **ganha 1 ponto**.

- **CURVA**:
  - Cada jogador rola um dado de 6 lados.
  - Soma o valor com seu atributo **MANOBRABILIDADE**.
  - Quem tiver o maior total **ganha 1 ponto**.

- **CONFRONTO**:
  - Cada jogador rola um dado de 6 lados.
  - Soma o valor com seu atributo **PODER**.
  - Quem **perder**, perde **1 ponto**, **caso tenha pontos disponíveis**.
  - **Nenhum jogador pode ter pontuação negativa** (mínimo é 0).

---

## 🏁 Condição de Vitória

- Ao final das 5 rodadas, **vence o jogador com mais pontos acumulados**.
- Em caso de empate, pode-se considerar um critério de desempate ou declarar empate.