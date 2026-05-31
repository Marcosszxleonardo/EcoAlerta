# 🌍 EcoAlerta

## 👨‍🎓 Projeto Acadêmico

O EcoAlerta é um projeto acadêmico desenvolvido com o objetivo de criar uma plataforma colaborativa para registro e compartilhamento de desastres urbanos em tempo real.

---

## 👨‍💻 Integrantes

| Nome |
|------|
| Jefferson Dos Santos Lima Sousa |
| Gustavo Soares Silva |
| Marcos Roberto Leonardo Rodrigues |
| Pedro Alves Do Nascimento |
| Pedro Henrique de Freitas Belo |

---

## 📖 Sobre o Projeto

EcoAlerta é uma plataforma inspirada em uma rede social onde os usuários podem registrar e compartilhar desastres urbanos em tempo real, como:

- ⚡ Queda de energia
- 🌧️ Alagamentos
- 🚧 Acidentes urbanos
- 🌳 Queda de árvores
- 🚨 Problemas em regiões específicas

O objetivo do sistema é permitir que a comunidade informe ocorrências rapidamente, ajudando outras pessoas da região a ficarem alertas.

---

# 📸 Telas do Projeto

## 🔐 Tela de Login

A tela inicial do sistema permite ao usuário escolher entre duas formas de acesso:

### 👤 Modo Anônimo
- O usuário pode criar publicações sobre desastres urbanos.
- Não pode interagir com publicações da comunidade.
- Ideal para acessos rápidos.

### 📝 Cadastro de Conta
- Permite criar uma conta completa.
- O usuário pode interagir com publicações.
- Possibilita participação na comunidade.

### Preview da Tela
![Tela Login](./src/assets/login.png)

---

## 🏠 Tela Inicial / Feed da Comunidade

A tela principal funciona como um feed de rede social, exibindo os alertas publicados pelos usuários.

### Funcionalidades:
- Visualizar publicações recentes.
- Ver localização do desastre.
- Informações da comunidade.
- Atualizações em tempo real.

### Preview da Tela
![Feed](./src/assets/feed.png)

---

## 🚨 Tela de Criação de Post

Permite que o usuário registre um desastre urbano.

### Informações do post:
- Tipo do problema.
- Região afetada.
- Descrição.
- Imagem opcional.
- Data e horário.

### Preview da Tela
![Criar Post](./src/assets/post.png)

---

## 👥 Tela da Comunidade

Área onde os usuários cadastrados podem interagir com publicações.

### Funcionalidades:
- Curtir posts.
- Comentar.
- Compartilhar informações.
- Acompanhar atualizações.

### Preview da Tela
![Comunidade](./src/assets/comunidade.png)

---

# 🛠️ Tecnologias Utilizadas

- React
- Vite
- JavaScript
- HTML5
- CSS3
- CSS Modules

---

# ▶️ Como Executar o Projeto

## Clone o repositório
```bash
git clone https://github.com/seu-usuario/ecoalerta.git
```

## Acesse a pasta do projeto
```bash
cd ecoalerta
```

## Instale as dependências
```bash
npm install
```

## Execute o projeto
```bash
npm run dev
```

---

# 🚀 Guia de Colaboração com Git e GitHub

Este documento explica como trabalhar em equipe utilizando **branches**, permitindo que cada colaborador desenvolva funcionalidades sem afetar diretamente a branch principal (`main`).

---

## 📂 Clonando o Projeto

Para baixar o projeto pela primeira vez:

```bash
git clone https://github.com/USUARIO/REPOSITORIO.git
```

Entrar na pasta do projeto:

```bash
cd REPOSITORIO
```

Verificar a branch atual:

```bash
git branch
```

---

## 🌳 O que é uma Branch?

Uma branch é uma linha de desenvolvimento independente.

Exemplo:

```text
main
├── marcos-dev
├── troca-de-tela-router-dom
└── tela-login
```

Cada desenvolvedor pode trabalhar em sua própria branch sem interferir no trabalho dos demais.

---

## 🌱 Criando uma Nova Branch

Antes de criar uma branch, atualize a `main`:

```bash
git switch main
git pull
```

Criar uma nova branch:

```bash
git switch -c nome-da-branch
```

Enviar a branch para o GitHub:

```bash
git push -u origin nome-da-branch
```

---

## 👥 Baixando a Branch de Outro Colaborador

Atualizar as informações do repositório remoto:

```bash
git fetch
```

Visualizar todas as branches:

```bash
git branch -a
```

Criar uma cópia local da branch remota:

```bash
git switch -c nome-da-branch origin/nome-da-branch
```

---

## 🔄 Alternando Entre Branches

```bash
git switch main
git switch nome-da-branch
```

A branch marcada com `*` no comando `git branch` é a ativa.

---

## 💻 Fluxo de Desenvolvimento

Antes de começar:

```bash
git pull
```

Após realizar alterações:

```bash
git add .
git commit -m "feat: descrição da funcionalidade"
git push
```

---

## 🔀 Juntando uma Branch na Main

Trocar para a `main` e atualizar:

```bash
git switch main
git pull
```

Fazer o merge:

```bash
git merge nome-da-branch
git push
```

---

## 🛡️ Método Recomendado: Pull Request

### 1. Criar uma branch
```bash
git switch -c minha-feature
```

### 2. Desenvolver e enviar alterações
```bash
git add .
git commit -m "feat: nova funcionalidade"
git push -u origin minha-feature
```

### 3. Criar Pull Request no GitHub
1. Abrir o repositório.
2. Clicar em **Compare & Pull Request**.
3. Revisar alterações.
4. Clicar em **Merge Pull Request**.
5. Confirmar o merge.

---

## 🔎 Comandos Úteis

| Comando | Descrição |
|--------|-----------|
| `git branch` | Ver branch atual |
| `git branch -a` | Ver todas as branches |
| `git branch -vv` | Ver detalhes das conexões |
| `git fetch` | Atualizar referências remotas |
| `git pull` | Baixar alterações |
| `git push` | Enviar alterações |
| `git switch nome-da-branch` | Trocar de branch |
| `git switch -c nome-da-branch` | Criar branch |
| `git branch -d nome-da-branch` | Excluir branch local |

---

## ✅ Fluxo Recomendado para Equipes

```bash
# 1. Atualizar a main
git switch main
git pull

# 2. Criar sua branch
git switch -c nome-da-feature

# 3. Desenvolver e enviar
git add .
git commit -m "feat: funcionalidade"
git push -u origin nome-da-feature

# 4. Criar Pull Request no GitHub e realizar o merge

# 5. Atualizar a main após o merge
git switch main
git pull
```

---

## 🎯 Resumo

- Cada desenvolvedor trabalha em sua própria branch.
- A `main` permanece estável.
- Alterações são integradas através de Merge ou Pull Request.
- Sempre execute `git pull` antes de começar a desenvolver.
- Sempre execute `git push` após concluir alterações importantes.

Seguindo esse fluxo, a equipe consegue trabalhar simultaneamente sem sobrescrever o trabalho dos outros colaboradores.

---

# 🎯 Objetivo do Projeto

O EcoAlerta foi desenvolvido como projeto acadêmico com o objetivo de aplicar conhecimentos de desenvolvimento web utilizando React + Vite, além de propor uma solução colaborativa para comunicação de desastres urbanos e problemas em regiões específicas.
