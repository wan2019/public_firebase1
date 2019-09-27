
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



//progress interface
//提取firestore

var myFirebase = firebase.firestore();

//firebase

$(document).ready(() => {
      myFirebase.collection("Door").orderBy("timestamp",  "desc").limit(20).get().then((querySnapshot) => {

        $accessDisplay = $("#accessDisplay");
        querySnapshot.forEach((doc) => {
            console.log("姓名:" + doc.data().name + "\n" + "時間:" + doc.data().time);
            let name = doc.data().name;
            let time = doc.data().time;
            $user = $("<div class='user'><h3>" + name + "</h3><p>" + time + "</p></div>");
            $accessDisplay.append( $user);

        });
       });

});