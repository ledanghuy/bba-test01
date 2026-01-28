console.log("Bài 1:");

let playName = "Mario";
let currentLives = 3;
const level1Coin = 25;
const level2Coin = 30;
const level3Coin = 45;

console.log("Tính tổng coin của 3 leve sau đó tính giá trị trung bình");

let sumCoin = level1Coin + level2Coin + level3Coin;
let tbCoin = sumCoin / 3;

console.log(`Tổng coin của 3 level là : ${sumCoin} `);
console.log(`Giá trị trung bình là : ${tbCoin} `)
console.log(`In ra số coin dư khi chia tổng số coin cho 3:  ${sumCoin % 3} `);