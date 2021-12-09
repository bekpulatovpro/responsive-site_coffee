const elHamburger = document.querySelector('.header__menu-button')
        const elHeader =document.querySelector('.header')

        elHamburger.addEventListener('click',()=>{
            if(elHeader.classList.contains('header--active')){
                elHeader.classList.remove('header--active')
            }else{
                elHeader.classList.add('header--active')
            }
})