Front-end development can be split up into three major coding languages.

HTML - HyperText Markup Language defines the structure of a website semantically and the content that will be rendered by the web browser.

CSS - Cascading Stylesheets deal with the presentation of content including aspects such as layout, formatting and colors.

Javascript - One of the most popular coding languages in the world, brings movement and user interaction to websites.


Tags = Can either be self-closing or wrapping

wrapping = <p>, <h1>, <h2>, <h6>

Lists: 

Unordered: 
<ul>
    <li>Unordered List</li>
    <li>Ordered List</li>
    <li>Definition List</li>
</ul>

Ordered: 
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>

Definition: 
<dl>
    <dt>Unordered List</dt>
    <dd>An HTML element made up of list elements in no particular order</dd>
    <dt>Ordered List</dt>
    <dd>An HTML element made up of list elements in order</dd>
    <dt>Definiton List</dt>
    <dd>An HTML element with definition term and definition data elements</dd>
</dl>

Links = Can be clickable or enclosing

ie: <a href="http://appacademy.io">App Academy</a>
ie2: <a name="top-of-page" />
     <a href="#top-of-page">Back to top</a> 

Images:
    <img src="http://appacademy.io/images/app-academy-logo.img" alt="app-academy-logo" />

    Question: What is the alt attribute? alternate text for image if image cannot be displayed

Thinking in boxes: Containers and Content Holders

Containers: The HTML Elements that are purely used to hold other HTML elements are commonly called containers.

Container tags: 

<header>
    Container for elements in the top header section of a page
</header>

<footer>
    Container for elements in the bottom footer section of a page
</footer>

<nav>
    Usually used to hold navigation elements like lists of links
</nav>

<article>
    Used to hold content that makes sense on its own like Posts or Comments
</article>

<aside>
    Used to hold sidebar sections that are tangentially related to the content
</aside>

<figure>
    Holds images, graphic content, code samples etc.
</figure>

<figcaption>
    Holds caption content for a corresponding figure element
</figcaption>

<section>
    A section of the page or chapter of an <article> with a heading
</section>

<div>
    A common container element used when other semantic elements do not seem appropriate
</div>

<script> 
    "Holds JS"
</script>

<link> => The rel attribute defines the relationship and must refer to stylesheet when loading an external stylesheet file.

The href attribute specifies the URL of the defined resource, in this case the path to the CSS file being requested.


How to add style to a document: 

Inline:
<h2 style="color: #000000; font-size: 2em;"> Hi </h2>


Pros:

Highest specificity: Ensures the style will be applied to the element
Cons:

Highest specificity: will overwrite most other styles in an internal or external sheet
Redundant; not DRY
Cluttered, unreadable HTML markup
Difficult to manage
Impossible to style pseudo-elements and classes like visited, hover, and active