let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreUpdate = document.querySelector("#user-score");
const compScoreUpdate = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw, Play Again.";
    msg.style.backgroundColor = "#081b31";
}

const showinner = (userWin, userChoice, comChoice) => {
    if(userWin) {
        userScore++;
        userScoreUpdate.innerText = userScore;
        msg.innerText = `You Win, Your ${userChoice} beats ${comChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreUpdate.innerText = compScore;
        msg.innerText = `You lose, ${comChoice} beats Your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const comChoice = genCompChoice();

    if(userChoice === comChoice) {
        drawGame();
    } else {
      let userWin = true;
      if(userChoice === "Rock") {
        //scissors, paper
        userWin = comChoice === "Paper" ? false : true;
      } else if (userChoice === "Paper") {
        //rock, scissors
        userWin = comChoice === "Scissors" ? false : true;
      } else {
        //rock, paper
        userWin = comChoice === "Rock" ? false : true;
      }
      showinner(userWin, userChoice, comChoice);
    }    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});