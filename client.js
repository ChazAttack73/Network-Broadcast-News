'use strict'

const net = require( 'net' );
const HOST = 'localhost';
const PORT = 7777;

process.stdin.setEncoding( 'utf8' );
process.stdout.setEncoding( 'utf8' );

process.stdout.write( 'Please enter a user name: ' );

let userName = null;
let startConnection = false;


process.stdin.on( 'data', function( data ) {
  if( userName === null ){
    userName = data.toUpperCase().trim();
    startConnection = true;
  }

  if( startConnection === true ) {
    startConnection = false;
    const server = net.connect( { host: HOST, port: PORT }, function() {
      process.stdin.setEncoding( 'utf8' );
      server.setEncoding('utf8' );

      process.stdin.on( 'data', function( data ) {
        server.write( userName + ': ' + data + '\n' );
        process.stdout.write( '\n' + userName + ': ');
      });
    });
    server.write( userName + '\n' );
  }
});



// server.on('data', function( data ) {
//   process.stdout.write('\r' + data + '\nCHAZ: ');
// });