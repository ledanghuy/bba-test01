console.log("Bai so 1");

function createCharacters() {

    const characters =
        [
            { name: "huy", level: 1, health: 100 },
            { name: "bình", level: 2, health: 400 },
            { name: "an", level: 3, health: 200 },
            { name: "hùng", level: 4, health: 500 },

        ]

    const charactersPowerUp = characters.map(num =>

    (
        {
            name: num.name.toUpperCase(),
            level: num.level * 2,
            health: num.health * 3,


        }
    ));

    const possibleWinners = charactersPowerUp.filter(num => num.health > 1000);


    return possibleWinners;

}
console.log(createCharacters());
console.log("=========================================================================");
console.log("Bai so 2");


function printLeaderboard() {

    const players =
        [
            { name: "Mario", score: 100 },
            { name: "Luigi", score: 900 },
            { name: "Peach", score: 850 },
            { name: "Yoshi", score: 800 },
            { name: "Phong", score: 500 },
            { name: "Tuấn", score: 300 },
            { name: "Bình", score: 400 },
            { name: "Hoàng", score: 550 }
        ]

    players.sort((a, b) => b.score - a.score);

    for (let i = 0; i < players.length; i++) {
        let hang = "";
        if (i === 0) {
            hang = "🥇";
        }
        else if (i === 1) {
            hang = "🥈";
        }
        else if (i === 2) {
            hang = "🥉";
        } else {
            hang = "";
        }

        console.log(`${hang}${i + 1}.${players[i].name} - ${players[i].score}`);

    }

    return players;



}

console.log(printLeaderboard());




