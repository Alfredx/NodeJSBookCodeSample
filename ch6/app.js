var net = require('net');

var HOST = '127.0.0.1';
var PORT = 8000

net.createServer(function(sock){
    console.log('CONNECTED: '+sock.remoteAddress+':'+sock.remotePort);

    sock.on('data', function(data){
        console.log('DATA('+sock.remoteAddress+'): '+data);
        sock.write('write back: '+data);
    });

    sock.on('close', function(data){
        console.log('CLOSED('+sock.remoteAddress+':'+sock.remotePort+'): '+data);
    });
}).listen(PORT, HOST);


console.log('SERVER listening on '+HOST+':'+PORT);