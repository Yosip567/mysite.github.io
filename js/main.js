jQuery(function ($) {
    'use strict';

    //#main-slider
    $(function () {
        $('#main-slider.carousel').carousel({
            interval: 8000
        });
    });

    $('.window-height').height($(window).height());

    // accordian
    $('.accordion-toggle').on('click', function () {
        $(this).closest('.panel-group').children().each(function () {
            $(this).find('>.panel-heading').removeClass('active');
        });

        $(this).closest('.panel-heading').toggleClass('active');
    });


    // portfolio filter
    $(window).load(function () {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'

        });

        $portfolio_selectors.on('click', function () {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    });

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function (event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),

            beforeSend: function () {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            }
        }).done(function (data) {
            form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
        });
    });

    $('.testimonial-slider').owlCarousel({
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
});
function reply_click(element)
    {
        document.getElementById('car_name').value = element.getAttribute('data-car');
        document.getElementById('car_price').value = element.getAttribute('data-price');
    }




var input = document.querySelector("#phone");
    window.intlTelInput(input, {
      // allowDropdown: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // initialCountry: "auto",
      // excludeCountries: ["us"],
      // autoPlaceholder: "off",

      // dropdownContainer: document.body,intl-tel-input-master
      // formatOnDisplay: false,
      // geoIpLookup: function(callback) {
      //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // hiddenInput: "full_number",
      // localizedCountries: { 'de': 'Deutschland' },
      // placeholderNumberType: "MOBILE",
      // separateDialCode: true,

      autoHideDialCode: false,
      nationalMode: false,
      utilsScript: "../js/utils.js",
      defaultCountry: 'auto',
      preferredCountries: ['ru', 'ua', 'es', 'by', 'kz', 'ee', 'rs', ]
    });
var input = document.querySelector("#phone2");
    window.intlTelInput(input, {
      autoHideDialCode: false,
      nationalMode: false,
      utilsScript: "../js/utils.js",
      defaultCountry: 'auto',
      preferredCountries: ['ru', 'ua', 'es', 'by', 'kz', 'ee', 'rs', ]
    });