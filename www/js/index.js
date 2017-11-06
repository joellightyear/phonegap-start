<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).css('opacity', '0');
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   


});