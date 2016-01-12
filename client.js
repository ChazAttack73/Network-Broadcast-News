'use strict'

const net = require( 'net' );
const HOST = 'localhost';
const PORT = 7777;

process.stdin.setEncoding( 'utf8' );
process.stdout.setEncoding( 'utf8' );

process.stdout.write( 'Please enter a user name: ' );

let userName = null;
let startConnection = false;
let server = null;


process.stdin.on( 'data', function( data ) {
  if( userName === null ){
    userName = data.toUpperCase().trim();
    startConnection = true;
  }

  if( startConnection === true ) {
    startConnection = false;
    server = net.connect( { host: HOST, port: PORT }, connectedToServer);
    server.write( userName + '\n' );

  } else {
    server.write( userName + ': ' + data + '\n' );
    process.stdout.write( '\n' + userName + ': ');
  }
});

function connectedToServer() {
  process.stdin.setEncoding( 'utf8' );
  server.setEncoding('utf8' );

  server.on( 'data', function( data ) {
    process.stdout.write( data );
  });
}