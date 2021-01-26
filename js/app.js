$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOfset = $(window).scrollTop();

    console.log(introH)

    checkScroll(scrollOfset);

    $(window).on("scroll", function () {
        scrollOfset = $(this).scrollTop();
        checkScroll(scrollOfset);
    });


    function checkScroll(scrollOfset) {
        if (scrollOfset + 50 >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOfset = $(blockId).offset().top;

        $('#nav a').removeClass("active");
        $this.addClass("active");
        $('#nav').removeClass("active");

        console.log(blockId);


        $("html, body").animate({
            scrollTop: blockOfset
        }, 500);

    });


    /*Filter*/
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');
        

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {

                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }

    });
    
    
     $("#burger").on("click", function (event) {

        event.preventDefault();

        $("#nav").toggleClass("active");

    });
    
    
    $('.slider').slick({
        infinite: true,
        sliderToShow: 3,
        sliderToScroll: 3,
        fade: true,
        arrows: false,
        dots: true
    });
});
