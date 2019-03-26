<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>≡ ЖК "На Прорезной"》 Контакты</title>
    <link rel="stylesheet" href="/css/pages.css">

    <?php include('includes/header.php')?>
    <section class="header-pages">
        <div class="wrapper">
            <h1 class="content_name">
                Контакты
            </h1>
            <div class="breadcrumbs flex">
                <a href="/" class="breadcrumbs__active">Главная</a>&#8195;&middot;&#8195;
                <a href="" class="breadcrumbs__no-active">Контакты</a>
            </div>
        </div>
    </section>

    <section class="pages__inner contacts-page flex">
        <div class="contacts_left">
            <div class="contacts_item wow fadeInLeft" data-wow-duration="1.2s">
                <p class="contacts_subname">Adress</p>
                <p class="content_text">г. Гостомель</p>
                <p class="content_text">ул. Прорезная 1</p>
                <a href="#" class="content_text">Открыть в навгигаторе</a>
            </div>
            <div class="contacts_item wow fadeInLeft" data-wow-duration="1.6s">
                <p class="contacts_subname">Phone</p>
                <p class="content_text"><span id="istat_3">(063) 220-06-06</span></p>
            </div>
            <div class="contacts_item wow fadeInLeft" data-wow-duration="1.8s">
                <p class="contacts_subname">Social</p>
                <div class="social_links flex">
                    <a href="#"><svg class="svg_youtube" width="20" height="20"><use xlink:href="#youtube-1"></use></svg></a>
                    <a href="#"><svg class="svg_insta" width="20" height="13"><use xlink:href="#instagram"></use></svg></a>
                    <a href="#"><svg class="svg_fb" width="20" height="16"><use xlink:href="#fb"></use></svg></a>
                </div>
            </div>
        </div>
        <div class="contacts-page__img">
            <div class="contacts-page__map" id = "contacts-map">

            </div>
        </div>
        <div class="contacts_right">
            <div class="contacts_form">
                <form class="main_form wow fadeInRight" action="#" method="" data-wow-duration="4s">
                    <h2 class="contacts_subname wow fadeIn" data-wow-duration="1.8s">Получить консультацию</h2>
                    <input type="name" name="" value="" placeholder="Ваше имя *">
                    <input type="email" name="" value="" placeholder="Номер телефона *">
                    <textarea name="message" placeholder="Сообщение "></textarea>
                    <button class='btn' href='#'>
                        Отправить
                        <span class='line-1'></span><span class='line-2'></span><span class='line-3'></span><span class='line-4'></span>
                    </button>
                </form>
            </div>
        </div>

    </section>





    <?php include('includes/footer.php')?>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBeZ7W_mpcc25BT0seg7opc8JCzonurxEc"></script>
    <script src="/js/contacts.js"></script>
