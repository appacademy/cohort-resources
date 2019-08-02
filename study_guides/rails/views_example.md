# Forms 
```html
<h2>Cat form!</h2>

<form action="/cats" method="post">
  <label>First name
  <!-- input name `cat[name]` means that Rails will nest the `name` attribute
       inside a `cat` hash: `{ :cat => { :name => "gizmo" } }` -->
  <input name="cat[name]" id="cat_name" type="text">
  </label>
  <br>

  <label>Age
  <input name="cat[age]" id="cat_age" type="number">
  </label>
  <br>

  <!-- this label isn't for anything specific -->
  <label>Sex</label>
  <div>
    <!-- note that both radio buttons have the name `cat[sex]`; that's how
         they are related -->
    <input name="cat[sex]" id="cat_sex_m" type="radio" value="m">
    <label for="cat_sex_m">Male</label>
    <input name="cat[sex]" id="cat_sex_f" type="radio" value="f">
    <label for="cat_sex_f">Female</label>
  </div>
  <br>

  <label for="cat_biography">Biography</label>
  <textarea name="cat[biography]" id="cat_biography"></textarea>
  <br>

  <label for="cat_coat_color">Coat color</label>
  <!-- dropdown -->
  <select name="cat[coat_color]">
    <!-- `brown` is the value that will be submitted to the server; user is
         displayed "Brown" as the choice -->
    <option value="brown">Brown</option>
    <option value="black">Black</option>
    <option value="blue">Blue</option>
  </select>
  <br>

  <label for="cat_birth_date">Birth date</label>
  <!-- click on the date will launch a date picker -->
  <input name="cat[birth_date]" id="cat_birth_date" type="date">

  <input type="submit" value="Build my cat!">

  <!--
    Other uncovered input types:
    hidden field
    check box
    -->
</form>
```