$(document).ready(function() {
    $('.troll2').click(function(e) {
        e.stopPropagation();
        $('.troll').css("display","block");
    });
    $('.container').click(function() {
        $('.troll').css("display","none");
        
    })
    $('.stockValidate').click(function(e) {
        e.stopPropagation();
        $('.stockSymbol').css("display","block");
    });

})