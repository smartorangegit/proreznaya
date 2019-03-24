var slickOptions = {
     slidesToShow: 3,
     infinite: true,
     slidesToScroll: 1,
     easing: 'ease-in-out',
     nextArrow: '<svg class="controls-right" width="60" height="30"><use xlink:href="#right-arrow-slim"></use></svg>',
     prevArrow: '<svg class="controls-left" width="60" height="30"><use xlink:href="#right-arrow-slim"></use></svg>',
     responsive: [
         {
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
             }
         }
     ]
 };

var containerId = '#apptabs-container';
var tabsId = '#apptabs';

$(document).ready(function(){

if($(tabsId + ' li.current a').length > 0){
 loadTab($(tabsId + ' li.current a'));
}
$(tabsId + ' a').click(function(){
 if($(this).parent().hasClass('current')){ return false; }

 $(tabsId + ' li.current').removeClass('current');
 $(this).parent().addClass('current');

 loadTab($(this));
 return false;
});
});

function loadTab(tabObj){
if(!tabObj || !tabObj.length){ return; }
$(containerId).addClass('loading');
$(containerId).fadeOut('fast');

$(containerId).load(tabObj.attr('href'), function(){

 $('.appartaments-page__slider').slick(slickOptions);

 $(containerId).removeClass('loading');
 $(containerId).fadeIn('fast');
});
}

/*      */

var appClose = document.querySelector('.appartaments-page__modal-close')
var appModal = document.querySelector('.appartaments-page__modal')
var appLinks = document.getElementsByClassName('appartaments-page__item-show')



function openAppModal(){
    appModal.classList.add('opened')
}

function closeAppModal(){
    appModal.classList.remove('opened')
    zoomOutImgBox()
}
    appClose.addEventListener('click', closeAppModal )

  $("body").on('click','.appartaments-page__item-show',function(){

      /*Для примера приведены только дата-параметры с изображением и типом квартиры*/

      var appImg = this.parentElement.dataset.img;
      var appType = this.parentElement.dataset.type;

      $('.appartaments-page__modal-box-img').attr('src', '/img/appartaments/full-img/'+appImg+'');
      $('.appartaments-page__modal-name').text(appType);

      openAppModal()


  });
 var modalAppBox = document.querySelector('.appartaments-page__modal-box');
  var imgBox = document.querySelector('.appartaments-page__modal-box-img');
  var zoomIn = document.querySelector('.zoom-in');
  var zoomOut = document.querySelector('.zoom-out');
  console.log(imgBox);

  // var imgBoxItem = imgBox[0];

  imgBox.addEventListener("click", function() {

      if ( modalAppBox.classList.contains('shared')){
          // console.log('есть)';
          zoomOutImgBox()
      }
      else {
          // console.log('нет');
          zoomInImgBox()
      }

  })

  function zoomInImgBox(){
      modalAppBox.classList.add('shared')
      zoomIn.style.display = 'none';
      zoomOut.style.display = 'block';

  }

  function zoomOutImgBox(){
      modalAppBox.classList.remove('shared')
       zoomOut.style.display = 'none';
      zoomIn.style.display = 'block'
  }
