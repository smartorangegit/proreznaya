<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>≡ ЖК "На Прорезной"》 Видео</title>
    <link rel="stylesheet" href="/css/pages.css">

    <?php include('includes/header.php')?>
    <div class="hidden__box">
        <svg width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="video" viewBox="0 0 50.5 50.5">
                    <g><path d="m25.25 0c-4.217 0-8.391 1.061-12.073 3.069-.485.265-.664.872-.399 1.357.265.484.87.664 1.357.399 3.389-1.848 7.232-2.825 11.115-2.825 12.82 0 23.25 10.43 23.25 23.25s-10.43 23.25-23.25 23.25-23.25-10.43-23.25-23.25c0-6.261 2.455-12.135 6.913-16.539.393-.388.397-1.021.009-1.414-.389-.393-1.022-.396-1.414-.008-4.841 4.782-7.508 11.161-7.508 17.961 0 13.923 11.327 25.25 25.25 25.25s25.25-11.327 25.25-25.25-11.327-25.25-25.25-25.25z"/><path d="m16.446 39.671c.195.277.504.425.819.425.199 0 .399-.059.574-.182l19.682-13.846c.267-.188.425-.492.425-.818s-.158-.63-.425-.818l-19.682-13.846c-.305-.215-.705-.242-1.036-.07s-.539.514-.539.888v18.929c0 .552.448 1 1 1s1-.448 1-1v-17.003l16.944 11.92-18.52 13.028c-.451.318-.56.942-.242 1.393z"/></g>
                </symbol>
            </defs>
        </svg>
    </div>
    <section class="header-pages">
        <div class="wrapper">
            <h1 class="content_name">
                Видео
            </h1>
            <div class="breadcrumbs flex">
                <a href="/" class="breadcrumbs__active">Главная</a>&#8195;&middot;&#8195;
                <a href="" class="breadcrumbs__no-active">Видео</a>
            </div>
        </div>
    </section>

    <section class="pages__inner video-page">
        <div class="wrapper">
            <article class="video-page__item flex" >
                <div class="video-page__item-img" data-source="/video/Pine.mp4">
                    <img src="/img/video/poster-1.jpg" alt="">
                    <svg class="svg_video" width="60" height="60" fill="#ffffff"><use xlink:href="#video"></use></svg>
                </div>
                <div class="video-page__item-descr">
                    <div class="pages-subname">
                        Рассрочка от застройщика до 36 месяцев
                    </div>
                    <div class="content_text">
                        Жизнь в загородном комплексе отличает совершенно иной уровень комфорта, который давно оценили европейские жители.
                    </div>
                </div>
            </article>
            <article class="video-page__item flex">
                <div class="video-page__item-img" data-source="/video/drops.mp4">
                    <img src="/img/video/poster-2.jpg" alt="">
                    <svg class="svg_video" width="60" height="60" fill="#ffffff"><use xlink:href="#video"></use></svg>
                </div>
                <div class="video-page__item-descr">
                    <div class="pages-subname">
                        Легкий старт без удорожания
                    </div>
                    <div class="content_text">
                        Жизнь в загородном комплексе отличает совершенно иной уровень комфорта, который давно оценили европейские жители.
                    </div>
                </div>
            </article>
            <article class="video-page__item flex">
                <div class="video-page__item-img" data-source="/video/Pine.mp4">
                    <img src="/img/video/poster-1.jpg" alt="">
                    <svg class="svg_video" width="60" height="60" fill="#ffffff"><use xlink:href="#video"></use></svg>
                </div>
                <div class="video-page__item-descr">
                    <div class="pages-subname">
                        Легкий старт без удорожания
                    </div>
                    <div class="content_text">
                        Жизнь в загородном комплексе отличает совершенно иной уровень комфорта, который давно оценили европейские жители.
                    </div>
                </div>
            </article>
            <article class="video-page__item flex">
                <div class="video-page__item-img" data-source="/video/drops.mp4">
                    <img src="/img/video/poster-2.jpg" alt="">
                    <svg class="svg_video" width="60" height="60" fill="#ffffff"><use xlink:href="#video"></use></svg>
                </div>
                <div class="video-page__item-descr">
                    <div class="pages-subname">
                        Легкий старт без удорожания
                    </div>
                    <div class="content_text">
                        Жизнь в загородном комплексе отличает совершенно иной уровень комфорта, который давно оценили европейские жители.
                    </div>
                </div>
            </article>

        </div>
    </section>

    <div class="video-page__modal">
        <div class="wrapper">
            <div class="video-page__modal-close">
                <svg class="close_svg" viewBox="0 0 50 50" width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="m37.304 11.282 1.414 1.414-26.022 26.02-1.414-1.413z" fill="#ffb519"></path><path d="m12.696 11.282 26.022 26.02-1.414 1.415-26.022-26.02z" fill="#ffb519"></path></svg>
            </div>
            <div class="video-page__modal-container">
                <!-- если через iframe, логика та же просто в data-source вставляем ссылку на видео, соответсвтенно меняем теги и атрибуты -->
                <video src="/video/tree.mp4" autoplay poster muted width="100%" height="100%" controls></video>
            </div>
        </div>
    </div>




    <script type="text/javascript">
    (function(){

        var videoModal = document.querySelector('.video-page__modal');
        var closeModal = document.querySelector('.video-page__modal-close');
        var videos = document.getElementsByClassName('video-page__item-img');
        var innerVideo = videoModal.querySelector('video');

        function videoModalOpen(){
            videoModal.classList.add('video-page__modal--open')
            innerVideo.setAttribute('src', videoSrc )
        }
        function videoModalClose(){
            videoModal.classList.remove('video-page__modal--open')
        }

        for (var i = 0; i < videos.length; i++) {
            videos[i].addEventListener('click', function(){
                videoSrc = this.dataset.source;
                videoModalOpen()
            })
        }

        closeModal.addEventListener('click', videoModalClose )

    }());

    </script>
     <?php include('includes/footer.php')?>
