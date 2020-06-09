# Vanilla Dom 

## Data-*(getting,setting and removing data from an element)

* GET HTMLElement.getAttribute("data-name")
* SET HTMLElement.setAttribute("data-name",value)
* DEL HTMLElement.removeAttribute("Data-name");

## Document Ready

* document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded')
}

## Finding Elements 

* document.querySelectorAll("li")
    * searches for elements that match selector
    * returns NodeList of HTML Elements
* document.querySelector("#id")
    * searches for the first element that matches the selector
    * any CSS selector or html tag can be used as selector
        * Ex: `ul#todo-list > li.open`
    * returns an HTML Element
* document.getElementsByClassName("classNameString")
    * searches for all elements with the given class
    * return an HTMLCollection of HTML Elements
* document.getElementById("idString")
    * searches for the element with the given id
    * return the HTML Element

## Creating Elements 

* document.createElement("li");
    * creates an HTMLElement and returns it 

ex:
```
const li = document.createElement("li");
const liText = document.createTextNode("banana")
li.appendChild(liText)
li.style.backgroundColor = "yellow";
const ul = document.querySelector("ul");
ul.appendChild(li)

```

## Styling Elements

#### Inline
```js
const div = document.getElementById("idString");
div.style.backgroundColor = "blue";
div.style.fontWeight = "900";
```

#### Using Classes
```js
const div = document.getElementById("idString");
div.classList.add("hidden");
div.classList.remove("hidden");
```

## Events 

* EventTarget(HTMLElement or document).addEventListener("eventType",callback)

* EventTarget(HTMLElement or document).removeEventListener("eventType",callback)



