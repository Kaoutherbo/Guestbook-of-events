const profile = document.querySelector('nav .profile');
const account = document.querySelector('.account');
const closeSpan = document.querySelector('.form span');
let isClicked=true;

function toggleAccount(){
  if(isClicked){
    account.style.display='block';
  }
  else{
    account.style.display='none';
  }
  isClicked=!isClicked;
 }

 profile.addEventListener('click',toggleAccount);
 closeSpan.addEventListener('click',toggleAccount);