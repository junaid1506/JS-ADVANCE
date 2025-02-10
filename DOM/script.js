// Day 1

// console.log('hello')
// console.dir(document.body)
// console.log(document.body)
// console.log(document.body.childNodes[1])
// console.log(document.body.childNodes[2])
// document.body.childNodes[7].innerText = "My name is Junaid"


// Day 2
// heading = document.getElementById('heading') 
// console.dir(heading)

// heads = document.getElementsByClassName('heads')   // HTML collections
// console.log(heads)     

// let para = document.getElementsByTagName('p')
// console.dir(para)

// let firstElement = document.querySelector("p") // tag name
// console.dir(firstElement)   // first element

// let allElemnt = document.querySelectorAll("p") //tag name
// console.dir(allElemnt)   // all elements 

// let queryClass = document.querySelectorAll('.heads') // class name
// console.dir(queryClass)

// let queryId = document.querySelector("#heading")  // id
// console.dir(queryId)


// Day 3 
// console.log(document.querySelector('div').firstChild);
// console.log(document.querySelector('div').firstChild.nodeName);

// console.log(document.querySelector('div').innerHTML)



// let data = document.querySelector('div').innerHTML = "<h1> hello </h1>"
// console.log(data)


// Day 4
// <!-- Create a H2 heading element with text - "Hello JavaScript" . Append "From Apna College Students" to this text using the js -->
// let h2 = document.getElementById('head')
// console.log(h2)
// h2.innerText = "From Apna College Students"

// Create 3 div with the common classname - "box" . Access them & add some unique text to each of them

// let boxes = document.getElementsByClassName('box')
// console.log(boxes)
// method 1
// boxes[0].innerHTML ="Hello i am first"
// boxes[1].innerHTML ="Hello i am second"
// boxes[2].innerHTML ="Hello i am third"
// method 2
// let i = 1
// for ( box of boxes) {
//     box.innerHTML = `i am ${i}`;
//     i++
// }

// attribute
let div = document.querySelector('#box')
console.log(div)

let atr = div.getAttribute('id')
console.log(atr)
let atr2 = div.setAttribute('id','box2')
console.log(atr2)