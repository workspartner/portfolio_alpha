window.onload = function () {

    // particles.jsのパラメータ設定
    var particles = Particles.init({
        selector: '.background',
        sizeVariations: 10,
        speed: 1,
        color: ['#f3dbe7', '#dbf0f3', '#e7f3db'],
        connectParticles: true
    });

    // ヘッダーの背景色変更とセクションのフェードイン
    const distance = $(".box").offset().top - ($(".header").offset().top + $(".header").height());
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > distance) {
            $(".header").css("background-color", "#fff");
        } else {
            $(".header").css("background-color", "transparent")
        }

        var currentPosition = $(window).height() + $(window).scrollTop();
        $(".fade-in").each(function () {
            if (currentPosition > $(this).offset().top) {
                $(this).css("visibility", "visible");
                $(this).animate({ opacity: 1 }, 1000);
           }
        });
    });

    // トップのテキストアニメーション
    $(".box").children("#first").fadeIn(1000).fadeOut(1000);
    setTimeout(function () {
        $(".box").children("#second").fadeIn(1000);  
    }, 2000)
    setTimeout(function () {
        $(".box").children("#third").t();
    }, 3000);

    // ヘッダークリック時のスクロール
    var $header = $(".header, #global-nav");
    $header.find("li").click(function () {
        var className = "." + $(this).text().toLowerCase();
        $("html,body").animate({ scrollTop: $(className).offset().top });
    });

    // ハンバーガーメニューの開閉
    $("#nav-toggle").click(function () {
        $(".home").toggleClass("open");
    });
};