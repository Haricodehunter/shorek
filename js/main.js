$(document).ready(function() {
var s = skrollr.init({
smoothScrolling: true,
	render: function(data) {
		//Log Skrollr position
        
		$('#info').text(data.curTop);


	}

});
 skrollr.menu.init(s);


   
        //initanim();
    

	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}


 
$(".toggle-menu").click(function(){
    $('.bulp').toggle();
});

$('.fixedmenu .navigation').click(function() {
    $(this).toggleClass('active');
});

$('.fixedmenu .sortbutton').click(function() {
    $(this).parent().toggleClass('open');
});

 //circle menu
 var isOn = false;

 $('#container-menu').click(function() {
   $(this).toggleClass('active');
 });


  //Tooltip, activated by hover event
  $("body").tooltip({   
    selector: "[data-toggle='tooltip']",
    container: "body"
  })
    //Popover, activated by clicking
    .popover({
    selector: "[data-toggle='popover']",
    container: "body",
    html: true
  });
//  function setPosition() {
//    isOn = true;
//    var links = $('.shorek-menu li');
//    var radius = (links.length * 40) / 2;
//    var degree = Math.PI / links.length, angle = degree / 2;
  
//    links.each(function() {
//      var x = Math.round(radius * Math.cos(angle));
//      var y = Math.round(radius * Math.sin(angle));
    
//      $(this).css({
//        left: x + 'px',
//       top: y + 'px'
//      });
    
//      if(window.console) {
//        console.log(x, y);
//      }
    
//      angle += degree;
//    });
//  }

  function reset() {
//    $('.shorek-menu li').css({
//      left: 0 + 'px',
//      top: 0 + 'px'
 
//    });
  
   isOn = false;
 }

});



    var tl;

function getAnimation() {
  var element = $('.bulp1');
  //bezier magic provided by GSAP BezierPlugin (included with TweenMax)
  //https://api.greensock.com/js/com/greensock/plugins/BezierPlugin.html
  
 //create a semi-random tween 
  var bezTween = new TweenMax(element, 6, {
    bezier:{
      type:"soft", 
      //values:[{x:-200, y:300}, {x:300, y:30}, {x:500 + Math.random() *100, y:320*Math.random() + 50}, {x:650, y:320*Math.random() + 50}, {x:900, y:50}, {x:1100, y:50},  {x:1200, y:50}, {x:1400, y:50},  {x:1600, y:50}, {x:1900, y:50}],
      values:[{x:-200, y:0}, {x:300, y:30}, {x:500, y:30}, {x:650, y: 50}, {x:900, y:80}, {x:1100, y:80},  {x:1200, y:80}, {x:1400, y:80},  {x:1600, y:80}, {x:1900, y:80}],
      autoRotate:false
    },
    ease:Linear.easeNone});
  return bezTween;
}

//create a bunch of Bezier tweens and add them to a timeline

function getAnimation2() {
  var element = $('.bulp2');
  //bezier magic provided by GSAP BezierPlugin (included with TweenMax)
  //https://api.greensock.com/js/com/greensock/plugins/BezierPlugin.html
  
 //create a semi-random tween 
  var bezTween = new TweenMax(element, 6, {
    bezier:{
      type:"soft", 
      //values:[{x:-200, y:300}, {x:300, y:30}, {x:500 + Math.random() *100, y:320*Math.random() + 50}, {x:650, y:320*Math.random() + 50}, {x:900, y:50}, {x:1100, y:50},  {x:1200, y:50}, {x:1400, y:50},  {x:1600, y:50}, {x:1900, y:50}],
      values:[{x:-430, y:0}, {x:0, y:50}, {x:100, y:70}, {x:500, y:70}, {x:650, y: 80}, {x:900, y:80}, {x:1100, y:90},  {x:1200, y:90}, {x:1400, y:90},  {x:1600, y:90}, {x:1900, y:90}],
      autoRotate:false
    },
    ease:Linear.easeNone});
  return bezTween;
}



