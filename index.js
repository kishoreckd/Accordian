// method1

// const openbtn =document.querySelector('#openbtn1')
// console.log(openbtn);
const text1 =document.querySelector('#text1')
// console.log(text1);
const text2 =document.querySelector('#text2')
// console.log(text2);
const text3 =document.querySelector('#text3')
// console.log(text3);
const minus1 =document.querySelector('#minus1')
console.log(minus1);
const plus1 =document.querySelector('#plus1')

plus1.addEventListener('click',() =>{
    // text1.classList.remove('question-text')
    text1.style.display='block'
    text2.style.display='none'
    text3.style.display='none'
    plus2.style.display='block'
    minus2.style.display='none'
    plus1.style.display='none'
    minus1.style.display='block'
    plus3.style.display='block'
    minus3.style.display='none'
    // console.log(text1);

})

minus1.addEventListener('click',() =>{
    text1.style.display='none'
    plus1.style.display='block'
    minus1.style.display='none'
    // console.log(text1);

})


const plus2 =document.querySelector('#plus2')
// console.log(plus2);
const minus2 =document.querySelector('#minus2')
console.log(minus2);


plus2.addEventListener('click',() =>{
    // text2.classList.remove('question-text')
    text2.style.display='block'
    text1.style.display='none'
    text3.style.display='none'
    plus1.style.display='block'
    minus1.style.display='none'
    plus2.style.display='none'
    minus2.style.display='block'
    plus3.style.display='block'
    minus3.style.display='none'
    // console.log(text1);

})
minus2.addEventListener('click',() =>{
    text2.style.display='none'
    plus2.style.display='block'
    minus2.style.display='none'
    // console.log(text1);

})


const minus3 =document.querySelector('#minus3')
console.log(minus3);
const plus3 =document.querySelector('#plus3')

plus3.addEventListener('click',() =>{
    // text1.classList.remove('question-text')
    text3.style.display='block'
    text1.style.display='none'
    text2.style.display='none'
    plus2.style.display='block'
    minus2.style.display='none'
    plus3.style.display='none'
    minus3.style.display='block'
    plus1.style.display='block'
    minus1.style.display='none'
    // console.log(text1);

})

minus3.addEventListener('click',() =>{
    text3.style.display='none'
    plus3.style.display='block'
    minus3.style.display='none'
    // console.log(text1);

})

