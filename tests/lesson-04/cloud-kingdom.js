console.log("Bài 1:");

let playName = "Mario";
let currentLives = 3;
const level_1_Coin = 25;
const level_2_Coin = 30;
const level_3_Coin = 45;

console.log("Tính tổng coin của 3 leve sau đó tính giá trị trung bình");

let sumCoin = level_1_Coin + level_2_Coin + level_3_Coin;
let tbCoin = sumCoin / 3;

console.log(`Tổng coin của 3 level là : ${sumCoin} `);
console.log(`Giá trị trung bình là : ${tbCoin} `)
console.log(`In ra số coin dư khi chia tổng số coin cho 3:  ${sumCoin % 3} `);