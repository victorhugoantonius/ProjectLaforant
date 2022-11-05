$(document).ready(function(){

  var ctr = 0;

  $(".but2").click(function(){
    if(ctr === 0){
    $(".v").css("background", "rgb(54,55,52,1.0)");
    $(".v2").css("background", "rgb(54,55,52,1.0)");
    $(".v3").css("background", "rgb(54,55,52,1.0)");
    $(".v4").css("background", "rgb(54,55,52,1.0)");
    $(".v5").css("background", "rgb(54,55,52,1.0)");
    }
  });

    $("#clicks").click(function(){
      $(".v").animate({
        opacity : '2.0'
      });
        $(".v").slideToggle("slow");
     });

    $("#clicks2").click(function(){
      $(".v2").animate({
        opacity : '2.0'
      });
        $(".v2").slideToggle("slow");
      });

      $("#clicks3").click(function(){
        $(".v3").animate({
          opacity : '2.0'
        });
        $(".v3").slideToggle("slow");
      });

      $("#clicks4").click(function(){
        $(".v4").animate({
          opacity : '2.0'
        });
        $(".v4").slideToggle("slow");
      });

      $("#clicks5").click(function(){
        $(".v5").animate({
          opacity : '2.0'
        });
        $(".v5").slideToggle("slow");
      });

    var widths = 400;

    var subslides = $('.sub-slider');

    var total = subslides.length;

    var  increments = 1;

    $('.next').click(function(){
        if(subslides.children().length===increments) {
            subslides.animate({'margin-right' : 0});
            subslides.animate({'margin-left' : 0});
            increments = 1;
        }
        else if(subslides.children().length!==increments){
            subslides.animate({'margin-right' : -(increments*300)},800);
            subslides.animate({'margin-left' : -(increments*widths)},500);

            increments = increments + 1;
        } 
        else {
          increments = -1;
        }
    })

    $('.previous').click(function(){

        if(increments===1) {
          subslides.animate({'margin-left' : 0});
        }
        else{
            increments = increments - 1;

            subslides.animate({'margin-right' : 300 - (increments*widths)},800);
            subslides.animate({'margin-left' : widths - (increments*widths)},500);
        }
    })

});