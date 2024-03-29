var net = require('net');

var HOST = '127.0.0.1';
var PORT = 8000;

var client = new net.Socket();
client.connect(PORT, HOST, function(){
    console.log('CONNECTED TO: '+HOST+':'+PORT);

    client.write('data wrote from client');
});

client.on('data', function(data){
    console.log('DATA FROM SERVER: '+data);
    client.destroy();
});

client.on('close', function(){
    console.log('closed');
    process.exit();
});