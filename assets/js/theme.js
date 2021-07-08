var glide = new Glide('.glide', {
  type: 'slider',
  perView: 4,
  gap: 25,
  bound: true,
  rewind: false,
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

glide.mount()