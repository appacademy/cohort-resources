This README details how to go through the html form demo.

* First open up the HTML file and walk through the general structure
  - head, body
* Open the html (show them how to do it from terminal)
  - use the browser rendering to repeatedly refer back to as you walk through each element
* Go into the parts of the body shown. Touch on the following:
  - section tag
  - talk about the opening form tag - here is where we specify the action and method we described earlier. This form is signing up a user, and the URL that will process the signup request is http://example.com/signup.
  - label and input relationship
    - go over both ways (`for` and `id` vs wrapping the input)
    - show how clicking the label on the browser focuses the cursor onto the corresponding input field
  - input types: text, password, submit...
  - go over tag attributes - in particular `value` and `name`.
  - select tag (dropdowns)
  - input type radio - note how the `name` dictates what it's for.
  - briefly outline what happens when you submit a form
    - abstract as much of the HTTP logic as possible
* Finally, comment in the CSS and JS script in the `head` and talk briefly about what CSS and JS add to webpages.
* FIN