function getAnimation3() {
  var element = $('.bulp3');
  //bezier magic provided by GSAP BezierPlugin (included with TweenMax)
  //https://api.greensock.com/js/com/greensock/plugins/BezierPlugin.html
  
 //create a semi-random tween 
  var bezTween = new TweenMax(element, 6, {
    bezier:{
      type:"soft", 
      //values:[{x:-200, y:300}, {x:300, y:30}, {x:500 + Math.random() *100, y:320*Math.random() + 50}, {x:650, y:320*Math.random() + 50}, {x:900, y:50}, {x:1100, y:50},  {x:1200, y:50}, {x:1400, y:50},  {x:1600, y:50}, {x:1900, y:50}],
      values:[{x:-400, y:60}, {x:300, y:60}, {x:500, y:50}, {x:650, y: 50}, {x:900, y:50}, {x:1100, y:50},  {x:1200, y:50}, {x:1400, y:50},  {x:1600, y:50}, {x:1900, y:50}],
      autoRotate:false
    },
    ease:Linear.easeNone});
  return bezTween;
}

function getAnimation4() {
  var element = $('.bulp4');
  //bezier magic provided by GSAP BezierPlugin (included with TweenMax)
  //https://api.greensock.com/js/com/greensock/plugins/BezierPlugin.html
  
 //create a semi-random tween 
  var bezTween = new TweenMax(element, 6, {
    bezier:{
      type:"soft", 
      //values:[{x:-200, y:300}, {x:300, y:30}, {x:500 + Math.random() *100, y:320*Math.random() + 50}, {x:650, y:320*Math.random() + 50}, {x:900, y:50}, {x:1100, y:50},  {x:1200, y:50}, {x:1400, y:50},  {x:1600, y:50}, {x:1900, y:50}],
      values:[{x:-300, y:30},{x:100, y:40},{x:200, y:60}, {x:300, y:80},{x:400, y:100}, {x:500, y:120}, {x:650, y: 140}, {x:750, y: 160}, {x:850, y: 180}, {x:900, y:200}, {x:1100, y:220},  {x:1200, y:240}, {x:1400, y:260},  {x:1600, y:280}, {x:1900, y:300}],
      autoRotate:false
    },
    ease:Linear.easeNone});
  return bezTween;
}
function getAnimationSub() {
  var element = $('.subscribeinner');
  //bezier magic provided by GSAP BezierPlugin (included with TweenMax)
  //https://api.greensock.com/js/com/greensock/plugins/BezierPlugin.html
  
 //create a semi-random tween 
  var bezTween = new TweenMax(element, 6, {
    bezier:{
      type:"soft", 
      //values:[{x:-200, y:300}, {x:300, y:30}, {x:500 + Math.random() *100, y:320*Math.random() + 50}, {x:650, y:320*Math.random() + 50}, {x:900, y:50}, {x:1100, y:50},  {x:1200, y:50}, {x:1400, y:50},  {x:1600, y:50}, {x:1900, y:50}],
      values:[{x:0, y:0},{x:0, y:-10},{x:0, y:-30},{x:0, y:-50},{x:0, y:-60},{x:0, y:-70},{x:0, y:-80},{x:0, y:-90}],
      autoRotate:false
    },
    ease:Linear.easeNone});
  return bezTween;
}
//create a bunch of Bezier tweens and add them to a timeline
function buildTimeline() {
  tl = new TimelineMax({repeat:36,  delay:1});
  for (i = 0 ; i< 20; i++){
    //start creature animation every 0.17 seconds
    tl.add(getAnimation(), i * 0.17);
    tl.add(getAnimation2(), i * 0.24);
    tl.add(getAnimation3(), i * 0.30);
    tl.add(getAnimation4(), i * 0.35);
    tl.add(getAnimationSub(), i * 0.10);
  }
}


buildTimeline();
var blinkText = $(".bulptoltip");



function blink() {
	TweenMax.staggerTo(blinkText, 1, {
		autoAlpha: 0,
		delay: 1,
		onComplete: function() {
			TweenMax.to(blinkText, 1, {
				autoAlpha: 1,
				delay: 1,
				onComplete: blink
			});
		}
	},1);
}
blink();



