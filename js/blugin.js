$(document).ready(function(){
    $(".Services .content button").on({
        mouseenter:function(){
            $(".Services .content button .color").animate({
                width:"100%"
            },250).next().css("color","#000")
        }, mouseleave:function(){
            $(".Services .content button .color").animate({
                width:"0%"
            },250).next().css("color","#fff")
        }
    }),
    $(".about .content button").on({
        mouseenter:function(){
            $(".about .content button .color").animate({
                width:"100%"
            },250).next().css("color","#fff")
        }, mouseleave:function(){
            $(".about .content button .color").animate({
                width:"0%"
            },250).next().css("color","#6c757d")
        }
    }),
    $(".Gift .content button").on({
        mouseenter:function(){
            $(".Gift .content button .color").animate({
                width:"100%"
            },250).next().css("color","#000")
        }, mouseleave:function(){
            $(".Gift .content button .color").animate({
                width:"0%"
            },250).next().css("color","#fff")
        }
    }),
    $(".footer  button").on({
        mouseenter:function(){
            $(".footer  button .color").animate({
                width:"100%"
            },250).next().css("color","#000")
        }, mouseleave:function(){
            $(".footer  button .color").animate({
                width:"0%"
            },250).next().css("color","#fff")
        }
    })
})