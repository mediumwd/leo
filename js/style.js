$(document).ready(function(){
    if (($(window).width() <= '875')|| $(window).resize()){
//        $(".content").css("background-color", "red");
        $('.menu').click(function(){
            $('#nav-icon').toggleClass('open');
             $(".header--nav__menu").toggleClass('header--nav__menu--opened');
        });
};
})