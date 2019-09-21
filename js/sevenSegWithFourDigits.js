






$(function(){
    //檢查寬度
    function checkwindow(){
    if(window.innerWidth > 767){
       $(".displayArea .tab").hide();
       $(".tabcontent").show(); 
    }else{
        $(".tabcontent").hide().first().show(); 
        $(".tablinks").first().addClass("current");
        $(".displayArea .tab").show();
    }
        };
    //檢查寬度end
    checkwindow();
    $(window).resize(function(event){
        checkwindow();
        
         });
    $('.tab').on('click',function(event){
           event.preventDefault;
            switch(event.target.textContent){
                   case "攝氐":
                        $(".tabcontent").hide().eq(0).show();
                        $(".tablinks").removeClass("current").first().addClass("current");
                        break;
                case "華氐":
                        $(".tabcontent").hide().eq(1).show();
                    $(".tablinks").removeClass("current").eq(1).addClass("current");
                        break;
                case "絕對溫度":
                        $(".tabcontent").hide().eq(2).show();
                    $(".tablinks").removeClass("current").eq(2).addClass("current");
                        break;
                   }
       
    });
                     });
var database = firebase.database();

//firebase即時資料庫
$(document).ready(function(){

    let iot0624Ref = database.ref('iot0624/temperature');
  iot0624Ref.on('value',function(snapshot){
     console.log(snapshot.val()); 
     var temperatureValue = snapshot.val();
     var fahValue=temperatureValue*(9/5)+32;//華氏 = 攝氏*(9/5)+32
      $('#ces').text(temperatureValue.toFixed(2)+'°C');
      $('#fah').text(fahValue.toFixed(2)+'°F');
      
      $('#kelvin').text((temperatureValue+273.15).toFixed(2)+'K');
          
      });
          
      });  
 
