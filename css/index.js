const button = document.querySelector('.button');

button.addEventListener('click',function(event){
    const email = document.querySelector('#email');
    const divEmail = document.querySelector('.email');
    
    email.value === ''? divEmail.classList.add('wrong') : divEmail.classList.remove('wrong') ;
})