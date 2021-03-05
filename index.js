// store state of application
appState = {
    hasStartedTyping: false,
    startTime: null,
    endTime: null,
    generatedText: [],
    typedText: []
}

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

const setUpText = event => {

    let selectedWords = selectNWords(50);

    // store generated words
    appState.generatedText = selectedWords;

    let textDisplay = document.getElementById("textDisplay");

    // remove any previous text
    while (textDisplay.firstElementChild)
        { textDisplay.firstElementChild.remove(); }

    // create individual divs for words and letters
    selectedWords.forEach((word, index) => {
        let currentWord = document.createElement("div");
        currentWord.classList.add("wordBox");

        // add a space after the word, if not the last word in the text
        if (index < word.length - 1)
            { word += " "; }

        word.split("").forEach(letter => {
            let currentLetter = document.createElement("div");
            currentLetter.classList.add("letterBox");
            currentLetter.textContent = letter;

            currentWord.appendChild(currentLetter);
        })

        textDisplay.appendChild(currentWord);
    })
}

document.getElementById("plainTextButton").addEventListener("click", setUpText);
document.getElementById("rot13Button").addEventListener("click", setUpText);
document.getElementById("numberButton").addEventListener("click", setUpText);
document.getElementById("pigpenButton").addEventListener("click", setUpText);
document.getElementById("brailleButton").addEventListener("click", setUpText);
document.getElementById("semaphoreButton").addEventListener("click", setUpText);