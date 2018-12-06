<<<<<<< HEAD
// BG Animation Setup
// .to('@target', @length, {@object})
var bg_tween = TweenMax.to('#bg-trigger', 1, {
  backgroundColor: '#FFA500',
  ease: Linear.easeNone
});

//init controller
var controller = new ScrollMagic.Controller();

//create Scene
var containerScene1 = new ScrollMagic.Scene ({
  triggerElement: '#herotop', //Starting scene
  duration: 900
})
.setTween(blockTween1);

var containerScene2 = new ScrollMagic.Scene ({
  triggerElement: '#herotop'
})
.setTween(blockTween2);

controller.addScene([
  containerScene1,
  containerScene2,
]);

});
=======
$(document).ready(function(){
  //init ScrollMagic
  var controller = new ScrollMagic.Controller();

  //pin the header
  var pinHeaderScene = new ScrollMagic.Scene({
    triggerElement: '#top-head',
    triggerHook: 0,
    duration: '30%'
  })
  .setPin('#top-head', {pushFollowers: false})
  .addTo(controller);

  //build background color scene
  var bgColorScene = new ScrollMagic.Scene({
    triggerElement: '#headbg p',
    triggerHook: 0.3
  })
  .setClassToggle('#headbg', 'bg-change')
  .addTo(controller);

  //loop through each .section element
  $('.section').each(function() {

      //build a fade-in scene
      var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9
      })
      .setClassToggle(this, 'fade-in')
      .addTo(controller);
  })

  //loop through each .project element
  $('.project').each(function() {

      //build a fade-in scene
      var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9
      })
      .setClassToggle(this, 'fade-in')
      .addTo(controller);
  })

  //loop through each .sectright element
  $('.sectright').each(function() {

      //build a fade-in scene
      var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9
      })
      .setClassToggle(this, 'fade-in')
      .addTo(controller);
  })

  //loop through each .sectleft element
  $('.sectleft').each(function() {

      //build a fade-in scene
      var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9
      })
      .setClassToggle(this, 'fade-in')
      .addTo(controller);
  })

  // build fade in load
  var fadeLoadScene = new ScrollMagic.Scene({
    triggerElement: "#load",
    triggerHook: 0
  })
  .setClassToggle('.load_cont', 'fade-in')
  .addTo(controller);
})
>>>>>>> responsive
