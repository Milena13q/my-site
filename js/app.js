//Переменные для работы скриптов
let formRequest = jQuery('.form__request');
let block_show = false;
let iconToTop = jQuery('.to-top');
//Регулярные выражения для проверки форм
let regExCyrillic = /[а-яА-ЯЁё]+/i;
let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let regExNumberPhone = /^(?:\+|\d)[0-9]+$/;

//Функция с работой кнопки скроллинга вверх
function scrollTracking() {
    if ($(window).scrollTop() >= 3000) {
        jQuery('.to-top').addClass('active');
    }

    if ($(window).scrollTop() <= 3000) {
        jQuery('.to-top').removeClass('active');
    }
    if (block_show) {
        return false;
    }

    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.animation').offset().top;
    var eh = $('.animation').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        block_show = true;

        $('.animation').effect('slide');
    }
}

jQuery(window).scroll(function () {
    scrollTracking();
});

//Активация формы при клике на кнопку
jQuery('#activateForm').on('click', function () {
    if (formRequest.hasClass('active')) {
        formRequest.removeClass('active');
    } else {
        formRequest.addClass('active');
    }
})

//Активация функционала при клике на кнопку вверх
jQuery('.to-top').on('click', function () {
    window.scrollTo(0, 0);
});
//Меню бургер функционал
jQuery(".hamburger").click(function () {
    if (!jQuery(".hamburger").hasClass("active")) {
        jQuery(".header__group-buttons").addClass("active");
        jQuery(".nav-block").slideDown(250);
        jQuery(".hamburger").addClass('active')
    } else {
        jQuery(".nav-block").slideUp(250);
        jQuery(".hamburger").removeClass("active")
        jQuery(".header__group-buttons").removeClass("active");
    }
});
//Функционал при клике на кнопку из меню
jQuery(".nav-item").on("click", function () {
    let navigation = jQuery(".header__group-buttons");

    if (navigation.hasClass("active")) {
        jQuery(".nav-block").slideUp(250);
        jQuery(".hamburger").removeClass("active")
        navigation.removeClass("active");
    }
})


// Отслеживание действий при введении данных в форму
jQuery('.form__request').on('change', 'input, textarea', function (e) {
    let elInput = jQuery(e.currentTarget)
    let label = elInput.siblings('.alert-message')
    let inputValue = elInput.val()
    if (elInput[0].id === 'form-surname') {
        if (inputValue.trim() == "") {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Поле обязательно для заполнения');
        } else if(inputValue.length <= 2) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Введите не менее 2 символов');
        } else if (regExCyrillic.test(inputValue) !== true) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Недопустимые символы');
        } else {
            elInput.css('border', '2px solid green');
            label.removeClass('active');
        }
    }

    if (elInput[0].id === 'form-name') {
        if (inputValue.trim() == "") {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Поле обязательно для заполнения');
        } else if(inputValue.length <= 2) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Введите не менее 2 символов');
        } else if (regExCyrillic.test(inputValue) !== true) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Недопустимые символы');
        } else {
            elInput.css('border', '2px solid green');
            label.removeClass('active');
        }
    }

    if (elInput[0].id === 'form-email') {
        if (inputValue.trim() == "") {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Поле обязательно для заполнения');
        } else if(inputValue.length <= 2) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Введите не менее 2 символов');
        } else if (regExEmail.test(inputValue) !== true) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Адрес электронной почты должен содержать один знак @');
        } else {
            elInput.css('border', '2px solid green');
            label.removeClass('active');
        }
    }

    if (elInput[0].id === 'form-number') {
        if (inputValue.trim() == "") {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Поле обязательно для заполнения');
        } else if(inputValue.length <= 2) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Введите не менее 2 символов');
        } else if (regExNumberPhone.test(inputValue) !== true) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Неверный формат');
        } else {
            elInput.css('border', '2px solid green');
            label.removeClass('active');
        }
    }

    if (elInput[0].id === 'form-message') {
        if (inputValue.trim() == "") {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Поле обязательно для заполнения');
        } else if(inputValue.length <= 2) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Введите не менее 2 символов');
        } else if (regExCyrillic.test(inputValue) !== true) {
            elInput.css('border', '2px solid red');
            label.addClass('active');
            label.text('Недопустимые символы');
        } else {
            elInput.css('border', '2px solid green');
            label.removeClass('active');
        }
    }
})

//Подключение и настройка слайдера
const swiperCompanies = new Swiper('.partners__container-brands', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    speed: 1200,
    autoplay: true,
    spaceBetween: 10,
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        810: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
    navigation: {
        nextEl: '.partners__button-next',
        prevEl: '.partners__button-prev',
    },
});
