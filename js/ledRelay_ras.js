// Initialize Firebase
var database = firebase.database();
var btnState;
//firebase即時資料庫
$(document).ready(function(){
    database.ref("iotr0624/lcdControl").on('value',function(snapshot){
       //console.log(snapshot.val())
        btnState = snapshot.val();
        if(btnState){
            $("#btn3").addClass('btn3-open');
            
                   
        }else{
            $("#btn3").removeClass('btn3-open');
            
        }
    });

    $("#btn4").on("click",function(event){
        event.preventDefault();
        database.ref("iotr0624/lcdControl").set(!btnState);
        
        
    })
    
    
    
    
});
//Authentication Of Firebase
firebase.auth().signInWithEmailAndPassword("dach@gmail.com", "123456")
    .then(function(result){
        console.log("login 成功");
    })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode,errorMessage)
  // ...
});


