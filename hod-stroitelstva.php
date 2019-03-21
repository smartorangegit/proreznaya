<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>≡ ЖК "На Прорезной"》 Ход строительства</title>
    <link rel="stylesheet" href="/css/pages.css">

    <?php include('includes/header.php')?>
    <div class="hidden__box">
        <svg width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="arrow-hod" viewBox="0 0 57 14">
                    <g><circle cx="49.952488" cy="7" fill="#ffb519" r="7"/><path d="m44.22853 6.6434915h-43.244537l5.872716 7.0581765" fill="none" stroke="#b3b3b3" stroke-width=".922669"/></g>
                </symbol>
            </defs>
        </svg>
    </div>
    <section class="header-pages">
        <div class="wrapper">
            <h1 class="content_name">
                Ход строительства
            </h1>
            <div class="breadcrumbs flex">
                <a href="/" class="breadcrumbs__active">Главная</a>&#8195;&middot;&#8195;
                <a href="" class="breadcrumbs__no-active">Ход строительства</a>
            </div>
        </div>
    </section>

    <section class="pages__inner hod-page">
        <div class="wrapper">
            <ul class="hod-page__tabs flex" id="tabs">
                <li class="hod-page__link current"><a href="./tabs/tab-1.php">Прорезная 1</a></li>
                <li class="hod-page__link "><a href="./tabs/tab-2.php">Прорезная 2</a></li>
                <li class="hod-page__link "><a href="./tabs/tab-3.php">Прорезная 3</a></li>
            </ul>

            <div class="hod-page__tabs-container" id="tabs-container">
                Загрузка...
            </div>


        </div>

    </section>





     <?php include('includes/footer.php')?>
     <link rel="stylesheet" href="/css/fancy.css">
     <script src="/js/jquery.fancybox.min.js"></script>

     <script type="text/javascript">
     var containerId = '#tabs-container';
     var tabsId = '#tabs';

     $(document).ready(function(){
         // Preload tab on page load
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
             $(containerId).removeClass('loading');
             $(containerId).fadeIn('fast');
         });
     }

     </script>
