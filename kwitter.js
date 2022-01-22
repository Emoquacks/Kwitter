function add_user()
{
  var username = document.getElementById("username").value;
  localStorage.setItem("user_name", username);
  window.location="Kwitter_room.html"
}