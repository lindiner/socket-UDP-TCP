# socket-UDP-TCP

### 1. Instalação do projeto:

1.1. Execute `npm install`
   
### 2. Execução do Projeto:

#### 2.1 Para executar os testes do UDP:

2.1.1 - Abra o terminal no diretório do projeto clonado. Em seguida execute: `cd udp`

2.1.2 - Execute o comando no terminal: `node udp_server.js` para rodar o servidor UDP

2.1.3 - Abra um novo terminal e dentro do mesmo diretório: `/udp`, execute o cliente: `node udp_client.js`

Pronto! No terminal do Servidor será visível o resultado da conexão. Rode novamente `node udp_client.js` e verá as incrementações dos resultados em cima do valor retornado.

#### 2.2 Para executar os testes do TCP:

2.2.1 - Abra o terminal no diretório do projeto clonado. Em seguida execute: `cd tcp`

2.2.2 - Execute o comando no terminal: `node tcp_server.j` para rodar o servidor TCP

2.1.3 - Abra um novo terminal e dentro do mesmo diretório: `/tcp`, execute o cliente: `node tcp_client.js`

Neste resultado do TCP, o retorno é apenas uma mensagem de confirmação de conexão TCP.