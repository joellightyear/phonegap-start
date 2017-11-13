

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

$(document).on("pagecreate","#pageone",function(){                 
    
    alert("alert test");

    navigator.notification.beep(1);
    
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
