var canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//alert("This game is not suitable for mobile and widths less than maximum. Please Play the game with max size")

make_base();



function make_base() {
    base_image = new Image();
    base_image.src = "hol.png";
    base_image.onload = () => {
        context.drawImage(base_image, 0, 0, 300, 130)
    }
}

// let not = document.querySelector(".not").addEventListener("click", () => {
//     const div1 = document.createElement("div");

//     div1.className = "insideDiv";

//     div1.innerHTML = " Some nots about my life. Seems familiar though...";

//     document.querySelector(".chatbox").appendChild(div1)

//     setTimeout(() => {
//         div1.remove();
//     }, 3500)


// })

document.querySelector(".finish-button").addEventListener("click", (e) => {
    const Saat = localStorage.getItem("buttonS");
    const Resim = localStorage.getItem("buttonR");

    if ((Saat == "finished") && (Resim == "tıklandı")) {
        window.location.href = 'finish.html';

    } else {
        e.preventDefault();
        const div2 = document.createElement("div");

        div2.className = "insideDiv2";

        div2.innerHTML = "It is locked. You have to find the key for entering...";

        document.querySelector(".warning").appendChild(div2)
        setTimeout(() => {
            div2.remove();
        }, 4500)

    }
})