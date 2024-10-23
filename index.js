let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThr = document.getElementById("home-score-btn-3");
let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThr = document.getElementById("guest-score-btn-3");

let homeContainer = document.getElementById("home-container");
let guestContainer = document.getElementById("guest-container");

let homeStoreEl = document.getElementById("home-score");
let homeScore = 0;
let guestStoreEl = document.getElementById("guest-score");
let guestScore = 0;


homeScoreBtnOne.addEventListener("click", ()=>{
    increaseHomeScore(1);
});
homeScoreBtnTwo.addEventListener("click", ()=>{
    increaseHomeScore(2);
});
homeScoreBtnThr.addEventListener("click", ()=>{
    increaseHomeScore(3);
});
guestScoreBtnOne.addEventListener("click", ()=>{
    increaseGuestScore(1);
});
guestScoreBtnTwo.addEventListener("click", ()=>{
    increaseGuestScore(2);
});
guestScoreBtnThr.addEventListener("click", ()=>{
    increaseGuestScore(3);
});


function increaseHomeScore(add_on){
    homeScore += add_on;
    homeStoreEl.textContent = homeScore;
    checkHighScore();
}

function increaseGuestScore(add_on){
    guestScore += add_on;
    guestStoreEl.textContent = guestScore;
    checkHighScore();
}

function checkHighScore(){
    homeContainer.style.backgroundColor = "#0a0001";
    guestContainer.style.backgroundColor = "#0a0001";

    if (homeScore > guestScore) {
        homeContainer.style.backgroundColor = "#F94F6D";
    }
    if (guestScore > homeScore) {
        guestContainer.style.backgroundColor = "#F94F6D";
    }
}
