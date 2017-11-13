<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){                     

	$('#taptext').on("tap",function(){
    	$(this).getElementById("taptext").innerHTML = !Math.round(Math.random()).toString();
        
 	}); 

});