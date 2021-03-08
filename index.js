// store state of application
defaultAppState = {
    hasStartedTyping: false,
    startTime: null,
    endTime: null,
    generatedText: [],
    typedText: [],
    currentWordIndex: 0,
    currentLetterIndex: 0
}

appState = {...defaultAppState};

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

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetToRot13 = {};
const alphabetToNumber = {};

for (let i = 0; i < alphabet.length; i += 1)
    {
        alphabetToRot13[alphabet[i]] = alphabet[(i + 13) % 26];
        alphabetToNumber[alphabet[i]] = i + 1;
    }

console.log(alphabetToRot13);
console.log(alphabetToNumber);

const setUpText = (event, encodingType) => {

    // prevent space bar from pushing the button again by removing focus from the button
    event.target.blur();

    // hide any previous results
    clearResults();

    // reset any previous data in appState before starting
    appState = {...defaultAppState};

    let selectedWords = selectNWords(10);

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
        if (index < selectedWords.length - 1)
            { word += " "; }

        word.split("").forEach(letter => {
            let currentLetter = document.createElement("div");
            currentLetter.classList.add("letterBox");

            // transform letter into encoding

            currentLetter.textContent = letter;

            currentWord.appendChild(currentLetter);
        })

        textDisplay.appendChild(currentWord);
    })
}

const processKeyPress = event => {

    // ignore if text has not been generated yet
    if (!appState.generatedText || !appState.generatedText[0])
        { return; }

    // if text has been generated, user hasn't typed anything yet, and the key press matches the first letter, set flag for started typing
    if (!appState.hasStartedTyping && event.key === appState.generatedText[0][0])
        {
            appState.hasStartedTyping = true;
            appState.startTime = Date.now();
        }

    // if keypress was correct, update application state
    let currentWordDiv = document.getElementById("textDisplay").children[appState.currentWordIndex];

    // if there are no more words, skip processing
    if (!currentWordDiv)
        { return; }

    let currentLetterDiv = currentWordDiv.children[appState.currentLetterIndex];

    let currentWordString = appState.generatedText[appState.currentWordIndex];
    let currentLetterChar = currentWordString[appState.currentLetterIndex];

    if (event.key === currentLetterChar)
        {
            // update CSS class to show the letter was typed correctly
            currentLetterDiv.classList.add("typedCorrect");

            // if this is the last letter of the word, update both word index and letter index
            if (appState.currentLetterIndex === currentWordString.length - 1)
                {
                    appState.currentWordIndex += 1;
                    appState.currentLetterIndex = 0;
                }
            else
                {
                    appState.currentLetterIndex += 1;
                }
                
            // if there are no more words, calculate results
            if (!currentWordDiv.nextElementSibling && !currentLetterDiv.nextElementSibling)
                {
                    appState.endTime = Date.now();
                    let elapsedTime = appState.endTime - appState.startTime;

                    let totalCharacters = appState.generatedText.join(" ").length;
                    let wpm = Math.round((totalCharacters / 5) / (elapsedTime / 60000));

                    displayResults(elapsedTime, totalCharacters, wpm);
                }
    }

}

const displayResults = (elapsedTime, totalCharacters, wpm) => {

    const results = document.getElementById("results");

    let h2 = document.createElement("h2");
    h2.textContent = `${wpm} WPM`;

    let paragraph = document.createElement("p");
    paragraph.textContent = `(${totalCharacters} characters in ${Math.round(elapsedTime / 100) / 10} seconds)`;

    results.appendChild(h2);
    results.appendChild(paragraph);
}

const clearResults = () => {
    document.getElementById("results").textContent = "";
}

document.getElementById("plainTextButton").addEventListener("click", event => setUpText(event, "plainText"));
document.getElementById("rot13Button").addEventListener("click", event => setUpText(event, "rot13"));
document.getElementById("numberButton").addEventListener("click", event => setUpText(event, "number"));
document.getElementById("pigpenButton").addEventListener("click", event => setUpText(event, "pigpen"));
document.getElementById("brailleButton").addEventListener("click", event => setUpText(event, "braille"));
document.getElementById("semaphoreButton").addEventListener("click", event => setUpText(event, "semaphore"));

document.addEventListener("keydown", processKeyPress);