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