//Shorek




    //var $stage;

    /* Colors, prefix finder for transforms 
    var Colors = {
        white: '#fefefe',
        blue: '#40cacc'
    }

    var prefix = (function () {
        var styles = window.getComputedStyle(document.documentElement, ''),
            pre = (Array.prototype.slice
                .call(styles)
                .join('')
                .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
                )[1],
            dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
        return {
            dom: dom,
            lowercase: pre,
            css: '-' + pre + '-',
            js: pre[0].toUpperCase() + pre.substr(1)
        };
    })();

    var transform = prefix.css+'transform';

    function createDiv(className) {
        var div = document.createElement('div');
        if(className) div.className = className;
        var $div = $(div);
        return $div;
    }

    /* Store transform values for CSS manipulation 
    $.fn.extend({
        transform: function(props) {
            var _this = this;
            for(var i in props) {
                _this[i] = props[i];
            }
            return transformString();

            function transformString() {
                var string = '';
                if(_this.x) string += 'translateX('+_this.x+'px)';
                if(_this.y) string += 'translateY('+_this.y+'px)';
                if(_this.skewX) string += 'skewX('+_this.skewX+'deg)';
                if(_this.skewY) string += 'skewY('+_this.skewY+'deg)';
                if(_this.rotation) string += 'rotate('+_this.rotation+'deg)';
                if(_this.scale) string += 'scale('+_this.scale+','+_this.scale+')';
                return string;
            };
        }
    });

    /* Animation Componenents

    function VelocityScene() {
        var _this = this;
        var $l1outer, $l1inner, $l2, $text, $skewbox;
        var letters = [], text = 'SHOREK';

        (function() {
           initElements();
        })();

        function initElements() {
            $skewbox = createDiv('box');
            $stage.append($skewbox);
            $skewbox.hide();

            $l1outer = createDiv('line');
            $l1inner = createDiv('line');
           
            $stage.append($l1outer);
            $l1outer.append($l1inner);

            $l2 = createDiv('line');
            
            $stage.append($l2);

            $text = createDiv('text');
            
            for(var i in text) {
                var $l = createDiv();
                $l.html(text[i]);
                $l.css({position: 'relative', float: 'left', display: 'inline-block', width: 'auto', marginRight: 20,
                    transform: $l.transform({y: -160})});
                $text.append($l);
                letters.push($l);
            }
            $stage.append($text);

        }

        this.beginAnimation = function() {
            $skewbox.css({width: 500, height: 110, background: Colors.blue, left: '50%', marginLeft: -250, top: '50%',
                transform: $skewbox.transform({skewY: -9}), marginTop: -60 });
            $l1outer.css({overflow: 'hidden', width: 500, height: 12, left: '50%', marginLeft: -250, top: '50%',
                          marginTop: -5, transform: $l1outer.transform({x: 250, y: 0}) });
            $l1inner.css({width: 500, height: 10, top: 1, transform: $l1inner.transform({x: -500, y: 0}), background: Colors.white});
            $l2.css({width: 500, height: 10, left: '50%', marginLeft: -250, top: '50%', marginTop: -4,
                background: Colors.white, display: 'none', transform: $l2.transform({skewY: -9})});
            $text.css({width: 500, height: 10, fontSize: 100, color: Colors.white, left: '50%', marginLeft: -236,
                top: '50%', marginTop: -75, transform: $text.transform({skewY: -9, y: 70}), overflow: 'hidden'});
            $l1outer.show();
            $l1inner.show();
            $text.show();
          
            $l1inner.velocity({translateX: [0, -500], translateY: [0,0]}, 300, 'easeInOutCubic');
            $l1outer.velocity({translateX: [0, 250], translateY: [0,0]}, 300, 'easeInOutCubic');
            $l1outer.velocity({skewY: -9}, {duration: 400, easing: 'easeInOutQuart', complete: function() {
                $l2.show();
                $l1outer.velocity({translateY: -70}, 400, 'easeOutQuart');
                $l2.velocity({translateY: 70, skewY: [-9,-9]}, 400, 'easeOutQuart');
                $text.velocity({height: 160, skewY: [-9,-9], translateY: [0,70]}, 400, 'easeOutQuart');
                for(var i in letters) {
                    letters[i].velocity({translateY: [0, -160]}, 250, 'easeOutCubic', 100 + i * 50);
                }
            }});
        }

        this.close = function(callback) {
            $text.velocity({height: 10, translateY: [69, 0]}, {duration: 300, easing: 'easeOutCubic'});
            for(var i in letters) {
                letters[i].velocity({translateY: [-150, 0]}, 800, 'easeOutCubic');
            }
            $l1outer.velocity({translateY: [0, -70]}, {duration: 300, easing: 'easeOutCubic'});
            $l2.velocity({translateY: [0, 70], skewY: [-9,-9]}, {duration: 300, easing: 'easeOutCubic',
                complete: function() {
                    $l1inner.css({height: 110, transform: $l1inner.transform({y: -100, x: 0})});
                    $l1outer.css({height: 110});
                    $l2.hide();
                    $l1outer.velocity({translateY: [-55, 0]}, {duration: 200, easing: 'easeInCubic'});
                    $l1inner.velocity({translateY: [0, -100]}, {duration: 200, easing: 'easeInCubic', complete: function() {
                        $skewbox.show();
                        $skewbox.velocity({skewY: [0, -9]}, 200, 'easeInOutSine');
                        $l1outer.velocity({skewY: [0, -9]}, {duration: 200, easing: 'easeInOutSine', delay: 100, complete: function() {
                            $skewbox.hide();
                            $l1outer.velocity({translateX: -80}, {duration: 100, easing: 'easeOutCubic'});
                            $l1inner.velocity({translateX: 160}, {duration: 100, easing: 'easeOutCubic', complete: function() {
                               callback();
                               $l1outer.hide();
                               $text.hide();
                            }});
                        }});

                    }});
            }});
        }
    }

    function VelocityMask() {
        var  $text;
        var letters = [], text = 'VELOCITY';
        (function() {
            initElements();
        })();

        function initElements() {
            $text = createDiv('text');
            $text.css({width: 500, height: 160, fontSize: 100, color: Colors.blue, left: '50%', marginLeft: -236,
                top: '50%', marginTop: -75, transform: $text.transform({skewY: -9}), overflow: 'hidden'});
            for(var i in text) {
                var $l = createDiv();
                var $linner = createDiv();
                $l.css({position: 'relative', float: 'left', display: 'inline-block', width: 'auto', overflow: 'hidden', transform: $l.transform({y: -140})});
                $linner.css({position: 'relative', float: 'left', display: 'inline-block', width: 'auto', marginRight: 20, transform: $linner.transform({y: 140})});
                $linner.html(text[i]);
                $l.append($linner);
                $text.append($l);
                letters.push($l);
            }
            $stage.append($text);
        }

        this.animateIn = function() {
            $text.show();
            for(var i in letters) {
                letters[i].velocity({translateY: [0, -140]}, {duration: 200+i*25, easing: 'easeOutCubic', delay: i*50});
                letters[i].find('div').velocity({translateY: [0, 140]}, {duration: 200+i*25, easing: 'easeOutCubic', delay: i*50});
            }

            setTimeout(function() {
                for(var j in letters) {
                    letters[j].velocity({translateY: 140}, {duration: 250, easing: 'easeInCubic', delay: j*40});
                    letters[j].find('div').velocity({translateY: -140}, {duration: 250, easing: 'easeInCubic', delay: j*40});
                }
            }, 700);
        }
        
        this.hide = function() {
            $text.hide();
        }
    }

    function SplitLines() {
        var $container;
        var _lines = [];

        (function() {
            initElements();
        })();

        function initElements() {
            $container = createDiv('container');
            $container.css({width: 340, height: 110, top: '50%', left: '50%', marginLeft: -170,
                marginTop: -60});
            $stage.append($container);
            $container.hide();

            for(var i = 0; i < 68; i++) {
                var l = {
                    outer: createDiv(),
                    inner: createDiv()
                }
                l.outer.css({width: 5, height: 110, left: i*5});
                l.inner.css({background: Colors.white, width: 5, height: 110});
                $container.append(l.outer);
                l.outer.append(l.inner);
                _lines.push(l);
            }
        }

        this.beginAnimation = function(callback) {
            $container.show();

            setTimeout(function() {
                var midway = _lines.length/2;
                for(var i in _lines) {
                    _lines[i].inner.velocity({translateY: -30+(Math.random()*60)}, {duration: 160, easing: 'easeOutQuart'});
                    _lines[i].inner.velocity({translateY: -30+(Math.random()*60)}, {duration: 160, easing: 'easeInOutQuart'});
                    _lines[i].inner.velocity({translateY: (i%2 == 0) ? -200 : 200}, {duration: 400, easing: 'easeInOutQuart'});
                    if(i < midway) {
                        _lines[i].inner.velocity({translateX: '-='+(midway-i)*2*(midway-i)/10+'px'}, {duration: 300, easing: 'easeInOutCubic'});
                    } else {
                        _lines[i].inner.velocity({translateX: '+='+(i-midway)*2*(i-midway)/10+'px'}, {duration: 300, easing: 'easeInOutCubic'});
                    }

                    _lines[i].inner.velocity({translateX: 0}, {duration: 220, easing: 'easeInCubic'});
                    _lines[i].inner.velocity({rotateZ: '360deg', translateY: 0, translateX: -i*5, height: 5}, {duration: 600, easing: 'easeInOutCubic', delay: i*20});
                }

            }, 30);


            $container.velocity({translateX: [160, 0], translateY: [50, 0]}, {duration: 1800, easing: 'easeInOutCubic', delay: 1400, complete: function() {
                callback();
                $container.hide();
            }});
        }
        
        this.reset = function() {
          $container.css({width: 340, height: 110, top: '50%', left: '50%', marginLeft: -170,
                marginTop: -60, transform: $container.transform({x: 0, y: 0})});
          for(var i = 0; i < 68; i++) {
            _lines[i].outer.remove();
            var l = {
                    outer: createDiv(),
                    inner: createDiv()
                }
                l.outer.css({width: 5, height: 110, left: i*5});
                l.inner.css({background: Colors.white, width: 5, height: 110});
                $container.append(l.outer);
                l.outer.append(l.inner);
                _lines[i] = l;
          }
        }
    }

    function Explosion() {
        var $container;
        var _squares = [];

        (function() {
            initElements();
        })();

        function initElements() {
            $container = createDiv('container');
            $container.css({width: 10, height: 10, top: '50%', left: '50%', marginLeft: -12,
                marginTop: -12});
            $stage.append($container);
            $container.hide();

            for(var i = 0; i < 42; i++) {
                var s = {
                    el: createDiv(),
                    scale: 0.3 + Math.random()*0.7,
                    x: -200 + Math.random()*400,
                    y: -200 + Math.random()*400
                }
                s.el.css({width: 15, height: 15, backgroundColor: (-1+Math.random()*2 > 0) ? Colors.white : Colors.blue,
                    opacity: 0});
                $container.append(s.el);
                _squares.push(s);
            }
        }

        this.beginAnimation = function(callback) {
            $container.show();

            for(var i in _squares) {
                _squares[i].el.show();
                _squares[i].el.velocity({translateY: [_squares[i].y, 0], translateX: [_squares[i].x, 0], opacity: 1, scaleX: _squares[i].scale, scaleY: _squares[i].scale }, {duration: 500, easing: 'easeOutCubic'});
                _squares[i].el.velocity({translateY: $(window).height()/2+50}, {duration: 500, easing: 'easeInCubic', delay: i*30});
            }
          
          setTimeout(function() {
            callback();
            for(var i in _squares) {
              _squares[i].el.hide();
            }
          }, 2400);
        }
    }

    function initanim() {
        $stage = createDiv('stage');
        $('#section1').append($stage);
        $stage.css({width: '100%', height: '100%'});
      
        $restart = createDiv('restart');
        $stage.append($restart);
        $restart.css({width: 100, height: 40, top: '50%', left: '50%', marginLeft: -50, marginTop: -20, letterSpacing: '1px', 
                      background: Colors.white, color: Colors.blue, fontSize: 22, textAlign: 'center', lineHeight: '40px',
                      cursor: 'pointer', opacity: 0});
        $restart.html('RESTART');
        $restart.on('click', restart);
        $restart.hide();

        var velocityScene = new VelocityScene();
        var velocityMask = new VelocityMask();
        var splitLines = new SplitLines();
        var explosion = new Explosion();
        
        animate();
      
        function animate() {
          setTimeout(velocityScene.beginAnimation, 500);
          setTimeout(velocityMask.animateIn, 1500);
          setTimeout(function() {
              velocityScene.close(function() {
                  splitLines.beginAnimation(function() {
                    explosion.beginAnimation(showButton);
                  });
                  velocityMask.hide();
              });
          }, 3500);
        }
        

        function showButton() {
          $restart.css({opacity: 0, transform: $restart.transform({scale: 1})});
          $restart.show();
          $restart.velocity({opacity: 1}, {duration: 1000});
        }
      
        function restart() {
          splitLines.reset();
          $restart.velocity({scaleX: [0, 1], scaleY: [0, 1]}, {duration: 100, complete: function() {
            animate();
            $restart.hide();
          }})
          
        }
    }

    $(document).on('ready', function() {
        init();
    });
*/

