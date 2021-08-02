function addUser(){
  name1 = document.getElementById("input1").value;
  name2 = document.getElementById("input2").value;

  localStorage.setItem("1st_name", name1);
  localStorage.setItem("2nd_name", name2);

  window.location = "game_page.html";
}