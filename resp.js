burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
leftside=document.querySelector('.leftside');
rightside=document.querySelector('.rightside');

burger.addEventListener('click',()=>{

rightside.classList.toggle('vnav');
leftside.classList.toggle('vnav');
navbar.classList.toggle('hnav');
})
