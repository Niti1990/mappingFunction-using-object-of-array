const articles = [
	{
		title: 'article one',
		author: 'Joe Bloggs',
		date: '12-02-2023',
	},
	{
		title: 'article two',
		author: 'Bill Jones',
		date: '24-02-2024',
	},
	{
		title: 'article three',
		author: 'John Smith',
		date: '24-02-2024',
	},
]

// method one
// const Element = document.querySelector('div')
// console.log(Element)
// const Create = document.createElement('li')
// Create.innerHTML = articles
// Element.append(Create)

// mapping function
const Create = document.createElement('div')
Create.innerHTML = articles
const Element = document.getElementById('card')

const newArray = articles.map(function (Item) {
	// return article
	const div = document.createElement('div')
	// div.innerHTML = articles
	div.innerHTML = `<p id=articles>
  <span> Title:</span>
  <span>${Item.title} </span>
  <br>
  <span>Author: </span>
  <span>${Item.author} </span>
  <br>
  <span> Date: </span>
  <span>${Item.date}</span>
 </p>`
	Element.appendChild(div)
})
console.log(newArray)
