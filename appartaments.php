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
                <li class="appartaments-page__link "><a href="./app-tabs/app-4.php">4-комнатные</a></li>
            </ul>
            <div class="appartaments-page__tabs-container" id="apptabs-container">
                Загрузка...
            </div>
        </div>
    </section>


    <!-- modal window for App -->

    <div class="appartaments-page__modal">
        <div class="wrapper">

            <div class="appartaments-page__modal-name">
                Двухуровневая квартира 2в
            </div>

            <div class="appartaments-page__modal-box flex">
                <div class="appartaments-page__modal-box-item">
                    <img class="appartaments-page__modal-box-img" src="/img/appartaments/full-img/app-1-1.jpg" alt="Двухуровневая квартира 2в">
                    <svg class="appartaments-page__modal-box-icon zoom-in" width="30" height="30"><use xlink:href="#zoom-in"></use></svg>
                    <svg class="appartaments-page__modal-box-icon zoom-out" width="30" height="30"><use xlink:href="#zoom-out"></use></svg>
                </div>
                <table class="appartaments-page__modal-box-item">
                    <thead>
                        <td>Площадь</td><td>м<sup>2</sup></td>
                    </thead>
                    <tr>
                        <th>Общая площадь</th><th>м<sup>2</sup></th>
                    </tr>
                    <tr>
                        <th>Жилая площадь</th><th>м<sup>2</sup></th>
                    </tr>
                    <tr>
                        <td>1.Гостинная</td><td>12,63</td>
                    </tr>
                    <tr>
                        <td>2.Кухня</td><td>10,60</td>
                    </tr>
                    <tr>
                        <td>3.Спальня 1</td><td>13,71</td>
                    </tr>
                    <tr>
                        <td>4.Санузел</td><td>4,80</td>
                    </tr>
                    <tr>
                        <td>5.Прихожая</td><td>2,70</td>
                    </tr>
                    <tr>
                        <td>6.Балкон</td><td>2,92</td>
                    </tr>
                    <tr>
                        <td>7.Спальня 2</td><td>18,21</td>
                    </tr>
                </table>
                <div class="appartaments-page__modal-box-item">
                    <dl class="appartaments-page__modal-list">
                        <dd>Адрес отдела продаж:</dd>
                        <dt>г.Гостомель, ул.Прорезная, 1</dt>
                        <dd>Время работы:</dd>
                        <dt>Пн-Вс: 9:00 - 19:00</dt>
                    </dl>
                    <a class="appartaments-page__modal-phone" href="tel:063 220 06 06">
                        <span id="istat_3">(063) 220-06-06</span>
                    </a>
                    <div class="btn">
                        записаться на просмотр
                    </div>
                    <a class="btn" href="/img/appartaments/full-img/app-1-1.jpg" download>
                        скачать планировку
                    </a>
                </div>

            </div>
            <svg class="appartaments-page__modal-close close_svg" viewBox="0 0 50 50" width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="m37.304 11.282 1.414 1.414-26.022 26.02-1.414-1.413z" fill="#ffb519"></path><path d="m12.696 11.282 26.022 26.02-1.414 1.415-26.022-26.02z" fill="#ffb519"></path></svg>

        </div>
    </div>

    <!-- end modal window -->


     <?php include('includes/footer.php')?>

     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
     <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
     <script src="/js/appartaments.js"></script>
