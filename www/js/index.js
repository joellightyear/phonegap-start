

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log(navigator.notification);
    
     alert("alert test");

//    navigator.notification.beep(1);
    
	$('#taptext').on("tap",function(){
        
        var randBool = random()
  
       $("#taptext").html(randBool.toString());
        
        if (randBool == true) {
            
            alert("true");
            navigator.notification.beep(1);
            
            } else {
               alert("false");
            navigator.nostification.beep(2);
                
        }
        
 	}); 
    
}

/*
$(document).on("pagecreate","#pageone",function(){                 
    
    alert("alert test");

//    navigator.notification.beep(1);
    
	$('#taptext').on("tap",function(){
        
        var randBool = random()
  
       $("#taptext").html(randBool.toString());
        
        if (randBool == true) {
            
            alert("true");
            navigator.notification.beep(1);
            
            } else {
               alert("false");
            navigator.nostification.beep(2);
                
        }
        
 	}); 

});

function random() {
	return !Math.round(Math.random());
}
*/
