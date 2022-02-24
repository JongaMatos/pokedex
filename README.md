
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
  * ⛵&nbsp; [Navegação entre rotas com Gh Pages](#navegação)
* 📁&nbsp; [Acesso ao projeto](#--acesso-ao-projeto)
* 🛠️&nbsp; [Rodando localmente](#%EF%B8%8F--rodando-localmente)


---



## 📄   Descrição do projeto 

Uma pokedex com o auxilio da [PokeApi](https://pokeapi.co/) (uma api gratuita que armazena dados de Pokemon).


## ✔️   Tecnologias utilizadas 
- `Typescript`: a linguagem na qual a aplicação foi desenvolvida (é uma versão tipada do `Javascript`);
- `React`: biblioteca principal da aplicação, é responsavel pela renderização das paginas;
- `Hooks`: durante o desenvolvimento, fiz uso de diversos `hooks`, tanto dos que veem pré-instalados com o `React` (como `useState` e `useEffect` ), quanto os que eu mesmo criei com o auxilio destes (como `useApi` e outros);
- `Styled-Components`: biblioteca utilizada para estilizaão das páginas da aplicação;
- `Axios`: biblioteca usada para fazer as requisições para a API;


## 📖  Fontes e assets

- `PokApi`: API gratuita de onde todos os dados apresentados são coletados;
- [`WikiMidia`](https://commons.wikimedia.org/wiki/Category:Pok%C3%A9mon_types_icons): onde encontrei as imagens das medalhas de cada tipo de pokemon (que usei como base para a paleta de cores);


## 🤔  Desafios e aprendizados
<br>


<details id='navegação'>
<summary>⛵  Navegação entre paginas com Github Pages
</summary>
<br>


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

</details>
<br/>

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













