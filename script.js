let answerButton = document.querySelector(".answer-button");
let resultShow = document.querySelector(".result");
let img1 = "https://sicarfarms.com/wp-content/uploads/2021/01/Mango.png";
let counter = 0;
let howManyTimes = document.querySelector(".howmanytimes");
answerButton.onclick = (function() {
    counter = counter + 1;
    let q1Input = document.querySelector(".q1").value;
    let q2Input = document.querySelector(".q2").value;
    if (q1Input <= 3 && q2Input === "confident") {
        resultShow.innerHTML = "Since you proform " + q1Input + " times and you were confident during the profarmence, you should be Mango";

    } else if (q1Input <= 3 && q2Input === "scared") {
        resultShow.innerHTML = "Since you proform " + q1Input + " times and you were scared during the profarmence, you should be banana";

    } else if (q1Input <= 3 && q2Input === "don't care") {
        resultShow.innerHTML = "Since you proform " + q1Input + " times and you were scared during the profarmence, you should be kiwi ";

    } else if (q1Input >= 3 && q2Input === "confident") {
        resultShow.innerHTML = "Since you proform " + q1Input + " times and you were confident during the profarmence, you should be coconut ";

    } else if (q1Input >= 3 && q2Input === "don't care") {
        resultShow.innerHTML = "Since you proform " + q1Input + " times and you were scared during the profarmence, you should be kiwi ";

    } else if (q1Input >= 3 && q2Input === "confident") {
        resultShow.innerHTML = "Since you proform " + q1Input + " times and you were scared during the profarmence, you should be cherries ";

    } else if (q1Input >= 3 && q2Input === "scared") {
        resultShow.innerHTML = "Since you proform " + q1Input + " times and you were scared during the profarmence, you should be cherries ";

    } else {
        resultShow.innerHTML = "I think you did something wrong";
    }
    howManyTimes.innerHTML = "You took the game " + counter + " times.";

});