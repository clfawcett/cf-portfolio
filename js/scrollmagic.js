$(document).ready(function(){
  //init ScrollMagic
  var controller = new ScrollMagic.Controller();



  //build background color scene
  var bgColorScene = new ScrollMagic.Scene({
    triggerElement: '#headbg p',
    triggerHook: 0.2
  })
  .setClassToggle('#headbg', 'bg-change')
  .addIndicators({
    name: 'bg change',
    colorTrigger: 'black',
    colorStart: 'green',
    colorEnd: 'pink'
  })
  .addTo(controller);

})
