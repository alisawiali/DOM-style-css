let imad = document.getElementById('content');
imad.innerHTML='hallo world';
console.log(content)

// element.style.property=value
/*
imad.style.backgroundColor='#444'
imad.style.color='#fa0'
imad.style.fontSize='2rem'
// imad.style.textAlign='center'
imad.style.fontWeight='550'
imad.style.padding='20px'
imad.style.textShadow='0px 2px 10px black'
imad.style.borderLeft='10px solid #fa0'*/




console.log('-----------das ist erste Möglichkeit-------------')
//  Element.style.cssText=

// imad.style.cssText=`
// background:red;
// color:white;
// padding:3rem;

// `


console.log('-----------wie wir löschen mit removeProperty()------------')
// wir löschen das Element mit dem Mothode..............
imad.style.removeProperty('background')
imad.style.removeProperty('color')


console.log('-----------noch eine Möglichkeit etwas schreiben beim css-------------')


imad.style.setProperty('color','red')



console.log('-----------wie  cerate  mann eine Element in js------------')


let container = document.createElement('div');
let head= document.createElement('h1');
let img = document.createElement('img');


let content = document.createTextNode('hallo Imad');
head.appendChild(content);
img.src= '/img/abhishek-rai-kostsFVW59s-unsplash.jpg';

container.appendChild(img);
container.appendChild(head);
document.body.appendChild(container)
console.log(container)