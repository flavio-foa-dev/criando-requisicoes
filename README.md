# Tecnologias utilizadas
* Javascript
* NodeJS
* Json-server
* HTML
* CSS
* npx eslint --init
* data-attributes.
* Math.random()
  5.252057315392287
  A função Math.random() é usada para retornar um número pseudoaleatório de ponto flutuante entre 0 e 1. Para conseguirmos um número maior, precisamos multiplicar esse retorno pelo intervalo desejado
* Math.floor()
  Para transformar o resultado da função anterior em um número inteiro usamos a função Math.floor(). Ela é usada para arredondar o número passado como parâmetro para seu inteiro mais próximo, levando como base o valor menor.

### vamos ver:
- Criar requisições GET para consumir uma API;
- Manipular o DOM para criar elementos a partir do JavaScript;
- Inserir novos objetos em um arquivo JSON.
- Salvar dados na API através do método POST;
- Estruturar requisições do tipo POST enviadas com o fetch API;
- Diferenciar method, headers e body;
- Captar evento de envio (submit) em formulários.
- Como utilizar parâmetros para buscar objetos específicos na API;
- pegar dados escritos em um campo de digitação;
- addEventListener
- Verificar se há elementos filhos em um container com firstChild
- Remover elementos filhos de um container com removeChild
- Lidar com erros com try catch;
- Criar novos erros com throw new Error;
- Detectar erros através de condicionais;
- Verificar se uma lista está vazia pelo seu tamanho;


### query param
- Super semelhante a uma url,
- só que temos uma diferença na URL,
-  que são os parâmetros
-  ? = se existe
-  Q e uma query  igual e o termo de busca
-  = recebe o termo que eu preciso
-  exemplo: wwww.localhost:3000/books?q=javascript
-  http://localhost:3000/usuario?q=Camila
-  http://localhost:3000/usuario?nome=Camila Fernanda Machado Alves
```
  {
  "usuario": [
    {
      "id": 1,
      "nome": "Guilherme Henrique",
      "idade": "24",
      "email": "guilherme_cake@gmail.com",
    },
    {
      "id": 2,
      "nome": "Camila Fernanda Machado Alves",
      "idade": "22",
      "email": "camila@mila.ops",
    },
    {
      "id": 3,
      "nome": "Jeniffer Bittencourt",
      "idade": "22",
      "email": "jeniffer@jeniblo.dev",
    },
  ]
}
```
- while (lista.firstChild)
- {lista.removeChild(lista.firstChild.};