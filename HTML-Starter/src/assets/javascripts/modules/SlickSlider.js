export default class SlickSlider {

    constructor () {
      this.$this = $('.mod-slick-slider')
    }
    init () {
      if (this.$this.length) {
        this.addSlick()
      }
    }
    addSlick (){
      this.$this.find('.sliders').slick({
        'slidesToShow': 3,
        variableWidth:true,
        arrows: true,
        prevArrow: '<button class="slicks-prev arrows h1 text-blue-400"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slicks-next arrows h1 text-blue-400"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',
        dots: true,
        dotsClass:'slicks-dotss',
        responsive: [
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }] 
})
    }
}
new SlickSlider().init()
console.log('SlickSlider');

  
  
  
  
  
  