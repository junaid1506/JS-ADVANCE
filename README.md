# The 3 Muskeeters of Web Dev 
- HTML (structure)
- CSS (styling)
- JS (logic)

# Window Object
- The window object represents an open window in a browser. it is browser's object (not javascripts's)
  & automactically create by browser 
- It is "global" object with lots of properties & methods
- exp:- console , promt , alert

# What is DOM
- When ap web page is loaded, the browser create a "documents object model" of the page
- window > document > html > body > script & div

# DOM manupulation

## Selecting with id 
- document.getElemntById("myId")

## Selecting with class 
- document.getElemntByClassName("myClass")

## Selecting with tag 
- document.getElemntByTagName("myTagName")

# Querry Selector 
- document.querySelector("myId/myClass/tag") *return first element*
- document.querySelectorAll("myId/myClass/tag") *return a Nodelisst*

# Properties *GET / SET / UPDATE*
- tagName : return tag of elements nodes 
- innerText : return the text content of the elements and  all its children 
- innerHTML : return the plain text or HTML content in the element 
- textContent : return texual content even for hidden content 
