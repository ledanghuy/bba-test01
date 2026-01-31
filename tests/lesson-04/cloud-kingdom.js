console.log("Bài 2:");

let powerUp = "star";
let effect = "";

if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
} else if (powerUp === "flower") {
    effect = "Mario can shoot fireballs!";
} else if (powerUp === "star") {
    effect = "Mario is invincible!";
} else if (powerUp === "none") {
    effect = "Mario is normal";
} else {
    effect = "Unknown power-up";
}

console.log(effect);