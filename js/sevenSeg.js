


var database = firebase.database();

//firebase即時資料庫
$(document).ready(function(){

    let iot0624Ref = database.ref('iot0624/digit');
  iot0624Ref.on('value',function(snapshot){
     console.log(snapshot.val()); 
     var selectedValue = snapshot.val();
      $('.digits button')
          .removeClass('selected')
          .each(function(index,element){if(index==selectedValue){
          $(element).addClass('selected');
      }
          
      });  
  });

      $('.digits').on('click',function(event){
       let contentText = event.target.innerText;
          iot0624Ref.set(parseInt(contentText));
         
    
        
    });
    });

