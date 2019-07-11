//document.addEventListener("DOMContentLoaded",func(){};
//$(document).ready(func(){});
document.addEventListener("DOMContentLoaded", function() {
    // const mq = window.matchMedia("(min-width: 500px)");
    var tabColor = document.querySelectorAll('.matches .date ul li');
    var a = document.querySelectorAll('.matches .date ul li a');
    var icon = document.querySelector('.icon-bar');

    var ChangeTapColor = function() {
        for (let i = 0; i < tabColor.length; ++i) {
            tabColor[i].onclick = () => {
                var c = 0;
                while (c < tabColor.length) {
                    // tabColor[c].classList.contains('activeTap') ? tabColor.classList.remove('activeTap') : '';
                    if (tabColor[c].classList.contains('liActive')) {
                        tabColor[c].classList.remove('liActive');
                        a[c].style.color = '';
                    }
                    c++;
                }
                tabColor[i].classList.add('liActive');
                a[i].style.color = '#212224';
            }
        }
    }
    $('.carousel').carousel({
        interval: 4000
    });
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
    $('#overlay').modal('show');

    setTimeout(function() {
        $('#overlay').modal('hide');
    }, 15000);
    var log = true;
    icon.onclick = () => {
        if (log) {
            icon.classList.add('change');
            log = false;
        } else {
            icon.classList.remove('change');
            log = true;
        }
    }

    // function myFunction(x) {
    //     x.classList.toggle("change");
    // }
    ChangeTapColor();

});
new Vue({
    el: '#app',
    data: {
        today: true,
        tom: false,
        yaster: false,
        live: false,
        icons: false
    },
    methods: {

    },

});