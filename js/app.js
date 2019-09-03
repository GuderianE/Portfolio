$(document).foundation();

$(document).ready(function(){
  $(".sticker").sticky({topSpacing:0});
  $(".sticker2").sticky({topSpacing:50});

});

// *-----Typewriter animation-----

const typewriterArr = ['Mobile-First-Approach', 'Responsive-Design', 'Clean-Code'];
document.addEventListener('DOMContentLoaded', init);

const typeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  };
  
  //Type Method
  typeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    
    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.txtElement.innerHTML = `<span class="txt">
    ${this.txt}</span>`;
    
    let typeSpeed = 300;
    
    if(this.isDeleting) {
      typeSpeed /= 2;
    }
    
    if(!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }
    
    
    setTimeout(() => this.type(), typeSpeed);
  };
  
  document.addEventListener('DOMContentLoaded', init);
  
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = typewriterArr;
    const wait = txtElement.getAttribute('data-wait');
    new typeWriter(txtElement, words, wait);
  }
// *-----Typewriter animation end-----

// *-----Debounce Function-----
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
// *-----Debounce Function end-----

//* ----Animate on scroll-----
const elem = document.querySelectorAll(".animate"); 
  
  const checkSlide = (e) => {
  elem.forEach( elem => {
  const slideinAt = (window.scrollY + window.innerHeight) - elem.height/2;
  const elemBottom = elem.offsetTop + elem.height;
  const isHalfShown = slideinAt > elem.offsetTop;
  const isNotScrolledPast = window.scrollY < elemBottom;
  if(isHalfShown && isNotScrolledPast) {
    elem.classList.add('active');
  } else {
    elem.classList.remove('active');
  }

});
};

window.addEventListener('scroll', debounce(checkSlide));
//* ----Animate on scroll end-----