

console.log("Bai so 5")


let count = 0;
function findPairsDivisibleBy17() {

    for (let i = 1; i <= 100; i++) {
        for (let j = i; j <= 100; j++) {
            let sum = i + j;
            if (sum % 17 === 0) {
                count = count + 1;
                console.log(`(${i},${j}) = ${sum}`);

            }

        }

    }

    return count;

}
let a = findPairsDivisibleBy17();
console.log(`Có tất cả ${a} cặp số`);