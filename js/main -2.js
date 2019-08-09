//document.addEventListener("DOMContentLoaded",func(){};
//$(document).ready(func(){});
document.addEventListener("DOMContentLoaded", function() {
    // const mq = window.matchMedia("(min-width: 500px)");
    // const names = ['الاهلي', 'الترجي', 'الوفاق', 'الاتحاد'];
    var tabColor = document.querySelectorAll('.matches .date ul li');
    var a = document.querySelectorAll('.matches .date ul li a');
    var as = document.querySelectorAll('#champ ul li a');
    var liColors = document.querySelectorAll('#champ .ul li');
    var icon = document.querySelector('.icon-bar');
    var count = document.querySelector('#count');
    var count1 = document.querySelector('#count2');
    var spon = document.querySelector('#spon');
    var spon1 = document.querySelector('#spon2');
    var content = document.querySelector('#content .row');
    var content1 = document.querySelector('#content2 .row');
    var sponsers = ` 
     <div class="spons col-md-8 col-xs-12 m-auto">
        <div class="row">
        <div class="form-group col-md-6 col-xs-12">
                <label>اسم الراعي</label>
                <input type="text" name="" id="" class="form-control" placeholder="">
            </div>
            <div class="form-group col-md-6 col-xs-12">
                <label>صورة الراعي</label>
                <input type="file" name="" id="" class="form-control" placeholder="">
            </div>
            <div class="form-group col-12">
                <label>لينك الراعي </label>
                <input type="text" name="" id="" class="form-control" placeholder="">
            </div>
        </div>
    
    <hr/>
</div>`;

    // const names = ['الاهلي', 'الترجي', 'الوفاق', 'الاتحاد'];
    // var groups = `<div class="col">
    //         <div class="group">
    //             <div class="list-group">

    //                 ${names.map(name => `<a href="show-team.html" class="list-group-item list-group-item-action list-group-item-info">${name}</a>`).join('')}

    //             </div>
    //         </div>
    //     </div>`;
    var groups = `<div class="col">
                    <div class="group">
                        <div class="list-group">
                        <div class="form-group  col-md-8 col-xs-12 m-auto mt-5 mb-5">
                        <label style="display: block;margin-bottom: 15px;">اضافة الانديه  </label>
                        <select class="team-slec form-control" placeholder="اختر الفرق">
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antartica">Antartica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    </select>

                    </div>
                        </div>
                    </div>
                </div>
    `;
    // var x = '';
    // var g1 = `<div class="col-md-4 col-xs-12 ${x}">
    // <div class="group">
    // <div class="row">`;
    var team = `<div class="form-group">
    <label>اختر الفريق</label>
    <button class="btn btn-outline-success float-left mb-2">اضافه</button>
    <select class="form-control" name="">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    </select>
   </div>`;
    var g2 = `</div>
    </div>
    </div>`;

    //creat champions actions
    count.onclick = () => {
        console.log(spon.value, sponsers);
        for (let i = 0; i < (spon.value) ? spon.value : 0; ++i) {
            content.innerHTML += sponsers;
        }
        console.log(content.childNodes);
    };
    count1.onclick = () => {
        console.log(spon1.value, groups);
        for (let i = 0; i < (spon1.value) ? spon1.value : 0; ++i) {
            // content1.innerHTML += groups;
            let g = 'g';
            let x = (g + i);

            content1.innerHTML += `<div class="col-md-4 col-xs-12 ${x}">`
            content1.innerHTML += team;
            content1.innerHTML += ` <div class="group"> <div class="row">`;
            content1.innerHTML += g2;
        }
        var g = document.querySelectorAll('.group');
        // for (let j = 0; j < (spon1.value) ? spon1.value : 0; j++) {
        //     for (let n = 0; n < spon1.value; n++) {
        //         g[j].innerHTML += team;
        //     }
        // }
        spon1.value = 0;
        console.log(content.childNodes);
    }
    $(function() {
        $(".teams").chosen({ rtl: true });
        $(".team-slec").chosen({ rtl: true });

    });

    //chabge colors taps
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
        for (let i = 0; i < liColors.length; ++i) {
            liColors[i].onclick = () => {
                console.log('cliked');
                var c = 0;
                while (c < liColors.length) {
                    // tabColor[c].classList.contains('activeTap') ? tabColor.classList.remove('activeTap') : '';
                    if (liColors[c].classList.contains('liActive')) {
                        liColors[c].classList.remove('liActive');
                        as[c].style.color = '#8c8d8e';
                    }
                    c++;
                }
                liColors[i].classList.add('liActive');
                console.log(liColor[i].classList);
                as[i].style.color = '#fff';
            }
        }
    };

    //carousel time
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
    //ads pop up
    $('#overlay').modal('show');

    setTimeout(function() {
        $('#overlay').modal('hide');
    }, 15000);
    //head slection tap
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
        //calling function
    ChangeTapColor();
    ChangeTapColors();

});
new Vue({
    el: '#app',
    data: {
        today: true,
        tom: false,
        yaster: false,
        live: false,
        icons: false,
        arr: [true, false, false, false],
        j: 5,
        addSta: false,
        text: false,
        l: 4
    },
    computed: {

    },
    methods: {
        increment() {
            // this.j += 5;
            this.j <= 24 ? this.j += 5 : this.j;
        },
        decrement() {
            this.j -= 5;
        },
        reverse(x) {
            for (let i = 0; i < 4; ++i) {
                this.arr[i] = false;
            }
            this.arr[x] = true;
            console.log(this.arr[x]);

        }
    },

});