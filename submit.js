/**
 * @submit.js
 *
 * A simple script to let your users know that their forms are being submitted.
 *
 * Chen Zihui <hello@chenzihui.com>
 **/

(function() {
  'use strict';

  /*
   * Handles the submit event
   *
   * @method handleSubmitEvent
   */

  var handleSubmitEvent = function( e ) {
    e.preventDefault();

      var els = e.target.children,
          len = els.length,
          i, prevVal;

      // Iterate through the form's children to find the
      // submit button
      for ( i = 0; i < len; i++ ) {
        if ( els[i].hasAttribute( 'data-submit' ) ) {
          prevVal = els[i].value;

          // Set the button's value to the one specified in the data- attribute
          els[i].value = els[i].getAttribute( 'data-submit' );

          // Set the previous value to the data- attribute so that you can
          // reuse it in your AJAX callbacks.
          //
          // E.g.
          //
          // $.post( url, data, function( res ) {
          //   $( '#mySubmitButton' ).val( $( '#mySubmitButton' ).attr( 'data-submit' ) );
          // });

          els[i].setAttribute( 'data-submit' );

          // Assuming only one submit button in the form
          break;
        }
      }
  };

  if ( document.addEventListener ) {
    // Add a submit handler to the document object, we're using
    // event delegation here.
    document.addEventListener( 'submit', handleSubmitEvent );
  } else {
    document.attachEvent( 'onsubmit', handleSubmitEvent );
  }
})();