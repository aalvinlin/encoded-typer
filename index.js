// selects N random words from top1000.js
const selectNWords = n => {

    wordsChosen = new Array(n).fill(0);

    for (let i = 0; i < n; i += 1)
        {
            const randomDigit = Math.floor(Math.random() * 10);
            let lastIndexToChooseFrom = 1000;

            // weight choices
            // // 30% chance of selecting from first 10 words
            // if (randomDigit < 3)
            //     { lastIndexToChooseFrom = 10; }
            // // 40% chance of selecting from first 100 words
            // else if (randomDigit < 7)
            //     { lastIndexToChooseFrom = 100; }
            // // 30% chance of selecting from first 1000 words
            // else
            //     { lastIndexToChooseFrom = 1000; }

            wordsChosen[i] = top1000[Math.floor(Math.random() * lastIndexToChooseFrom)];
        }

    return wordsChosen;
}

