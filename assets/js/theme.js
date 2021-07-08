var glide = new Glide('.glide', {
  type: 'slider',
  perView: 4,
  gap: 25,
  bound: true,
  rewind: true,
  peek: {
    before: 0,
    after: 100,
  },
  breakpoints: {
    1200: {
      perView: 3
    },
    992: {
      perView: 3
    },
    880: {
      perView: 2
    },
    576: {
      perView: 1
    }
  }
})

// Manipulação
var forward = document.querySelector('.carrossel .forward')
var backward = document.querySelector('.carrossel .backward')
var qtdElements = document.getElementsByClassName('card-item');

forward.addEventListener('click', function () {
  if (glide.index == (qtdElements.length - 2)) glide.go('<<');
  else glide.go('>');
})

backward.addEventListener('click', function () {
  glide.go('<')
})

// Iniciar
glide.mount();