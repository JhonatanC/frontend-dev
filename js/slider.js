class Slider {

    prev = document.querySelector('#prev');
    next = document.querySelector('#next');

    slideContaier = document.querySelector('.slideshow-container');
    mySlides = document.querySelectorAll('.mySlides');

    setup = {
      index: 1,
      time: 2000,
      effect: 'fadeIn' //fadeOut 
    };

    constructor(){
      this.showSlides(this.setup);
    }

    prev(){
      this.prev.addEventListener('click', () => {
        showSlides(setup.index = -1);
      });
    }

    next(){
      this.next.addEventListener('click', () => {
        showSlides(setup.index = 1);
      });
    }

    showSlides(setup) {
      console.log(setup);
    }

  }