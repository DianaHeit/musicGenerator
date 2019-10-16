var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // alert("got clicked");

    //
    // this.style.color = "white";
    // document.write(this.innerHTML);

    var letterOrButtonInnerHtml = this.innerHTML;

    switch (letterOrButtonInnerHtml) {
      case "a":
        var audio = new Audio("sounds/cat.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/hawk.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/piano.mp3");
        audio.play();
        break;

      case "f":
        var audio = new Audio("sounds/ape.mp3");
        audio.play();
        break;

      case "g":
        var audio = new Audio("sounds/shock.mp3");
        audio.play();
        break;

      case "x":
        var audio = new Audio("sounds/mystic.mp3");
        audio.play();
        break;

      default: console.log(letterOrButtonInnerHtml);

    }

  });
}


document.addEventListener("keydown", function(event){
  makeSound(event.key);
});

function makeSound(key){
  switch (key) {
    case "a":
      var audio = new Audio("sounds/cat.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/hawk.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/piano.mp3");
      audio.play();
      break;

    case "f":
      var audio = new Audio("sounds/ape.mp3");
      audio.play();
      break;

    case "g":
      var audio = new Audio("sounds/shock.mp3");
      audio.play();
      break;

    case "x":
      var audio = new Audio("sounds/mystic.mp3");
      audio.play();
      break;

    default: console.log(key);

  }
}
