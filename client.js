const net = require( 'net' );
const HOST = 'localhost';
const PORT = 7777;


const server = net.connect( { host: HOST, port: PORT }, function() {
  process.stdin.setEncoding( 'utf8' );
  server.setEncoding('utf8' );

  //process.stdout.write( 'CHAZ: ' );

  process.stdin.on( 'data', function( data ) {
    server.write( data );
    process.stdout.write( '\nCHAZ: ');
  });

  server.on('data', function( data ) {
    process.stdout.write('\r' + data + '\nCHAZ: ');
  });

});