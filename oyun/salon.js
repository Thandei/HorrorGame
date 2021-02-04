 document.querySelector(".buttonS").addEventListener("click", (e) => {
     let container = document.querySelector(".container")
     e.preventDefault();
     container.classList.add("overlay");


     localStorage.setItem("buttonS", "finished");

     container.insertAdjacentHTML("beforebegin", `
    <div class="overlayContainer">
    <div class="overlayDiv"> Seems stopped at 3 o'clock! <br>
    Even if it seems arbitrary, there can be meaning behind it...   </div>
    <img src="./salonsaat2.png" class="overlayİmg">
    </div>`)

     setTimeout(() => {
         document.querySelector(".overlayContainer").remove();
         container.classList.remove("overlay");

     }, 4000)
 });

 document.querySelector(".buttonK").addEventListener("click", (e) => {
     let container = document.querySelector(".container")
     e.preventDefault();
     container.classList.add("overlay");


     container.insertAdjacentHTML("beforebegin", `
    <div class="overlayContainer">
    <div class="overlayDiv"> Toilet! <br>
    No need right now   </div>
    <img src="./kapıSalon.png" class="overlayİmg">
    </div>`)

     setTimeout(() => {
         document.querySelector(".overlayContainer").remove();
         container.classList.remove("overlay");

     }, 4000)
 });

 document.querySelector(".buttonR").addEventListener("click", (e) => {
     let container = document.querySelector(".container")
     e.preventDefault();
     container.classList.add("overlay");

     localStorage.setItem("buttonR", "tıklandı")


     container.insertAdjacentHTML("beforebegin", `
    <div class="overlayContainer">
    <div class="overlayDiv"> Such an Art! <br>
    Here it is masterpiece...   </div>
    <img src="./salonTablo.png" class="overlayİmg">
    </div>`)

     setTimeout(() => {
         document.querySelector(".overlayContainer").remove();
         container.classList.remove("overlay");

     }, 4000)


 });