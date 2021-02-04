 var canvas = document.getElementById("canvas");
 context = canvas.getContext("2d");

 //alert("This game is not suitable for mobile and widths less than maximum. Please Play the game with max size")

 make_base();


 function make_base() {
     base_image = new Image();
     base_image.src = "evdir.png";
     base_image.onload = () => {
         context.drawImage(base_image, 0, 0, 300, 130)
     }
 }

 let not = document.querySelector(".not").addEventListener("click", () => {
     const div1 = document.createElement("div");

     div1.className = "insideDiv";

     const lock = localStorage.getItem("buttonR")
     const finished = localStorage.getItem("buttonS")
     if ((lock == "tıklandı") && !(finished == "finished")) {
         div1.innerHTML = "Art was a good right? Im on you!";

     } else if ((lock == "tıklandı") && (finished == "finished")) {
         div1.innerHTML = "Art was beautiful like the girl I KİLLED ";

     } else {
         div1.innerHTML = "Some nots about my life"

     }





     document.querySelector(".chatbox").appendChild(div1)

     setTimeout(() => {
         div1.remove();
     }, 3500)



 })


 // function startTimer(duration, display) {
 //     var timer = duration,
 //         minutes, seconds;
 //     setInterval(function() {
 //         minutes = parseInt(timer / 60, 10);
 //         seconds = parseInt(timer % 60, 10);

 //         minutes = minutes < 10 ? "0" + minutes : minutes;
 //         seconds = seconds < 10 ? "0" + seconds : seconds;

 //         display.textContent = minutes + ":" + seconds;

 //         if (--timer < 0) {

 //             document.querySelector(".wrapper").remove();

 //             const div1 = document.createElement("div");

 //             div1.className = "GameOver";

 //             div1.innerHTML = " Sorry, You Died because of time shortage";

 //             document.querySelector(".container").appendChild(div1)

 //         }
 //     }, 1000);
 // }

 // window.onload = function() {
 //     var fiveMinutes = 1,
 //         display = document.querySelector('#time');
 //     startTimer(fiveMinutes, display);
 // };