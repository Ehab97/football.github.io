//document.addEventListener("DOMContentLoaded",func(){};
//$(document).ready(func(){});
document.addEventListener("DOMContentLoaded", function() {
    // const mq = window.matchMedia("(min-width: 500px)");
    var tabColor = document.querySelectorAll('.matches .date ul li');
    var a = document.querySelectorAll('.matches .date ul li a');
    var liColor = document.querySelectorAll('#champ ul li');
    var as = document.querySelectorAll('#champ ul li a');
    var liColors = document.querySelectorAll('#champ .ul li');
    var ass = document.querySelectorAll('#champ .ul li');
    var icon = document.querySelector('.icon-bar');
    var navlink = document.querySelectorAll('.bg-dark .nav-item .nav-link');
    var chlink = document.querySelectorAll('.champions ul a');
    var chlink2 = document.querySelectorAll('.col-md-3 .example-2 .button')
        // navlink[5].setAttribute('href', ' ');
        // navlink[5].setAttribute('href', 'ads.html');
        // chlink[0].setAttribute('href', 'champions.html');
        // for (let i = 0; i < chlink2.length; i++) {
        //     chlink2[i].setAttribute('href', 'champions.html');

    // }
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
    };
    var ChangeTapColors = function() {
        for (let i = 0; i < liColor.length; ++i) {
            liColor[i].onclick = () => {
                var c = 0;
                while (c < liColor.length) {
                    // tabColor[c].classList.contains('activeTap') ? tabColor.classList.remove('activeTap') : '';
                    if (liColor[c].classList.contains('liActive')) {
                        liColor[c].classList.remove('liActive');
                        as[c].style.color = '#8c8d8e';
                    }
                    c++;
                }
                liColor[i].classList.add('liActive');
                as[i].style.color = '#fff';
            }
        }
    };
    var ChangeTapColorss = function() {
        for (let i = 0; i < liColors.length; ++i) {
            liColors[i].onclick = () => {
                var c = 0;
                while (c < liColors.length) {
                    // tabColor[c].classList.contains('activeTap') ? tabColor.classList.remove('activeTap') : '';
                    if (liColors[c].classList.contains('liActives')) {
                        liColors[c].classList.remove('liActives');
                        ass[c].style.color = '#8c8d8e';
                    }
                    c++;
                }
                liColors[i].classList.add('liActives');
                ass[i].style.color = '#fff';
            }
        }
    };
    //
    $(function() {
        $(".teams").chosen({ rtl: true });
        $(".team-slec").chosen({ rtl: true });

    });
    //
    $('.carousel').carousel({
        interval: 4000
    });
    //images pop
    $(document.body).on('click', '.pop', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });

    // $('.pop').on('click', function() {
    //     $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    //     $('#imagemodal').modal('show');
    // });
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
    ChangeTapColors();
    ChangeTapColorss();
});
new Vue({
    el: '#app',
    data: {
        today: true,
        tom: false,
        yaster: false,
        live: false,
        icons: false,
        g1: true,
        g2: false,
        g3: false,
        j: 5,
        arr: ['مباريات', 'اهداف', 'كروت حمراء', 'كروت صفراء', 'ضربات جزاء'],
        addSta: false,
        text: false
    },
    methods: {
        increment() {
            // this.j += 5;
            this.j <= 24 ? this.j += 5 : this.j;
        },
        decrement() {
            this.j -= 5;
        }

    },

});