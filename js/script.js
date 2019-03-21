function scrollIcon() {
    let iconPath = document.querySelector('.line_scroll');
    if (iconPath) {
        iconPath.classList.add('animated')
    }
  // console.log(iconPath[0]);
}
setTimeout(scrollIcon, 2600);

(function(){
    let mainName = document.querySelector('h1.content_name')
    if (mainName){
        console.log(mainName);
    }

})();

// Загрузка видео

(function() {
    var videoContainer1 = document.querySelector('.bg-video-1');
    var videoContainer2 = document.querySelector('.bg-video-2');
    var content1 = '<video width="100%" height="auto" preload="auto" autoplay="autoplay" loop="loop" src="/video/Pine.mp4" muted playsinline></video>';
    var content2 = '<video width="100%" height="auto" preload="auto" autoplay="autoplay" loop="loop" src="/video/drops.mp4" muted playsinline></video>';
    if (videoContainer1 || videoContainer2){
        if(window.innerWidth <=768) {
            // content1 = '<video width="100%" height="auto" preload="auto" autoplay="autoplay" loop="loop" src="/video/Pine_mob.mp4" muted></video>';
            content2 = '<video width="100%" height="auto" preload="auto" autoplay="autoplay" loop="loop" src="/video/drops_mob.mp4" muted playsinline></video>';

        }

        videoContainer1.innerHTML = content1;
        videoContainer2.innerHTML = content2;
    }
})();

//easing
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(1-Math.pow(2,-10*e/a))+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(2-Math.pow(2,-10*--e))+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*-.5+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*((1+(r*=1.525))*e-r))+t:u/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:e<2/2.75?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return e<a/2?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});

/*! WOW - v0.1.9 - 2014-05-10
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function(){var a,b,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),b=this.WeakMap||(b=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),this.WOW=function(){function d(a){null==a&&(a={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new b}return d.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},d.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},d.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},d.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},d.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},d.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},d.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),d.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},d.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},d.prototype.vendors=["moz","webkit"],d.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},d.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},d.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},d.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},d.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},d.prototype.scrollHandler=function(){return this.scrolled=!0},d.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},d.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},d.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},d.prototype.util=function(){return this._util||(this._util=new a)},d.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},d}()}).call(this);

var wow = new WOW({
  offset: 120,

});
wow.init();

/*текста анимация */

$(document).ready(function(){
 $.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
   $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 120 * i);
   });
  });
 };
 $('#main_name').css('visibility','visible');
 $('#main_name').animate_Text();

 $('#main_name--1').addClass('main-animated');
 // console.log($('#main_name--1'));

});

/*ANIMATE link FOR footer*/
(function lettersAnime(){

    let parentsAnim = document.getElementsByTagName('dd');
    let arrAnim = Array.prototype.slice.call( parentsAnim, 0 );
    let newArray = [];

    arrAnim.map(function(item){
        var parentItem = item.childNodes[0];
        if (parentItem.firstChild != null ){
            newArray.push(parentItem)
        }
        return newArray;
    });

    function mouseoverHandler(evt) {
        var text = this.text;
        this.innerHTML = text.replace(/./g,'<span class="aspan">$&</span>');
    };

    newArray.forEach(function(itemText){
        itemText.onmouseover = mouseoverHandler;
    });

})();


/*paralaxxxx*/
/*section two*/
let part1 = document.getElementById('js-part-0');
let part2 = document.getElementById('js-part-1');
let part3 = document.getElementById('js-part-2');
let part4 = document.getElementById('js-part-3');
/*section four*/
var par1 = document.getElementById('js-par-0');
let par2 = document.getElementById('js-par-1');
let par3 = document.getElementById('js-par-2');
let par4 = document.getElementById('js-par-3');

if (part1) {
    window.addEventListener("DOMContentLoaded", scrollLoop, false);

}


function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.44 + 1200, par1);
    setTranslate(0, yScrollPosition * -0.3 + 800, par2);
    setTranslate(0, yScrollPosition * -0.3 + 800, par3);
    setTranslate(0, yScrollPosition * -0.2 + 600, par4);

    setTranslate(0, yScrollPosition * -0.1 + 00, part1);
    setTranslate(0, yScrollPosition * -0.3 + 200, part2);
    setTranslate(0, yScrollPosition * -0.5 + 300, part3);
    setTranslate(0, yScrollPosition * -0.2 + 400, part4);

    requestAnimationFrame(scrollLoop);
}

