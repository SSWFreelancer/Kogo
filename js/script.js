document.addEventListener('DOMContentLoaded', function(event) {	

	var burger = document.querySelector('.header__burger');
	var body = document.querySelector('body');
	var menu = document.querySelector('.menu');
	var menuLink = document.querySelectorAll('.menu__link')
	if(burger){
    burger.addEventListener('click', function(event) {
    		burger.classList.toggle('active');
    		menu.classList.toggle('active');
    		body.classList.toggle('lock');
    });
	}
	if(menuLink){
		menuLink.forEach(function(menuLink) {
		    menuLink.addEventListener('click', function(event) {
		    		burger.classList.remove('active');
		    		menu.classList.remove('active');
		    		body.classList.remove('lock');
		    });
		});
	}

  if(document.querySelector('.miner__swiper')){
      new Swiper('.miner__swiper', {
        speed: 600,
        spaceBetween: 16,
        slidesPerView: 1,
        loop:true,
		    mousewheel: {
		        forceToAxis: true,
		    },
			  navigation: {
			    nextEl: '.miner__next',
			    prevEl: '.miner__prev',
			  },
			  pagination: {
			    el: '.miner__dots',
			    clickable:true,
			  },
      });
   }

  if(document.querySelector('.services__slider')){
		document.querySelectorAll('.services__slider').forEach(function(wrapper) {
		  var slider = wrapper.querySelector('.services__swiper');
		  if(slider){
			  var swiper = new Swiper(slider, {
	        speed: 600,
	        spaceBetween: 16,
	        slidesPerView: 1,
	        loop:false,
			    navigation: {
			      prevEl: wrapper.querySelector('.services__prev'),
			      nextEl: wrapper.querySelector('.services__next'),
			    },
				  pagination: {
				    el: wrapper.querySelector('.services__fraction'),
				    type:'fraction',
				  },
			    breakpoints: {
			        992: {
			        	loop:false,
							  pagination: {
							    el: wrapper.querySelector('.services__fraction'),
							    type:'fraction',
							  },	
			        },
			        0: {
			        	loop:true,
							  pagination: {
							    el: wrapper.querySelector('.services__pagination'),
							    type: 'bullets',
							  },		        		
			        },		                
			    }
			  });		  	
		  }
		});  	
  }



	var tabsItems = document.querySelectorAll('[data-tab]');
	if(tabsItems){
		tabsItems.forEach(function(tabsItem) {
		    tabsItem.addEventListener('click', function(event) {
				    event.preventDefault();
				    var tabParent = this.closest('.tabs');
				    var tabActive = tabParent.querySelector('[data-tab].active');
				    var contentActive = tabParent.querySelectorAll('[data-content].target');
				    if (tabActive) {
				        tabActive.classList.remove('active');
				    }
						contentActive.forEach(function(contentActive){
						  if (contentActive) {
								contentActive.classList.remove('target');
						  }	  
						});
				    this.classList.add('active');
				    const tabContent = this.getAttribute("data-tab");
				    const tabId = tabParent.querySelectorAll(`[data-content="${tabContent}"]`);
						tabId.forEach(function(tabId){
						  if (tabId) {
								tabId.classList.add('target');
						  }	  
						});
		    });
		});
	}

	var faqTop = document.querySelectorAll('.faq__top');
	if(faqTop){
		faqTop.forEach(function(faqTop) {
		    faqTop.addEventListener('click', function(event) {
		    		event.preventDefault();
		    		faqTop.parentNode.classList.toggle('active');
		        slideToggle(faqTop.nextElementSibling);
		    });
		});
	}
	function slideToggle(element) {
	  var target = element.style;
	  if (target.maxHeight) {
	    target.maxHeight = null;
	    element.classList.remove('active');
	  } else {
	    target.maxHeight = element.scrollHeight + 'px';
	    element.classList.add('active');
	  }
	}

});
