
const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const btnpopup=document.querySelector('.btnlogin-popup');
const close=document.querySelector('.icon-close');

close.addEventListener('click',()=>{
wrapper.classList.remove('active-popup')
});
btnpopup.addEventListener('click',()=>{
 wrapper.classList.add('active-popup')
});
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});




