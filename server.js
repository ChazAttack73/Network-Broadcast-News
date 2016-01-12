'use strict'

const net = require( 'net' );

let clientArr = [];

const server = net.createServer( function ( clientConn ) {

  clientConn.setEncoding( 'utf8' );
  clientArr.push( clientConn );
  clientConn.write( 'You\'ve landed in Chaztown!\n' );

  clientConn.on( 'data', function( data ) {
    process.stdout.write( data );

    for( var i = 0; i < clientArr.length; i++ ) {
      clientArr[i].write( data );
    }
  });

  //console.log( clientArr );

});


server.listen( 7777, function() {
  process.stdout.write( 'I hear ya baby!\n' );
});