$(document).ready(function(){

    var images = ['1.jpg', '2.jpg', '3.jpg'],
          idx = 0;

      setInterval(function(){
        idx += 1;
        $('#my-img').fadeOut(1000, function(){
          $('#my-img').attr('src', images[idx]);
        });
        $('#my-img').fadeIn(2000);
        if (idx === images.length) { idx = 0; }
      }, 5000)

});
