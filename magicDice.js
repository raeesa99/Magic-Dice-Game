let imgs = ["images/1.png",
            "images/2.png",
            "images/3.png",
            "images/4.png",
            "images/5.png",
            "images/6.png"
            ];

const dice = document.getElementsByClassName('dice');
let btn = document.getElementById('btn');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let total = 0;
let gameEnded = false;

btn.addEventListener("click", roll);

function main() {
  let name = prompt("Hey, choose your player name");
  name1 = name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById("player").innerHTML = `Player: ${name1}`;
}

function roll() {
    let random = Math.ceil(Math.random()*6)
    total = total + random;
    document.querySelector('#one').setAttribute("src", imgs[random - 1]);

    if (random == 6) {
        document.getElementById("bannerText").textContent = "A 6?! Game Over";
        gameEnded = true;

    } else if (total >= 15) {
        document.getElementById("bannerText").textContent = `${total}... You win!`;
        gameEnded = true;
    };

    document.querySelector("#total").innerHTML = "Total Score: " + total;

     if (!gameEnded) {
      return;
     };

     btn.removeEventListener("click", roll)
     document.getElementById('message').textContent = `Would you like to play again  ${name1}?`;
     yes.textContent = "Yes"
     no.textContent = "No"
     yes.addEventListener("click", play);
     no.addEventListener("click", leave);
};

main();

function play() {
        btn.addEventListener("click", roll)  
        document.getElementById("bannerText").textContent = ``;
        document.getElementById('message').textContent = ``;
        yes.textContent = ""
        no.textContent = ""
        total = 0;
        document.querySelector("#total").innerHTML = "Total Score: ";
        gameEnded = false;
};

function leave() {
    alert(`Thanks for playing ${name1}`)
        location.reload();
};