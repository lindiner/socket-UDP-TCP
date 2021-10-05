import {createServer} from 'net'

const server = createServer((socket) => {
    socket.end(`Conexão TCP Realizada com sucesso`)
});

server.listen(59090);