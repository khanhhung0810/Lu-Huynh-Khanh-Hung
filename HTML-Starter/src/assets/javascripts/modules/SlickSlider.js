export default class SlickSlider {

    constructor () {
      this.$this = $('.mod-slick-slider')
    }
    init () {
      if (this.$this.length) {
        this.addSlick()
      }
    }
    addSlick () {
      this.$this.find('.slider').slick({
        'slidesToShow': 3,
        arrows: true,
        rows: 0,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-prev arrows h3 text-primary-100"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slick-next arrows h3 text-primary-100"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>'
      })
    }
}
new SlickSlider().init()
console.log('SlickSlider');

  
  
  
  
  
  