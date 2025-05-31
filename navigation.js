function verticalnav() {
  var x = document.getElementById("topNav");
  if (x.className === "navigationbar") {
    x.className += " responsive";
  } else {
    x.className = "navigationbar";
  }
}