AOS.init();

        var preloader = document.getElementById("loading");
        function loadFunc() {
            preloader.style.display = "none";
        }

        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
        

        $(document).ready(function () {
            $(this).scrollTop(0);
            $(".navbar-nav li").removeClass("active");
            $('#home-link').addClass('active');
        });

        $(window).scroll(function () {
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 40);
            $('nav').toggleClass('navbar-light', $(this).scrollTop() > 40);
        });

        $(window).scroll(function () {

            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < 400) {
                $(".navbar-nav li").removeClass("active");
                $('#home-link').addClass('active');
            }
            else if ($(this).scrollTop() > 400 && $(this).scrollTop() < 1100) {
                $(".navbar-nav li").removeClass("active");
                $('#about-link').addClass('active');
            }
            else if ($(this).scrollTop() > 1100 && $(this).scrollTop() < 2400) {
                $(".navbar-nav li").removeClass("active");
                $('#howto-link').addClass('active');
            }
        })

        $(".navbar-nav li").on("click", function () {
            $(".navbar-nav li").removeClass("active");
            $(this).addClass("active");
        });

        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                document.getElementById("navbar").classList.add("navbar-light");
                document.getElementById("navbar").classList.remove("navbar-dark");
                document.getElementById("text-black").style.color = "black";
            }
            else {
                document.getElementById("navbar").classList.add("navbar-dark");
                document.getElementById("navbar").classList.remove("navbar-light");
                document.getElementById("text-black").style.color = "white";
            }
        }