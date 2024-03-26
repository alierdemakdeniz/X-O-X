const box = document.querySelectorAll(".box")
const x = `<p style="color:yellow">X</p>`;
const o = `<p style="color:red">O</p>`;
const winnerBox = document.getElementById("winner")
const massageBox = document.getElementById("massage-box")

let next = false
let a = 0;
let b = 0;

document.addEventListener("click", (e) => {
    if (e.target.className === "box" && e.target.innerHTML === "") {

        if (next) {

            e.target.innerHTML = o;
            next = false;

            a++;
        } else {

            e.target.innerHTML = x;

            next = true;
            b++;
        }
        if (b >= 3 || a >= 3) {

            checkGame();
        }
        if (b === 5) 
            draw();
        }
    })
function reloaded() {
    document
        .location
        .reload(true);
}
function whoWin(i) {

    if (box[i].innerHTML === x) {

        winnerBox.style.display = "flex";
        massageBox.style.backgroundColor = "yellow"
        massageBox.innerHTML = `<span class="text">Tebrikler X Kazandı</span>
        <button type="button" class="button" onclick="reloaded();" >Tekrar Oyna</button>`
    } else if (box[i].innerHTML === o) {

        winnerBox.style.display = "flex";
        massageBox.style.backgroundColor = "red"
        massageBox.innerHTML = `<span class="text">Tebrikler O Kazandı</span>
        <button type="button" class="button" onclick="reloaded();">Tekrar Oyna</button>`
    }

}
function draw() {
    winnerBox.style.display = "flex";
    massageBox.style.backgroundColor = "white"
    massageBox.innerHTML = `<span class="text">Berabere Kaldınız</span>
        <button type="button" class="button" onclick="reloaded();" >Tekrar Oyna</button>`

}
function checkGame() {

    for (let i = 0; i <= 2; i++) {
        if (box[i].innerHTML === box[i + 3].innerHTML && box[i].innerHTML === box[i + 6].innerHTML) {
            whoWin(i)
        }
    }

    for (let i = 0; i <= 6; i = i + 3) {
        if (box[i].innerHTML === box[i + 1].innerHTML && box[i].innerHTML === box[i + 2].innerHTML) {
            whoWin(i)
        }
    }
    if (box[0].innerHTML === box[4].innerHTML && box[0].innerHTML === box[8].innerHTML) {
        whoWin(0)
    }
    if (box[2].innerHTML === box[4].innerHTML && box[2].innerHTML === box[6].innerHTML) {
        whoWin(2);
    }
}
