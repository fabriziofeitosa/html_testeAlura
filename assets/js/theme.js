var glide = new Glide('.glide', {
  type: 'slider',
  perView: 5,
  gap: 25,
  bound: true,
  rewind: false,
  peek: {
    before: 0,
    after: 100,
  },
  breakpoints: {
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
forward.addEventListener('click', function () { glide.go('>') })
backward.addEventListener('click', function () { glide.go('<') })

// Ignorar primeiro item no mobile
glide.on(['run'], function () {
  if (glide.index >= (qtdElements - 1)) {
    glide.index = glide.index - 1;
  }
})

// Iniciar
glide.mount();