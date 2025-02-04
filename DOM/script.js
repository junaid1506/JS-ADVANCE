// Day 1

// console.log('hello')
// console.dir(document.body)
// console.log(document.body)
// console.log(document.body.childNodes[1])
// console.log(document.body.childNodes[2])
// document.body.childNodes[7].innerText = "My name is Junaid"


// Day 2
heading = document.getElementById('heading') 
console.dir(heading)

heads = document.getElementsByClassName('heads')   // HTML collections
console.log(heads)     

let para = document.getElementsByTagName('p')
console.dir(para)

let firstElement = document.querySelector("p") // tag name
console.dir(firstElement)   // first element

let allElemnt = document.querySelectorAll("p") //tag name
console.dir(allElemnt)   // all elements 

let queryClass = document.querySelectorAll('.heads') // class name
console.dir(queryClass)

let queryId = document.querySelector("#heading")  // id
console.dir(queryId)