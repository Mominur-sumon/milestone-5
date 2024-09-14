// console.log("hello from dom.js");

// const licollection = document.getElementsByTagName("li");
// // console.log(licollection);
// for(const li of licollection){
//     console.log(li);
// }

// const allHeadings = document.getElementsByTagName("h1");
// for(const heading of allHeadings){
//     console.log(heading.innerText);
// }

const places = document.getElementsByClassName('important-places');
// console.log(places);
// for(const place of places){
//     console.log(place.innerText);
// } 

// querySelectorAll 
// const someLi= document.querySelectorAll('.fruits-container li');
// console.log(someLi);
// for(const li of someLi){
//     console.log(li);
//     console.log(li.innerText);
// }

// const sections = document.querySelectorAll('section');
// console.log(sections);

// for(const section of sections){
//     section.style.border = "1px solid red";
//     section.style.marginBottom = '5px'
//     section.style.padding = '5px';
//     section.style.borderRadius = '5px';
//     section.style.background = 'yellow' ;
// }

// // const placeConatiner = document.getElementById('myfriends')
// // console.log(placeConatiner);
// // placeConatiner.style.background = 'black' ;
// // placeConatiner.style.color = 'white' ;

// const placeConatiner = document.getElementById('myfriends') ;
// placeConatiner.classList.add('text-center');
// placeConatiner.classList.add('large-text');

const placesList = document.getElementById('places-list');
// console.log(placesList);

const li = document.createElement('li');
li.innerText = 'Sylhet';
placesList.appendChild(li);

//where to add 
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biryani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Khichuri';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Kacchi';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// another way to add

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My Dress List</h1>
    <ul>
        <li>Lungi</li>
        <li>Shirt</li>
        <li>Pant</li>
    </ul>
`;
sectionDress.style.border = '1px solid red';
mainContainer.appendChild(sectionDress);
