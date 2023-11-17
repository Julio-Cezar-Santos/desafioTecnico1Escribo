# Projeto Somatório de Números Divisíveis por 3 ou 5

Este projeto consiste em uma aplicação simples utilizando Node.js e Express para calcular o somatório de todos os valores inteiros divisíveis por 3 ou 5 até um determinado número.

## Como Rodar o Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/current) e o [Git](https://git-scm.com/downloads) instalados em sua máquina.

1. <b>Clone o repositório para sua máquina local:</b>
   
    ```bash
    git clone git@github.com:Julio-Cezar-Santos/desafioTecnico1Escribo.git
    ```

2. <b>Abra seu terminal na pasta do repositório e instale as dependências do projeto:</b>

    ```bash
    npm install
    ```
3. <b>Inicie o servidor:</b>

   ```bash
    npm run dev
    ```


## Como Testar a Aplicação

Você pode testar a aplicação acessando o seguinte endpoint no seu navegador ou através de uma ferramenta como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/):

  - http://localhost:3000/somatorio/{numero}
    
Substitua <b>{numero}</b> pelo valor desejado para calcular o somatório.

### Exemplo

  - http://localhost:3000/somatorio/10

Este exemplo calculará o somatório de todos os valores inteiros divisíveis por 3 ou 5 até o número 10.

Você receberá uma resposta JSON contendo o resultado do somatório.

   ```json
    {
      "resultado": "O Somatório de todos os valores inteiros divisíveis por 3 ou 5 é: 23."
    }
  ```

Pronto! Você configurou e testou com sucesso o projeto de somatório de números divisíveis por 3 ou 5. Sinta-se à vontade para explorar e modificar conforme suas necessidades.



   
