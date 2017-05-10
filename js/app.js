angular
    .module('uneptest', [
        'ngSanitize'
    ])

    .config(function($httpProvider,$interpolateProvider){
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });
    
jQuery(document).ready(function($) {
    //Slider
    $('#regionslider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true
        //fade:true
    });

    $('#resourceslider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        centerMode: false,
        variableWidth: true
        //fade:true
    });
});