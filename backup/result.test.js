const phantomcss = require('phantomcss');

casper.test.begin( 'Calculator Visual Tests', function ( test ) {

    phantomcss.init( {
        rebase: casper.cli.get( "rebase" )
    } );

    casper.start( 'http://localhost:8080/calculator-normal.html' );

    casper.viewport( 1024, 768 );

    // Calculation Test
    casper.then( function () {
        casper.click( '#one' );
        casper.click( '#plus' );
        casper.click( '#one' );

        casper.waitForSelector( '#result',
            function success() {

                phantomcss.screenshot( '#result', 'validate calculation display');
            },
            function timeout() {
                casper.test.fail( 'Failed to find result' );
            }
        );
    });

    casper.then( function() {
        // compare screenshots
        phantomcss.compareAll();
    });


    casper.run( function () {
        casper.test.done();
    } );
} );