const firebaseConfig = {
    apiKey: "AIzaSyC0aeQ36wca2sHfkFBSx_ilkzOIv_ijTEs",
    authDomain: "mitter-database.firebaseapp.com",
    databaseURL: "https://mitter-database-default-rtdb.firebaseio.com",
    projectId: "mitter-database",
    storageBucket: "mitter-database.appspot.com",
    messagingSenderId: "714061203488",
    appId: "1:714061203488:web:297da23653cd5d8d06d445"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var username= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + username + "😻";
function add_room() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
     Room_names = childKey;
     console.log("room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
    });});}
getData();
function redirectToRoomName (name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
