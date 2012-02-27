jQuery Credit Card Type Detector Plugin

Detail: https://github.com/christianreed/Credit-Card-Type-Detector

Determines possible credit card types as a user types their credit card number.

Intended use is that you start with all possible card logos that you accept and 
gradually gray them out as the number excludes certain brands of cards. Helps give 
the user the impression that you know what you're doing and improve conversion.

Designed to work with the cards accepted by Stripe (http://stripe.com), but could
extended to work with additional card types. Currently detects Visa, Mastercard,
American Express, Diners Club, Discover, and JCB.

Everything is done with CSS, so as the number changes classes are added to the
card logo element indicating that a particular card type is possible. Those classes
are:

* .is_visa
* .is_mastercard
* .is_amex
* .is_diners
* .is_discover
* .is_jcb

Also will add a class called .is_nothing if there's no card that matches (useful
for graying everything out).

Included is a transparent png file with various card types, some css, and a
possible HTML structure. So pretty much cut and paste, but you could certainly
build your own structure 
 
Basic Use:
$('#credit_card_input_field').creditCardTypeDetector({ 'credit_card_logos_id' : '#card_logos_ele' });

Default requires no arguments, but looks for the logos to have the class .card_logos