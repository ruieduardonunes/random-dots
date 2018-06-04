function getWord() {
  var array = [];
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var text = xmlhttp.responseText;
      // Now convert it into array using regex
      array = text.split(/\n|\r\s|\s|[, ]+/g);
      var word = array[Math.floor(Math.random() * array.length)];

      document.getElementById("word").textContent = word;
    }
  };
  xmlhttp.open("GET", "/disruptive-inspiration/data/words.txt", true);
  xmlhttp.send();
}

window.onload = getWord();

function showLearn() {
  var wrapper = document.getElementById("learn");

  wrapper.style.top = "0";
}

function closeLearn() {
  var wrapper = document.getElementById("learn");

  wrapper.style.top = "102vh";
}

function reloadImage() {
  var image = document.getElementsByClassName("hero-img")[0];

  image.src = "https://source.unsplash.com/1600x900/?places,life";
}
