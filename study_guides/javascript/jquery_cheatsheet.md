# jquery 

## jquery methods 

## Wrapping HTMLElements as jquery objects 
* wraps HTMLElement and returns jquery object 
    * const $liList = $("li")
    * const firstLi = $liList[0];
    * const $firstLi = $(firstLi);

### attributes 
* attr(), attr(name,value)
* text(), text(value)
* value(), value(value)

### data 
* data()
    * set
        * data("key",value)
    * get 
        * data("key")

### traversal
* each(callback w/ (index,[element]))
* parent,children,siblings

### inserting/removing 
* append(content,[context])
    * content can be htmlstring, element, text, array, jquery obj
* remove([selector]) if a selector, removes receiver 

### class manipulation
* addClass(String(can be multiple classes separated by spaces))
* removeClass(String(can be multiple classes separated by spaces))
* toggleClass(className)

## Document ready

 event, callback    callback
(string,function)  (function)

ex:
```js
$(() => console.log("loaded"));

or...

$(document).ready(callback)
```

## finding elements 
css
selector
(string)

ex:
```js
$("li");
```
*   searches for elements that match selector
*   returns jquery object of HTMLElements

##  creating elements 
tag-name  HTML code 
(string)  (string)

ex:
```js
$("<li>banana</li>");
```
* creates an HTMLElement
* wrapped in jquery object and returns it 

```js
const $li = $("<li></li>");
$li.text ("banana");
$li.attr("style","background-color: yellow");
$ul = $("ul")[0]
$ul.append($li);

```

## events 

* jqueryObject.on("eventType", callback)
* jqueryObject.off("eventType", [callback])
    * the second argument in .off is optionala BUT recommended. without, removes all listeners for the jquery object. With, will remove only listener w/ same callback

## e
* e is passed to your callback as an arg. you can attach a preventDefault to it which will prevent normal behavior

ex:
```js
e.preventDefault();
```
## currentTarget vs target 

### currentTarget 
* receiver of addEventListener
* receiver of on 

### target 
* element where event was triggered 

## delegateTarget 
```js
$("ul").on("click","li",cb) 
```

-   when 'on' is given 3 arguments 
-   delegateTarget -> receiver 
-   currentTarget -> 2nd arg 
-   target -> (unchanged; still the thing that triggers event)

## ajax example 
```js

$.ajax({
  url: '/squirrels',
  method: 'POST',
  data: {
    squirrel: {
      name: 'Munchie',
      species: 'Flying'
    }
  },
  dataType: 'JSON',
})
.then(res => console.log(res))
.fail(err => console.log(err));

```