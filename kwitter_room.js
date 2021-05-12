
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBKjY-dy4FkThCUz052bGrUs2-vlzq4PVk",
      authDomain: "kwitter-1445b.firebaseapp.com",
      projectId: "kwitter-1445b",
      storageBucket: "kwitter-1445b.appspot.com",
      messagingSenderId: "803114523711",
      appId: "1:803114523711:web:1e16f4b50778d58b506c8a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
