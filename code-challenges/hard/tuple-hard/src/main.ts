const players: [string, number, string][] = [["Davie", 49, "USA"], ["Benie", 74, "Canada"], ["Stephen", 20, "Ghana"], 
["Micheal", 85, "Thailand"], ["Erwin", 93, "Japan"], ["Dadju", 59, "China"], ["Timmy", 76, "Russia"], 
["Tayo", 98, "Nigeria"], ["Pam", 55, "Morocco"], ["Jerry", 86, "Chad"]];

// Total Number of Players
const numberOfPlayers = players.length;

// Display the Highest Score
const displayHighestScore = () => {
    let highestScore: number = 0;
    for (let i: number = 0; i < numberOfPlayers; i++) {
        if ((players[i]?.[1] ?? 0) >= highestScore) {
            highestScore = players[i]?.[1] ?? 0;
        }
    }

    console.log(highestScore);    
}

// Display the Lowest Score
const displayLowestScore = () => {
    // Get the max value... We can either assume 100 is the max, or 
    // find the highest score with the highest score funtion and use it as a focal/threshold point for 
    // lowest score comparison... I will go with 100 being the max score.
    let lowesetScore: number = 100;
    for (let i: number = 0; i < numberOfPlayers; i++) {
        if ((players[i]?.[1] ?? 0) <= lowesetScore) {
            lowesetScore = players[i]?.[1] ?? 0;
        }
    }

    console.log(lowesetScore);    
}

// Display the Average Score
const displayAverageScore = () => {
    let averageScore: number = 0;
    for (let i: number = 0; i < numberOfPlayers; i++) {
        averageScore += players[i]?.[1] ?? 0;
    }

    averageScore = averageScore / numberOfPlayers;
    console.log(averageScore);    
}


displayHighestScore()
displayLowestScore()
displayAverageScore()