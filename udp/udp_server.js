var PORT = 5500
var HOST = '127.0.0.1'

import {createSocket} from 'dgram'
var server = createSocket('udp4')

var totalDatagrams = 0
var receiveDatagram = []
var incorrect = [0, 0, 0, 0, 0]
var correct = [0, 0, 0, 0, 0]
const confere = (datagram) => {
    const datagrams = ['1;3;VVV', '2;4;FVFV', '3;4;VVFV', '4;5;VVFVF', '5;5;FVFFV'] /**Gabarito */

    receiveDatagram.push(datagram)
    var index = datagrams.indexOf(datagram)
    if(datagrams.indexOf(datagram) !== -1){
        correct[index] += 1
    } else if(index === -1){
        incorrect[totalDatagrams] += 1
    }

    totalDatagrams += 1
    if (totalDatagrams === datagrams.length) {
        totalDatagrams = 0
        receiveDatagram = []
        datagrams.map((data, index)=>{
            return console.log(index+1+";"+correct[index]+";"+incorrect[index])
        })
    }
}

server.on('listening', function () {
    var adress = server.address()
    console.log('UDP Server listening on ' + adress.address + ':' + adress.port)
})

server.on('message', function (message, remote) {
    const messageServer = {
        'RemoteAdress':remote.address,
        'Port':remote.port
    }
    if(totalDatagrams === 0){
       console.log(messageServer)
    }
     confere(`${message}`)
})

server.bind(PORT, HOST)