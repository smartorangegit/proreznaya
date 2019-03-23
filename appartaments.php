<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>≡ ЖК "На Прорезной"》 Выбор квартиры</title>
    <link rel="stylesheet" href="/css/pages.css">

    <?php include('includes/header.php')?>
    <section class="header-pages">
        <div class="wrapper">
            <h1 class="content_name">
                Выбор квартиры
            </h1>
            <div class="breadcrumbs flex">
                <a href="/" class="breadcrumbs__active">Главная</a>&#8195;&middot;&#8195;
                <a href="" class="breadcrumbs__no-active">Выбор квартиры</a>
            </div>
        </div>
    </section>

    <section class="pages__inner appartaments-page">
        <div class="wrapper">
            <ul class="appartaments-page__tabs flex" id="apptabs">
                <li class="appartaments-page__link current"><a href="./app-tabs/app-1.php">1-комнатные</a></li>
                <li class="appartaments-page__link "><a href="./app-tabs/app-2.php">2-комнатные</a></li>
                <li class="appartaments-page__link "><a href="./app-tabs/app-3.php">3-комнатные</a></li>
                <li class="appartaments-page__link "><a href="./app-tabs/app-4.php">3-комнатные</a></li>

            </ul>

            <div class="hod-page__tabs-container" id="apptabs-container">
                Загрузка...
            </div>


        </div>

    </section>





     <?php include('includes/footer.php')?>
     <script type="text/javascript">

     var containerId = '#apptabs-container';
     var tabsId = '#apptabs';

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
