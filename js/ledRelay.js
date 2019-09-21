
var database = firebase.database();
var btnState;
//firebase即時資料庫
$(document).ready(function(){
    database.ref("iot0624/LED").on('value',function(snapshot){
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
        database.ref("iot0624/LED").set(!btnState);
        
        
    })
});
