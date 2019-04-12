<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>≡ ЖК "На Прорезной"》 Галерея</title>
    <link rel="stylesheet" href="/css/pages.css">

    <?php include('includes/header.php')?>
    <section class="header-pages">
        <div class="wrapper">
            <h1 class="content_name">
                Галерея
            </h1>
            <div class="breadcrumbs flex">
                <a href="/" class="breadcrumbs__active">Главная</a>&#8195;&middot;&#8195;
                <a href="" class="breadcrumbs__no-active">Галерея</a>
            </div>
        </div>
    </section>

    <section class="pages__inner gallery-page">
        <article class='gallery'>
            <a class='gallery-link' href='/img/gallery/gal-big-1.jpg'>
                <figure class='gallery-image'>
                    <img height='1200' src='/img/gallery/gal-1.jpg' width='1600'>
                    <figcaption>Увеличить</figcaption>
                </figure>
            </a>
            <a class='gallery-link' href='/img/gallery/gal-big-2.jpg'>
                <figure class='gallery-image'>
                    <img height='1600' src='/img/gallery/gal-2.jpg' width='1200'>
                    <figcaption>Увеличить</figcaption>
                </figure>
            </a>
            <a class='gallery-link' href='/img/gallery/gal-big-3.jpg'>
                <figure class='gallery-image'>
                    <img height='1200' src='/img/gallery/gal-3.jpg' width='1400'>
                    <figcaption>Увеличить</figcaption>
                </figure>
            </a>
            <a class='gallery-link' href='/img/gallery/gal-big-4.jpg'>
                <figure class='gallery-image'>
                    <img height='1200' src='/img/gallery/gal-4.jpg' width='1200'>
                    <figcaption>Увеличить</figcaption>
                </figure>
            </a>
            <a class='gallery-link' href='/img/gallery/gal-big-5.jpg'>
                <figure class='gallery-image'>
                    <img height='1600' src='/img/gallery/gal-5.jpg' width='1600'>
                    <figcaption>Увеличить</figcaption>
                </figure>
            </a>
            <a class='gallery-link' href='/img/gallery/gal-big-6.jpg'>
                <figure class='gallery-image'>
                    <img height='1400' src='/img/gallery/gal-6.jpg' width='1000'>
                    <figcaption>Увеличить</figcaption>
                </figure>
            </a>

        </article>
    </section>





     <?php include('includes/footer.php')?>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
     <script type="text/javascript">
     (function () {

         $('.gallery-link').magnificPopup({
             type: 'image',
             closeOnContentClick: true,
             closeBtnInside: false,
             mainClass: 'mfp-with-zoom mfp-img-mobile',
             image: {
                 verticalFit: true,
                 titleSrc: function (item) {
                     return item.el.find('figcaption').text() || item.el.attr('title');
                 } },

                 zoom: {
                     enabled: true },
                     // duration: 300
                     gallery: {
                         enabled: true,
                         navigateByImgClick: false,
                         tCounter: '' },

                         disableOn: function () {
                             if ($(window).width() < 300) {
                                 return false;
                             }
                             return true;
                         } });


                     }).call(this);

     </script>
