(function ($) {

    $.fn.cubeGallery = function (options) {

         options = $.extend({
            width: 1218,
            height: 760,
            linksClass: "button01",
            imgClass: "content-banner",
            caruselClass: "carusel",
            slayderClass: 'container01',
            axisRotate : "rotateY" //change horizontal or vertical rotate(X or Y )
        },options);

        return this.each(function() {
        var element = $(this).find('.content-banner');

        var quantity = element.length;
        var angleRotation = 359.99 / quantity;
//      console.log(angleRotation+'1');
        var radian = angleRotation / 2 * Math.PI / 180;
        var translate = (options.width / 2) / Math.tan(radian);
//      console.log(translate+'2');

        $(document).ready(function () {

            element.each(function (index) {
                element.css({
                    position: 'absolute',
                    width: options.width + 'px',
                    height: options.height + 'px',
                    margin: '0 30px'});
//              console.log(element+'3');
                var d = index * angleRotation;
                var transforms = options.axisRotate + '(' + d + 'deg) translateZ(' + translate + 'px)';
//              console.log(options.axisRotate+'4');
                $(this).css({'transform': transforms});
            });
        });

            $('.' + options.linksClass).click(function (event) {
            event.preventDefault();

                var i = $(this).index();
//              console.log(i+'5');
                $(this).each(function () {
                    var d = i * angleRotation;
                    var rotate = options.axisRotate + '(' + -d + 'deg)';
//                  console.log(rotate+'6');
                   $('.' + options.caruselClass).css({'transform': rotate});
                });
            });
        });
    };
})(jQuery);

$('body').cubeGallery({ });

