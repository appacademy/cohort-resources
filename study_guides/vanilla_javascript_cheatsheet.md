# Vanilla Dom 

## data-*(getting,setting and removing data from an element)

* GET HTMLElement.getAttribute("data-name")
* SET HTMLElement.setAttribute9"data-name",value)
* DEL HTMLElement.removeAttribute("Data-name");

## Document ready

* document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded')
}

## finding elements 

* document.querySelectorAll("li")
    * searches for elements that match selector
    * returns NodeList of HTML Elements

## creating elements 

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

## events 

* EventTarget(HTMLElement or document).addEventListener("eventType",callback)

* EventTarget(HTMLElement or document).removeEventListener("eventType",callback)



