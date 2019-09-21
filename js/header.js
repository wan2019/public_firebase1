//menu
$(function () {
    $.ajax({
        dataType: "json",
        url: "menu.json",
        success: function(data){
            var menuHtml = "";
            jQuery.each(data,function(key,value){
                menuHtml += "<li><a href=\""+ value + "\">" + key + "</a></li>\n";
            });

            $("header ul").prepend(menuHtml);
        }
    });
    });

//登入按鈕
$(function(){
    let $alert = $(".alert");
    /*$alert.hide();*/
    $('.sign').on('click',function(event){
    
         $alert.slideDown();
        event.preventDefault();
        $('.cancel').on("click",function(event){
            $alert.hide();
            console.log('$alert');
            });
        $(".alert").on("click",function(){
            $alert.hide();   
        }).children().on("click",function() {
        return false;
        });
    });
});
//menu按鈕
$(function(){
    var menuState=false;
    $("#kkk").on("click touchstart",function(event){
        menuState = !menuState;
        let smallWindos =$(window).width()<=992 ;
        if(menuState&&smallWindos){
            console.log("open");
            $('#ma').addClass('t');
            $('#mb').addClass('tt');
            $('.mc').addClass('ttt');
            $('.md').addClass('ttt');
            
            $("#head ul").slideDown();
            
           
        }else{
            console.log("close");
            $('#ma').removeClass('t');
            $('#mb').removeClass('tt');
            $('.mc').removeClass('ttt');
            $('.md').removeClass('ttt');
            $("#head ul").slideUp();
            
            
        } event.preventDefault();
    });
    
    $(window).resize(function(event){
        console.log(window.innerWidth)
        if(window.innerWidth > 992 ){
            
        $("#head ul").show();}
});

});