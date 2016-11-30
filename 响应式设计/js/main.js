window.onload =function () {
    if (document.documentElement.clientWidth < 768) {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 5000,//可选选项，自动滑动
            autoplayDisableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。

            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true

//        // 如果需要前进后退按钮
//        nextButton: '.swiper-button-next',
//        prevButton: '.swiper-button-prev',
        });
    } else {
        var swiperWrapper = document.getElementById('swiper-wrapper');
        var allSlider = document.getElementsByClassName('swiper-slide')[0];

        swiperWrapper.appendChild(allSlider.cloneNode(true));
        var divPage = document.getElementsByClassName('swiper-pagination')[0];
        divPage.innerHTML = '<span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span>';

        divPage.style.width = '100%';
        divPage.style.bottom = '10px';
        var swiperPaginationBullet = document.getElementsByClassName('swiper-pagination-bullet');
        for (var i = 0; i < swiperPaginationBullet.length; i++) {
            swiperPaginationBullet[i].style.marginRight = '5px';
        }

        var swiperSlide = document.getElementsByClassName('swiper-slide');
        for (var j = 0; j < swiperSlide.length; j++) {
            swiperSlide[j].style.float = 'left';
            swiperSlide[j].style.width = '25%';
        }


        swiperWrapper.style.width='400%';
        swiperWrapper.style.height='100%';
//        swiperWrapper.style.position='absolute';
        swiperWrapper.style.left='0';
        swiperWrapper.style.top='0';

        var move = document.getElementById('swiper-container');
        move.style.width='100%';
//        move.style.height='100%';
        move.style.margin='0 auto ';
//        move.style.position='relative';
        var speed = 5000;//轮播当前下标、定时器、轮播每帧切换的时间
        var index = 0;
        var timer;

        function che() {
            timer = setInterval(function () {
                index++;
                if (index == $('.swiper-wrapper div').size()) {
                    index = 1;
                    swiperWrapper.style.left = 0;
                }
                change()
            }, speed);
        }

        che();

        $('.swiper-wrapper').hover(function () {
            clearInterval(timer);
        }, function () {
            che();
        });

        function change() {
            $('.swiper-wrapper').stop().animate({left: -100*index+'%'});
            $('.swiper-pagination span').eq(index).addClass('swiper-pagination-bullet-active').stop().siblings().removeClass('swiper-pagination-bullet-active');
            if(index==$('.swiper-pagination span').size()){
                $('.swiper-pagination span').eq(0).addClass('swiper-pagination-bullet-active').stop().siblings().removeClass('swiper-pagination-bullet-active');
            }
        }
        $('.swiper-pagination span').mouseenter(function () {
            clearInterval(timer);
            index=$(this).index();//获取当前触发元素的下标
            change()
        });
    }
};