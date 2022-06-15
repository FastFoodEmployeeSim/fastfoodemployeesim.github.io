var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (document.getElementById('play-on-itch') !== null) {
  document.getElementById('play-on-itch').onclick = () => {
    document.getElementById('play-on-itch').innerText = 'When it comes out...'
  }
}

if (isMobile) {
  document.body.style.fontSize = "18px"
  if (document.getElementsByClassName("about-text")[0] !== undefined) {
    document.getElementsByClassName("about-text")[0].style.margin = "0 5%"
  }

  if (document.getElementsByClassName("download-btn")[0] !== undefined) {
    for (var i = 0; i < document.getElementsByClassName("download-btn").length; i++) {
      document.getElementsByClassName("download-btn")[i].style.padding = "10px"
    }
  }

  if (document.getElementsByClassName("downloads-other-box")[0] !== undefined) {
    document.getElementsByClassName("downloads-other-box")[0].style.fontSize = "16px";
    document.getElementsByClassName("downloads-other-box")[0].style.paddingLeft = "15px"
    document.getElementsByClassName("downloads-other-box")[0].style.paddingRight = "5px"
    document.getElementsByClassName("downloads-other-box")[0].style.margin = "0 5%"
  }

  if (document.getElementsByClassName("game-guide-main")[0] !== undefined) {
    document.getElementsByClassName("game-guide-main")[0].style.fontSize = "16px";
    document.getElementsByClassName("game-guide-main")[0].style.paddingLeft = "15px"
    document.getElementsByClassName("game-guide-main")[0].style.paddingRight = "5px"
    document.getElementsByClassName("game-guide-main")[0].style.margin = "0 5%"

    for (var i = 0; i < document.getElementsByClassName("game-guide-main")[0].getElementsByTagName("p").length; i++) {
      document.getElementsByClassName("game-guide-main")[0].getElementsByTagName("p")[i].style.marginLeft = "20px"
    }

    for (var i = 0; i < document.getElementsByClassName("game-guide-main")[0].getElementsByTagName("ul").length; i++) {
      document.getElementsByClassName("game-guide-main")[0].getElementsByTagName("ul")[i].style.marginLeft = "30px"
    }

  }

  document.getElementsByClassName("nav-links")[0].style.top = "15px"

}