/*анимация прогресбара*/

// $(function($){
//
//
// 	var $indicatorparts = $(document.body).append('<div class="scrollindicator"><div class="scrollprogress"></div></div>')
// 	var $indicatorMain = $indicatorparts.find('div.scrollindicator');
// 	var $scrollProgress = $indicatorparts.find('div.scrollprogress');
//   var numberInd = [];
//   var section = document.getElementsByTagName('section');
//     for (let i=0; i < section.length; i++) {
//       let otrez = 100/section.length;
//       // console.log(otrez);
//       let left = otrez*(i+1) - otrez/2  + '%';
//       numberInd.push('<div class="numInd" style="left:' + left + ' ">' + '0'+ (i+1) + '</div>');
//     }
//     for (let j=0; j<=numberInd.length; j++){
//       $indicatorMain.append(numberInd[j]);
//       }
//
//
// 	var indicatorHeight = $indicatorMain.outerHeight();
// 	var transformsupport = $scrollProgress.css('transform');
// 	transformsupport = (transformsupport == "none" || transformsupport =="")? false: true;
//
// 	function syncscrollprogress(){
// 	    var winheight = $(window).height()
// 	    var docheight = $(document).height()
// 	    var scrollTop = $(window).scrollTop()
// 	    var trackLength = docheight - winheight
// 	    var pctScrolled = Math.floor(scrollTop/trackLength * 100) ;
// 			$scrollProgress.css('transform', 'translate3d(' + (-100 + pctScrolled) + '%,0,0)')
// 	}
//
// 	if (transformsupport){
// 		$indicatorMain.css('visibility', 'visible')
//
// 		$indicatorMain.on('click', function(e){
// 			var trackLength = $(document).height() - $(window).height()
// 			var scrollamt = e.clientX/($(window).width()-32) * trackLength
// 			$('html,body').animate({scrollTop: scrollamt}, 'fast')
// 		})
//
// 	$(window).on("scroll load", function(){
// 			requestAnimationFrame(syncscrollprogress)
// 		})
// 	}
// });

/**/

/*анимация при скролле*/
var h = $(window).height();

$(window).bind('scroll load' , function(){
  // console.log(window.scrollY)

  windowTop = $(window).scrollTop() - 150;

      $(".big_letter").each(function(){
          elTop = $(this).offset().top;
            if ( (elTop - h) <= windowTop) {
                $(this).addClass("faded");
            }
            });
      $(".animate-tree").each(function(){
          elTop = $(this).offset().top;
            if ( (elTop - h) <= windowTop) {
              $(this).addClass("pushed");
          }
      });
      $(".img-wrap").each(function(){
          elTop = $(this).offset().top;
            if ( (elTop - h) <= windowTop) {
              $(this).addClass("img-animated");
              }
              else{
                // $(this).removeClass("img-animated");
              }
      });
      $(".footer_menu").each(function(){
          elTop = $(this).offset().top;
            if ( (elTop - h) <= windowTop) {
              $(this).addClass("animated");
              }
              else{
                $(this).removeClass("animated");
              }
      });
      $(".bg-video").each(function(){
        var video = $(this).find('video');
        // console.log(video);
          elTop = $(this).offset().top;
          var elBottom = elTop + video.outerHeight();
            if ( (elTop - h) <= windowTop) {
                video[0].play();
              }
              else{
                video[0].pause();
              }
      });
  });

/*определение направления прокрутки*/


// складываем меню при прокрутке вверх-вниз
let header = document.getElementById('header');
function transformHeaderUp(){
    header.classList.add('zipped');
}
function transformHeaderDown(){
    header.classList.remove('zipped');
}


var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop && window.scrollY > 30){
        transformHeaderUp()
        // console.log('down');
    } if (st <= lastScrollTop ||  window.scrollY < 30){
        transformHeaderDown()
        // console.log('up');
    }
    lastScrollTop = st;
});

/*menu transition*/
jQuery(document).ready(function($){
	//cache some jQuery objects
	var modalTrigger = $('.cd-modal-trigger'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');

	var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger.on('click', function(event){
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function(){
			modalWindow.addClass('visible');
		}, delay);
	});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}
});

/*accordeon for documents*/
//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);

  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');

  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();
