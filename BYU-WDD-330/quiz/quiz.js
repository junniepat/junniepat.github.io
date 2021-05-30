alert("Welcome to Quiz Ninja!");

const quiz = [{name:"Superman", realName:"Clark Kent"},
            {name:"Wonder Woman", realName:"Diana Prince"},
            {name:"Batman", realName:"Bruce Wayne"},];

let score = 0;

for (const [question, answer] of quiz) {
    const response = prompt(question);
    if (response === answer) {
        alert('Correct!');
        score++
    } else {
        alert('Wrong! The correct answer was ${answer}');
    }
}

alert('Game Over, you scored ${score}point${score !== 1 ? 's' : ''}');