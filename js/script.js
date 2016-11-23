
$(document).ready(function() { 

	 var colceil = $('.color-ceiling li');

    colceil.on('click', function(){
      $('.ipad-layer img').attr('src', 'img/'+ $(this).attr('class').replace('color', '') +'.jpg')

    });
	
  });