var glide = new Glide('.glide', {
  type: 'slider',
  perView: 5,
  gap: 25,
  bound: true,
  rewind: false,
  peek: {
    before: 50,
    after: 100,
  },
  breakpoints: {
    1500: {
      perView: 3,
      peek: {
        before: 10,
        after: 100,
      }
    },
    1200: {
      perView: 3,
      peek: {
        before: 15,
        after: 100,
      }
    },
    992: {
      perView: 3,
      peek: {
        before: 15,
        after: 100,
      }
    },
    880: {
      perView: 2,
      peek: {
        before: 15,
        after: 100,
      }
    },
    576: {
      perView: 1,
      peek: {
        before: 15,
        after: 100,
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

// Ajuste na contagem por conta do primeiro elemento
glide.on(['run'], () => {
  if (glide.index >= (qtdElements - 1)) glide.index = glide.index - 1;
})

// Iniciar
glide.mount();