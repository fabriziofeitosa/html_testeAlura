var glide = new Glide('.glide', {
  type: 'carousel',
  perView: 5,
  gap: 25,
  peek: {
    before: 0,
    after: 100,
  },
  breakpoints: {
    1500: {
      perView: 4,
      peek: {
        before: 0,
        after: 100,
      }
    },
    1200: {
      perView: 3,
      peek: {
        before: 0,
        after: 150,
      }
    },
    992: {
      perView: 3,
      peek: {
        before: 0,
        after: 150,
      }
    },
    880: {
      perView: 2,
      peek: {
        before: 0,
        after: 150,
      }
    },
    576: {
      perView: 1,
      peek: {
        before: 0,
        after: 70,
      }
    }
  }
})

var forward = document.querySelector('.carrossel .forward')
var backward = document.querySelector('.carrossel .backward')
var qtdElements = document.getElementsByClassName('card-item').length;

// Mover
forward.addEventListener('click', () => glide.go('>') );
backward.addEventListener('click', () => glide.go('<') );

// Iniciar
glide.mount();