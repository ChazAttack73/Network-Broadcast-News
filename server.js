const net = require( 'net' );

const server = net.createServer( function ( clientConn ) {
  clientConn.write( 'You\'ve landed in Chaztown!\n' );

  clientConn.on( 'data', function( data ) {
    process.stdout.write( data );
  });

});


server.listen( 7777, function() {
  process.stdout.write( 'I hear ya baby!\n' );
});