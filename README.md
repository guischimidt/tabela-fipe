<table>
  <tr>
      <td><h1>Tabela Fipe</h1></td>
  </tr>
</table>


## Conteúdo
* [Sobre o Projeto](#sobre-o-projeto)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Projeto funcionando](#projeto-funcionando)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre o projeto

É uma aplicação com o intuito de exibir os valores da Tabela Fipe para os parâmetros consultados.<br />
Esta aplicação consome a API (https://deividfortuna.github.io/fipe/) via Fetch.
<br />

### Rotas da aplicação

| Método | Caminho da Rota | Parâmetro | Descrição
|---|---|---|---|
| GET | http://localhost:port/vehicles/| type | Especifica o tipo de veículo ("carros", "motos" ou "caminhoes") |
| GET | http://localhost:port/vehicles/| brand | Especifica a marca do veículo ("código da marca da API) |
| GET | http://localhost:port/vehicles/| model | Especifica o modelo do veículo ("código do modelo da API) |
| GET | http://localhost:port/vehicles/| year | Especifica o ano do veículo ("código do ano da API) |

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.
```bash
$ git clone https://github.com/guischimidt/tabela-fipe
```

### __Path__
  Instale as dependências
```bash
$ npm install
$ npm start
```

## Projeto funcionando
https://tabela-fipe-gs.herokuapp.com/

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**guigoschimidt@gmail.com**](mailto:guigoschimidt@gmail.com)
