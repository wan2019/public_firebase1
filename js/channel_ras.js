//firebase即時資料庫
let database = firebase.database();


//firebase
$(document).ready(function(){
    let registerRef = database.ref("iotr0624/MCP3008/register");
    registerRef.on('value',function(snapshot) {
        let registerValue = snapshot.val();
        $("#mybar")
        .finish()
        .animate(
            {
            "width":registerValue.toString() + "%"
            }
            ,200,"linear")
        .text(registerValue.toString() + "%");
    });
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

