

$(document).ready(function(){
  
    $('.btn1').click(function(){
        $(".a").slideToggle();
        $(".a").animate({'width':200});
        $(".a").animate({'left':100});
        $(".a").animate({'height':300});
        $(".a").animate({'opacity':0.2}); 
    
    
        
    });
   

});


$(document).ready(function(){
  
    $('.btn2').click(function(){
    
        $(".b").slideToggle();
        $(".b").animate({'width':200});
        $(".b").animate({'right':500});
        $(".b").animate({'height':300});
        $(".b").animate({'opacity':0.2});
            
        
    });
   

});




$(document).ready(function(){
  
    $('.btn3').click(function(){
    
        $(".c").slideToggle();
        $(".c").animate({'width':200});
        $(".c").animate({'left':400});
        $(".c").animate({'height':300});
        $(".c").animate({'opacity':0.2});
            
        
    });
   

});


$(document).ready(function(){
  
    $('.btn4').click(function(){
    
        $(".d").slideToggle();
        $(".d").animate({'width':200});
        $(".d").animate({'left':400});
        $(".d").animate({'height':300});
        $(".d").animate({'opacity':0.2});
            
    });
});


    $(function(){
        $(".t").on('click',function(){
        $('.navbar').$(selector).slideDown()
        });
  
    
