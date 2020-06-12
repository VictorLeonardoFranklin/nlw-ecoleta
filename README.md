# Next Level Week Rocketseat

<h1 align="center">
    <img src=".github/logo.svg" width="300">
</h1>
<h2 align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/static/v1?label=Node&message=JS&color=blue?style=plastic&logo=Node.js" alt="NodeJS" />
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/static/v1?label=React&message=JS&color=blue?style=plastic&logo=React" alt="ReactJS" />
  </a>
  <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/static/v1?label=React&message=Native&color=blue?style=plastic&logo=React" alt="React-Native" />
  </a>
</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/VictorLeonardoFranklin/nlw-ecoleta?color=%2304D361">
  
  <img alt="Code size" src="https://img.shields.io/github/languages/code-size/VictorLeonardoFranklin/nlw-ecoleta">
  
  <a href="https://github.com/VictorLeonardoFranklin/nlw-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VictorLeonardoFranklin/nlw-ecoleta">
  </a>
	
  <a href="https://www.linkedin.com/in/victor-franklin-69412a5a/">  
    <img alt="Made by victorfranklin" src="https://img.shields.io/badge/made%20by-VictorFranklin-blue">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## Projeto

O projeto, chamado Ecoleta, é um projeto desenvolvido basedo na semana internacional do meio ambiente. Possibilitando encontrar uma forma de conectar pessoas à empresas que coletam resíduos que não devem ser descartados no meio ambiente (Pilhas e baterias, óleo de cozinha etc...).

## Como rodar no seu computador

Para ter o conteúdo disponível no seu computador, você vai precisar ter instalado o [Git](https://git-scm.com) - para clonar diretamente - ou baixar o conteúdo deste repositório via arquivo compactado (zip). Depois disso, será preciso instalar o [Node.js][nodejs].

A partir disso é necessário seguir os passos abaixo:

### Com o GIT Instalado

Abra um terminal e digite:

```bash
$ git clone https://github.com/VictorLeonardoFranklin/nlw-ecoleta
$ cd nlw-ecoleta
```

### Sem o GIT Instalado

Extraia o arquivo compactado baixado e navegue até a pasta dele através do terminal utilizando o comando `cd `.

### Preparação do servidor

Para instalar o servidor que conecta-se com o banco de dados e disponibiliza os recursos da aplicação, insira os seguintes comandos:

```bash
$ cd nlw-ecoleta/server
$ npm instal
$ npm knex:migrate
$ npm knex:seed
$ npm run dev
```

### Preparação da web

Para instalar o servidor que fornece as páginas web, abra um novo terminal e mova-se para o diretório principal da aplicação e insira os seguintes comandos:

```bash
$ cd nlw-ecoleta/web
$ npm install
$ npm start
```

### Prepração do app para dispositivo móvel

Para instalar o app para dispositivo móvel, abra um novo terminal e mova-se para o diretório principal da aplicação e insira os seguintes comandos:

```bash
$ cd nlw-ecoleta/mobile
$ npm install
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
$ npm start
```

Uma janela deve ser aberta no seu navegador com as informações para conectar-se a aplicação.

## Utilizando

Nas informações disponíveis na janela do navegador aberta através do comando anterior, para que seja possível conectar-se ao aplicativo, copie o endereço IP demonstrado no canto inferior esquerdo e substitua-o no arquivo `config.ts`. Neste mesmo arquivo é possível também alterar a porta na qual o servidor escuta pelas requisições. Os servidores devem reiniciar sozinhos após esta alteração.

Mesmo reiniciando sozinho, o servidor web precisará ser reiniciado manualmente para que o arquivo possa ser copiado para dentro do projeto. Aperte `ctrl-d` no terminal do servidor web e em seguida execute novamente o comando `npm start`.

Para acessar a página web, digite no seu browser o endereço IP e a porta configurada no arquivo de configuração.
Para acessar o aplicativo móvel, instale o aplicativo [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) e escaneie o QRCode demonstrado na página. Caso não consiga, tente conectar-se diretamente através do endereço demonstrado na janela do navegador aberta no passo anterior.

## Imagens

### Desktop

<h1 align="center">
    <img alt="Home" title="Home" src=".github/images/web/home.png" width="600px" />
</h1>

<h1 align="center">
    <img alt="Create Point" title="Create Point" src=".github/images/web/create-point.png" width="600px" />
</h1>

### Mobile

<p align="center">
    <img alt="Home" title="Home" src=".github/images/mobile/home.jpg" width="35%" />
    <img alt="Points" title="Points" src=".github/images/mobile/points.jpg" width="35%" />
</p>

## Tecnologias utilizadas

Em relação ao layout, foi utilizado o [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/) para sua concepção.

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Knex](http://knexjs.org/)

## Autor
[<img src="https://avatars0.githubusercontent.com/u/65988709?v=3&s=115" width="155"><br><sub>@VictorLeonardoFranklin</sub>](https://github.com/VictorLeonardoFranklin) |
| :---: |
