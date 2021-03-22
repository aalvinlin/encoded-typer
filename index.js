// store state of application
defaultAppState = {
    hasStartedTyping: false,
    startTime: null,
    endTime: null,
    generatedText: [],
    typedText: [],
    currentWordIndex: 0,
    currentLetterIndex: 0,
    encodingType: null,
    wordsToGenerate: 10,
    subsetSize: 100,
    wordList: "top1000"
}

appState = {...defaultAppState};

// returns the entire array of words from the word list stored in state
const getWords = () => {
    return wordLists[appState.wordList].words;
}

// on page load, prepopulate the dropdown menu with available word lists
const loadWordLists = () => {

    const select = document.getElementById("listDropdown");

    for (let listShortName in wordLists)
        {
            let description = wordLists[listShortName].description;

            let option = document.createElement("option");
            option.value = listShortName;
            option.textContent = description;

            select.appendChild(option);
        }
}

// selects N random words from specified word list
const selectNWords = n => {

    wordsChosen = new Array(n).fill(0);

    for (let i = 0; i < n; i += 1)
        {
            let totalItemsToChooseFrom = appState.subsetSize;
            wordsChosen[i] = getWords()[Math.floor(Math.random() * totalItemsToChooseFrom)];
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

const setUpText = (event, encodingType) => {

    // if button pressed, remove focus from the button so user can begin typing
    // maintain focus if this function was called from a number input
    if (event.target.type === "submit")
        { event.target.blur(); }

    // hide any previous results
    clearResults();

    // reset any previous data (except wordsToGenerate and subsetSize) in appState before starting
    let {wordsToGenerate, subsetSize} = appState;
    appState = {...defaultAppState, wordsToGenerate, subsetSize};

    appState.encodingType = encodingType;

    let selectedWords = selectNWords(appState.wordsToGenerate);

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
            currentLetter.classList.add(encodingType);

            // transform letter into encoding
            if (letter === " ")
                { currentLetter.textContent = letter; }
            
            else if (encodingType === "rot13")
                { currentLetter.textContent = alphabetToRot13[letter]; }
            
            else if (encodingType === "number")
                { currentLetter.textContent = alphabetToNumber[letter]; }
            
            else if (encodingType === "braille" || encodingType === "pigpen" || encodingType === "semaphore")
                {
                    let img = document.createElement("img");
                    img.setAttribute("src", `images/${encodingType}_${letter}.svg`);

                    currentLetter.appendChild(img);
                }
            
            else
                { currentLetter.textContent = letter; }

            currentWord.appendChild(currentLetter);
        })

        textDisplay.appendChild(currentWord);
    })
}

const updateTextSettings = (event, settingName) => {

    let value = parseInt(event.target.value);

    if (settingName === "wordsToGenerate")
        {
            // total words must be between 1 and 100
            if (value < 1 || value > 100)
                { return; }

            appState.wordsToGenerate = value;
        }

    else if (settingName === "subsetSize")
        {
            // subset size must be between 1 and length of word list
            if (value < 1 || value > getWords().length)
                { return; }

            appState.subsetSize = value;
        }
    
    // if an encoding has already been chosen, regenerate text
    if (appState.encodingType)
        { setUpText(event, appState.encodingType); }
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

    if (event.key === currentLetterChar || (currentLetterChar === " " && event.key === "Enter"))
        {
            // update CSS class to show the letter was typed correctly
            currentLetterDiv.classList.add("typedCorrect");

            // reveal plaintext letter
            currentLetterDiv.textContent = currentLetterChar;

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

    let button = document.createElement("button");
    button.textContent = "Generate New Text";
    button.addEventListener("click", event => setUpText(event, appState.encodingType));

    results.appendChild(h2);
    results.appendChild(paragraph);
    results.appendChild(button);
}

const clearResults = () => {
    document.getElementById("results").textContent = "";
}

// Some browsers will preserve user input across screen refreshes.
// Load any such inputs (or the default input values) into application state.
window.addEventListener("load", () => appState.wordsToGenerate = document.getElementById("wordsToGenerate").value);
window.addEventListener("load", () => appState.subsetSize = document.getElementById("subsetSize").value);

window.addEventListener("load", loadWordLists);

document.getElementById("plainTextButton").addEventListener("click", event => setUpText(event, "plainText"));
document.getElementById("rot13Button").addEventListener("click", event => setUpText(event, "rot13"));
document.getElementById("numberButton").addEventListener("click", event => setUpText(event, "number"));
document.getElementById("pigpenButton").addEventListener("click", event => setUpText(event, "pigpen"));
document.getElementById("brailleButton").addEventListener("click", event => setUpText(event, "braille"));
document.getElementById("semaphoreButton").addEventListener("click", event => setUpText(event, "semaphore"));

document.getElementById("wordsToGenerate").addEventListener("input", event => updateTextSettings(event, "wordsToGenerate"));
document.getElementById("subsetSize").addEventListener("input", event => updateTextSettings(event, "subsetSize"));

document.addEventListener("keydown", processKeyPress);