
<span id="start">

[![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge)](#start)
[![Typescript](http://img.shields.io/static/v1?label=Typescript&message=4.5.5&color=3178C6&style=for-the-badge)](#start)
[![React](http://img.shields.io/static/v1?label=React&message=17.0.2&color=61DAF9&style=for-the-badge)](#start)


[![Pokedex-logo](./src/assets/pokedex-banner.png)](#start)

---


### Indice

* 📄&nbsp; [Descrição](#---descrição-do-projeto)
* ✔️&nbsp; [Tecnologias utilizadas](#%EF%B8%8F---tecnologias-utilizadas)
* 📖&nbsp; [Fontes e assets](#--fontes-e-assets)
* 🤔&nbsp; [Desafios e aprendizados](#--desafios-e-aprendizados)
  * ⛵&nbsp; [Navegação entre rotas no Gh Pages](#--desafios-e-aprendizados)
  * 💻&nbsp; [Escolha de como usar a API](#--desafios-e-aprendizados)
* 📁&nbsp; [Acesso ao projeto](#--acesso-ao-projeto)
* 🛠️&nbsp; [Rodando localmente](#%EF%B8%8F--rodando-localmente)


---



## 📄   Descrição do projeto 

Uma pokedex com o auxilio da [PokeApi](https://pokeapi.co/) (uma api gratuita que armazena dados de Pokemon).


## ✔️   Tecnologias utilizadas 
- `Typescript`: a linguagem na qual a aplicação foi desenvolvida (é uma versão tipada do `Javascript`);
- `React`: biblioteca principal da aplicação, é responsavel pela renderização das paginas;
- `Hooks`: durante o desenvolvimento, fiz uso de diversos `hooks`, tanto dos que veem pré-instalados com o `React` (como `useState` e `useEffect` ), quanto os que eu mesmo criei com o auxilio destes (como `useApi` e `useQuery`);
- `Styled-Components`: biblioteca utilizada para estilizaão das páginas da aplicação;
- `Axios`: biblioteca usada para fazer as requisições para a API;


## 📖  Fontes e assets

- `PokeApi`: API gratuita de onde todos os dados apresentados são coletados;
- [`WikiMidia`](https://commons.wikimedia.org/wiki/Category:Pok%C3%A9mon_types_icons): onde encontrei as imagens das medalhas de cada tipo de pokemon (que usei como base para a paleta de cores);


## 🤔  Desafios e aprendizados

<details>
<summary style="display:inline;" >

### ⛵&nbsp; Navegação entre paginas no Github Pages
</summary>
<br/>

<div style="margin-left: 1rem;">

Essa foi a primeira aplicação com navegação entre paginas com rotas que adicionei ao Github Pages, e não demorou para que surgissem comportamentos inseperados.

O primeiro foi quando vi que a páginas estvam todas em branco, isso ocorreu pois era necessário adaptar a rota base de "/" para "/pokedex/", afinal este é o endereço onde o Gh Pages colocou a aplicação.

O segundo foi quando notei problemas para acessar rotas diferentes da rota base da aplicação, por exemplo:

  1. Se eu navegasse da rota base ('/pokedex/') para a rota de visualização de pokemons ('/pokedex/pokemons/') pela interface, tudo funcionaría como esperado. 
  2. Se tentasse recarregar a pagina nessa segunda rota ou acessar sua url diretamente, seria renderizada uma pagina do Gh Pages constando 'Erro 404, página não encontrada".

Após um pouco de pesquisa, descobri que isso ocorre pois o Gh Pages lida com "landind pages", e quando renderiza a rota ele busca o arquivo `index.html`, que no caso não existe para todas as rotas.

Demorou um pouco para encontrar uma solução para este problema, cheguei a cogitar deixar desta forma, pois "é o comportamento normal da plataforma". Porem a ideia de alguem acessar a aplicação, ver tudo funcionando, para depois atualizar a pagina, e se deparar com esse comportameno, me fez continuar buscando soluções.

Muitas das possiveis formas de solucionar o problema seriam inviaveis devido as limitações do Gh Pages, por exempolo: rodar um servidor NodeJs, que garanta que que todas as rotas sejam "redirecionadas" pelo arquivo `index.html` (não é possivel pois o ambiente do Github só permite arquivos estáticos).

No final solucionei de forma relativamente simples: alterei a estratégia de roteamento.<br/>
A biblioteca `react-router-dom` (usada para navegação das rotas), possui um roteador diferente do "padrão" (`BrowserRouter`), chamado `HashRouter`. Neste roteador as rotas passam a ser relativas a um `#` (por exemplo: '/pokedex/' passa a ser '/pokedex/#' e '/pokedex/pokemons' vira '/pokedex/#/pokemons'), este caracter é interpretado pelo navegador como se estivesse tentando ir para uma região da mesma página, e consequentemente ele ainda busca o arquivo `index.html` da rota principal, permitindo acessar todas as rotas diretamente e recarregar a pagina sem problemas. 

</div>


</details>

<details>
<summary style="display:inline;">
<!-- <summary > -->

###  💻&nbsp; Consumindo e mostrando dados.
</summary>
<br>
<div style="margin-left: 1rem;">

### Os recursos que utlilizei
1. A aplicação faz uso de dois endpoints da PokeApi:
   1.  "/pokemon/:id" : que retorna todas as informações associadas a um pokemon que possui o id referenciado, me referirei a este endpoind como ***details***.
   2.  "/pokemon/" : retorna uma lista de nomes e id's de pokemons, iniciando no query offset (valor padrão igual a zero) e retornando uma quantia de itens igual ao query limit (valor padrão igual a vinte), vou me referir a este endpoint como ***list***.
2.  A cor dos cards na pagina de listar pokemons depende do tipo do pokemon, informação obtida com o endpoint ***details***.
3.  As imagens dos pokemons são obtidas no repositório [sprites](https://github.com/PokeAPI/sprites), onde são nomeadas pelo id de cada pokemon (tornando facil encontrar suas url's).


Agora, sobre minhas estratégias e dificuldades:

### 1. Primeira estratégia

#### 1.1. O ponto de partida

De inicio eu havia tentado usar estes recursos da seguinte forma:

1. Ao entrar na tela de listagem de pokemons, fazia uma requisição para o endpoint ***list***, pedindo o nome de todos os pokemons cadastrados (offset=0 e limit=1126);
2. Com a função .map, renderizar um componente Card para cada pokemon com os dados obtidos e a imagem encontrada com o id.
3. Dentro do componente Card se fazia uma requisição para o endpoint ***details***, alterando a cor de fundo da padrão para a cor que representa o tipo do pokemon.

#### 1.2. Observações

Fazendo as coisas desta forma, me deparei com alguns problemas:
* A pagina se tornou extremamente pesada e lenta devido a quantidade de componentes renderizados;
* As imagens demoravam muito para carregar tambem devido a grande quantidade;
* A chamada por details em cada Card de forma individual aumentou muito a demora para que os mesmos obtivessem suas cores finais;

No geral, a pagina estava longe de ser fluida e sua performance deixando muito a desejar.

#### 1.3. Nova solução 

Pensando em uma forma de otimizar este fluxo, pensei na segunda estratégia;

### 2. Segunda estratégia

#### 2.1. A ideia

Minha primeira ideia de otmização foi diminuir a quantia de dados que precisam ser carregados, então:

1. Passei a chamar ***list*** para pegar apenas uma porção do total de pokemons na pagina.
2. Mostrar as informações da mesma forma da estratégia anterior.
3. Adicionar um sistema de paginação, para poder navegar para a próxima pagina, onde uma porção diferente dos dados seriam carregados.

#### 2.2. Comportamento observado
Desta forma a pagina e seus componentes passaram a carregar de forma mais rapida, mas ainda podia-se perceber as imagens terminando de carregar e um delay para os Cards assumirem suas cores finais.

#### 2.3. Solução
Para passar uma maior impressão de fluidez, tive a ideia de colocar um timer na pagina. Depois de ***list*** retornar os dados iniciais, a pagina continuaria mostrando a tela de carregamento por alguns instantes a mais, enquanto isso as imagens e dados dos Cards terminariam de carregar (ocultas com a propriedade "display: none;" do CSS), dando uma maior sensação de fluidez.

#### 2.4. Novo problema
Com isso, meu problema inicial estava solucionado, mas acabei me deparando com outro. Na lista de funcionalidades que pretendia implementar, se encontram a possibilidade de filtrar os pokemons por tipo, e a possibilidade de pesquisar pokemons por nome (visualizando a melhor correspondencia). Ambas são funcionalidades que a PokeApi não traz suporte, então para implementa-las, seria necessário ter todas as informações disponiveis de forma simultanea.

#### 2.5. Como resolver?

Refletindo sobre como viabilisar estas funcionalidades, pensei na terceira estratégia.

### 3. Terceira estratégia

</details>

 
## 📁  Acesso ao projeto
A versão mais recente deste projeto pode ser encontrada online [aqui](https://jongamatos.github.io/pokedex/#/).



## 🛠️  Rodando localmente 

Para rodar o projeto localmente deve-se primeiramente ter instalado o NodeJs, e o git.


Tendo ambos instalados, clone o repositório:
```
git clone https://github.com/JongaMatos/pokedex.git
```
Depois navegue até a pasta gerada e rode o seguinte comando:

```
npm install && npm start
```
E pronto, está rodando localmente.













