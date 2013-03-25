# What is this?
------------------------------

A simple script to let your users know that their forms are being submitted.

Note that this current version is probably unusable in older browsers. I'll be working to fix that soon.

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

## How to use?
------------------------------

Inside the markup for your form submit handler, include a `data-submit` attribute that contains the text you wish to display upon submitting your form.

    <form id="myForm" method="post">
        <input type="text" name="name" placeholder="Your name">
        <input type="email" name="email" placeholder="john@doe.com">

        <input type="submit" data-submit="Saving" name="submit" value="Submit">
        <!-- Or, <button type="submit" data-submit="Saving">Submit</button> -->
    </form>

Just include the `submit.js` script at the end of your file and you're done.