$(document).ready(function() {
    $('#slides').superslides({
        animation:'fade',
        play: 5000,
        //pagination: false retira os pontinhos que mudam as imagens
        pagination: false,
    });
    var typed = new Typed(".typed", {
        strings: ["Compre Conosco!","Apoie o comércio local!"],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showcursor: false

    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        itens: 4,
        
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    

    var produtosTopOffset = $ (".skillsSection").offset().top;
    var statsTopOffset = $ (".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function() {
        if(window.pageYOffset > produtosTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 5,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
            

        }
        
        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());
                
                element.countup(endVal);
        
            })

            countUpFinished = true;
        }

    });
    //in some point its needed to update the countup archives - see more in the github page
   
});
