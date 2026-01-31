console.log("Bai so 5")



function findPairsDivisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = i; j <= 100; j++) {
            let sum = i + j;

            if (sum % 17 === 0) {

                console.log(`${i},${j} = ${sum}`);
                count = count + 1;
            }

        }

    }
    console.log(`Tổng cộng có : ${count} cặp`);
    return count;

}

findPairsDivisibleBy17();
