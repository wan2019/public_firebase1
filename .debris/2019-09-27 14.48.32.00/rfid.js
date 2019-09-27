let myFirebase = firebase.firestore();

//firebase
$(document).ready(() => {
    myFirebase.collection("Door").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("姓名:" + doc.data().name + "\n" + "時間:" + doc.data().time);
        });
    });
});