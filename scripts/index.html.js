var downloadLink = document.getElementById("main-download-btn")

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function gameInstalled(user) {
  var game = localStorage.getItem("gameStatus")
  if (game) {
    return true;
  }
  return false;
}

if (gameInstalled()) {
  downloadLink.innerText = "Open Game"
  downloadLink.href = "hello-world-test-1://"
} else {
  downloadLink.innerText = "Download Game"
}
