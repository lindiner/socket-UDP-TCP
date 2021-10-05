import {
    Buffer
} from 'buffer';
var PORT = 5500
var HOST = '127.0.0.1'

import {
    createSocket
} from 'dgram'
var client = createSocket('udp4')

const datagrams = ['1;3;VFF', '2;4;FVFF', '3;4;VVFV', '4;5;VVFVF', '5;5;FVFFF']

datagrams.map((datagram, index) => {
    var message = Buffer.from(datagram)
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err
        console.log('UDP message sent to ' + HOST + ':' + PORT)
        if (datagrams.length == index + 1) {
            client.close()
        }
    })
})