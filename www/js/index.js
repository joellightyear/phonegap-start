<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

$(document).on("pagecreate","#pageone",function(){                     

	$('#taptext').on("tap",function(){
        
        var randBool = random()
  
       $("#taptext").html(randBool.toString());
        
        if (randBool == true) {

            navigator.notification.beep(1);
            
            } else {
   
            navigator.notification.beep(2);
                
        }
        
 	}); 

});

function random() {
	return !Math.round(Math.random());
}
