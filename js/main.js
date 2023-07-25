const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
menuBtn.addEventListener('click', ()=>{
	menuList.classList.toggle('menu__list--active')
})



const tabItems = document.querySelectorAll('.tabs__btn-item');
 const tabContent = document.querySelectorAll('.tabs__content-item');

 tabItems.forEach(function(element){
	element.addEventListener('click', open)
 })

 function open(e){
	const tabTarget = e.currentTarget;
	const button = tabTarget.dataset.content
	tabItems.forEach(function(item){
		item.classList.remove('tabs__btn-item--active')
	})

	tabTarget.classList.add('tabs__btn-item--active')

	tabContent.forEach(function(i){
		i.classList.remove('tabs__content-item--active')

	})
	document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
 }

 const swiper = new Swiper(".swiper", {
	pagination: {
		effect: "fade",
	  el: ".swiper-pagination",
	},
	  autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	 },
	
 });