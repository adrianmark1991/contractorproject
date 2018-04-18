
$(function () {
        //construction card
        var r_con = $('#reveal-construction'),
            rc_con = $('#content-construction-reveal'),
            h_con = $('#hide-construction'),
            c_con = $('#content-construction'),
            //civil card
            r_civil = $('#reveal-civil'),
            rc_civil = $('#content-civil-reveal'),
            h_civil = $('#hide-civil'),
            c_civil = $('#content-civil'),
            //glazing card
            r_glazing = $('#reveal-glazing'),
            rc_glazing = $('#content-glazing-reveal'),
            h_glazing = $('#hide-glazing'),
            c_glazing = $('#content-glazing'),
            //interior card
            r_interior = $('#reveal-interior'),
            rc_interior = $('#content-interior-reveal'),
            h_interior = $('#hide-interior'),
            c_interior = $('#content-interior'),
            //rendam project
            r_rendam = $('#reveal-rendam'),
            gr_rendam = $('#gallery-rendam-reveal'),
            h_rendam = $('#hide-rendam'),
            g_rendam = $('#gallery-rendam'),
            //pecca project
            r_pecca = $('#reveal-pecca'),
            gr_pecca = $('#gallery-pecca-reveal'),
            h_pecca = $('#hide-pecca'),
            g_pecca = $('#gallery-pecca'),
            //pecca project
            r_maxell = $('#reveal-maxell'),
            gr_maxell = $('#gallery-maxell-reveal'),
            h_maxell = $('#hide-maxell'),
            g_maxell = $('#gallery-maxell'),
            //pecca project
            r_earth = $('#reveal-earth'),
            gr_earth = $('#gallery-earth-reveal'),
            h_earth = $('#hide-earth'),
            g_earth = $('#gallery-earth'),

            reveal = 'card-reveal',
            animation = 'animated fadeIn';

        //reveal construction card start
        r_con.click(function () {
            c_con.addClass(reveal).removeClass(animation);
            rc_con.removeClass(reveal).addClass(animation);
        });
        h_con.click(function(){
           rc_con.addClass(reveal).removeClass(animation);
           c_con.removeClass(reveal).addClass(animation);
        });
        //reveal construction card end
        //reveal civil card start
        r_civil.click(function () {
            c_civil.addClass(reveal).removeClass(animation);
            rc_civil.removeClass(reveal).addClass(animation);
        });
        h_civil.click(function () {
            rc_civil.addClass(reveal).removeClass(animation);
            c_civil.removeClass(reveal).addClass(animation);
        });
        //reveal civil card end
        //reveal glazing card start
        r_glazing.click(function () {
            c_glazing.addClass(reveal).removeClass(animation);
            rc_glazing.removeClass(reveal).addClass(animation);
        });
        h_glazing.click(function () {
            rc_glazing.addClass(reveal).removeClass(animation);
            c_glazing.removeClass(reveal).addClass(animation);
        });
        //reveal glazing card end
        //reveal interior card start
        r_interior.click(function () {
            c_interior.addClass(reveal).removeClass(animation);
            rc_interior.removeClass(reveal).addClass(animation);
        });
        h_interior.click(function () {
            rc_interior.addClass(reveal).removeClass(animation);
            c_interior.removeClass(reveal).addClass(animation);
        });
        //reveal interior card end

        //reveal rendam project start
        r_rendam.click(function () {
            gr_rendam.show();
        });
        h_rendam.click(function () {
            gr_rendam.hide();
        });
        h_rendam.click(function () {
            g_rendam.show();
        });
        //reveal rendam project end

        //reveal pecca project start
        r_pecca.click(function () {
            gr_pecca.show();
        });
        h_pecca.click(function () {
            gr_pecca.hide();
        });
        h_pecca.click(function () {
            g_pecca.show();
        });
        //reveal pecca project end

        //reveal maxell project start
        r_maxell.click(function () {
            gr_maxell.show();
        });
        h_maxell.click(function () {
            gr_maxell.hide();
        });
        h_maxell.click(function () {
            g_maxell.show();
        });
        //reveal maxell project end

        //reveal earth project start
        r_earth.click(function () {
            gr_earth.show();
        });
        h_earth.click(function () {
            gr_earth.hide();
        });
        h_earth.click(function () {
            g_earth.show();
        });
        //reveal earth project end

    // JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
});


