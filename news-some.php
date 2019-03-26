<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>≡ ЖК "На Прорезной" 》 Название новости текст в две строчки</title>
    <link rel="stylesheet" href="/css/pages.css">

    <?php include('includes/header.php')?>

    <section class="header-pages">
        <div class="wrapper">
            <h1 class="content_name content-name__main-name-news">
                Название новости текст в две строчки
            </h1>
            <div class="breadcrumbs flex">
                <a href="/" class="breadcrumbs__active">Главная</a>&#8195;&middot;&#8195;
                <a href="javascript:history.back()" class="breadcrumbs__active">Акции</a>&#8195;&middot;&#8195;
                <a href="" class="breadcrumbs__no-active">Название новости текст в две строчки</a>
            </div>
        </div>
    </section>
    <section class="pages__inner news-some-page">
        <div class="wrapper">
            <div class="news-some-page__img-container">
                <div class="news-some-page__img-item" style="background-image:url('/img/gallery/gal-big-1.jpg')"></div>
                <div class="news-some-page__img-item" style="background-image:url('/img/gallery/gal-big-2.jpg')"></div>
                <div class="news-some-page__img-item" style="background-image:url('/img/gallery/gal-big-3.jpg')"></div>
            </div>
            <article class="news-some-page__descr">
                <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                </p>
                <p>
                    По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                </p>
                <div class="news-some-page__btn-box flex">
                    <a class='btn flex' href='/news.php/'>
                        <svg class="controls-left" width="100" height="36" style="transform: scaleX(-1);"><use xlink:href="#right-arrow-slim"></use></svg>
                        Назад к списку акций
                        <span class='line-1'></span><span class='line-2'></span><span class='line-3'></span><span class='line-4'></span>
                    </a>

                    <a class='btn flex' href='#'>
                        <div class="flex">
                            <svg class="email" width="34" height="22"><use xlink:href="#email"></use></svg>
                        </div>
                        Оставить заявку
                        <svg class="controls-left" width="100" height="36"><use xlink:href="#right-arrow-slim"></use></svg>

                        <span class='line-1'></span><span class='line-2'></span><span class='line-3'></span><span class='line-4'></span>
                    </a>

                </div>
            </article>

        </div>


    </section>

    <section class="pages__inner news-page news-fresh-page">
        <div class="wrapper">
            <h3 class="content_name">
                Похожие новости
            </h3>
            <article class="news-page__item flex wow fadeIn"  data-date="20 березня 2019">
                <div class="news-page__item-img" >
                    <img src="/img/news/poster-1.jpg" alt="">
                </div>
                <div class="news-page__item-descr">
                    <div class="pages-subname">
                        Новогодний праздник в жилом комплексе "На Прорезной"
                    </div>
                    <div class="content_text">
                        Жизнь в загородном комплексе отличает совершенно иной уровень комфорта, который давно оценили европейские жители.
                    </div>
                    <a class='btn' href='#'>
                        Подробнее
                        <span class='line-1'></span><span class='line-2'></span><span class='line-3'></span><span class='line-4'></span>
                    </a>
                </div>
            </article>
            <article class="news-page__item flex wow fadeIn" data-date="22 березня 2019">
                <div class="news-page__item-img">
                    <img src="/img/news/poster-2.jpg" alt="">
                </div>
                <div class="news-page__item-descr">
                    <div class="pages-subname">
                        Comfort Life Development поздравляет всех с Рождеством и Новым годом!
                    </div>
                    <div class="content_text">
                        Жизнь в загородном комплексе отличает совершенно иной уровень комфорта, который давно оценили европейские жители.
                    </div>
                    <a class='btn' href='#'>
                        Подробнее
                        <span class='line-1'></span><span class='line-2'></span><span class='line-3'></span><span class='line-4'></span>
                    </a>
                </div>
            </article>
        </div>
    </section>

    <?php include('includes/footer.php')?>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>

    <script type="text/javascript">

    $(document).ready(function(){
        $('.news-some-page__img-container').slick({
            fade: true,
            nextArrow: '<svg class="controls-right" width="80" height="36"><use xlink:href="#right-arrow-slim"></use></svg>',
            prevArrow: '<svg class="controls-left" width="80" height="36"><use xlink:href="#right-arrow-slim"></use></svg>',
        });
    });



    </script>
