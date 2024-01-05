burger=document.querySelector('.burger')
navbarItems=document.querySelector('.navbar')
nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class');
});

//-------gallery------

document.querySelectorAll('.imgcontainer img').forEach(image =>{
    image.onclick = () =>{
    document.querySelector('.popupimg').style.display = 'block';
    document.querySelector('.popupimg img').src = image.getAttribute('src');

    }
});

document.querySelector('.popupimg span').onclick = () =>{
    document.querySelector('.popupimg').style.display = 'none';
}