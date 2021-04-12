const readLineSync = require("readline-sync");
var score = 0;

var userName = readLineSync.question("Enter Your Username : ")
console.log("Hey " + userName + " Lets See how well do you know me ?")
console.log("write answer to each question presented to you")

var que1 = {
    que: "Where Do i Live ? ",
    ans: "Nagpur"
}
var que2 = {
    que: "Which is my fav player ? ",
    ans: "virat"
}
var que3 = {
    que: "Which is my fav dish ? ",
    ans: "Pullav"
}
var que4 = {
    que: "Which is my fav color ? ",
    ans: "blue"
}


function play(que, ans) {

    var answer = readLineSync.question(que)
    if (answer.toLowerCase() === ans.toLowerCase()) {
        console.log("Right")
        score = score + 1;
    } else {
        console.log("Wrong")
        score = score - 1;
    }

}

var questions = [que1, que2, que3, que4];

questions.forEach((q) => {
    play(q.que, q.ans)
})

console.log("Final Score is " + score);