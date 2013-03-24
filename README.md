# What is this?
------------------------------

A simple script that helps provide feedback to your user upon form submission.

## Why did I build this?
------------------------------

Because I'm sick of writing the same boilerplate code over and over again whenever I have to write a form submission via AJAX.

    // This always happens...
    $( '#submit-btn' ).val( 'Saving...' );

    $.post( url, data, function( res ) {
      if ( res.successful ) {
        // If successful, change the button text back to normal
        $( '#submit-btn' ).val( 'Submit' );
      }
    });

## Examples
------------------------------

Coming soon.