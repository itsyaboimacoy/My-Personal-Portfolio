let hamberger = document.querySelector('.hamberger-button');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function(){
  mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
  mobileNav.classList.remove('open');
});
